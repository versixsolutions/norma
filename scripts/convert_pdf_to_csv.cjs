const fs = require('fs');
const pdf = require('pdf-parse');

const PDF_PATH = 'scripts/Pinheiro_Park_2025.pdf';
const CSV_PATH = 'scripts/dados_financeiros.csv';
const CONDOMINIO_ID = '5c624180-5fca-41fd-a5a0-a6e724f45d96';

// Map months to dates (2025)
const MONTHS = [
    '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', 
    '2025-05-01', '2025-06-01', '2025-07-01', '2025-08-01', '2025-09-01'
];

async function main() {
    const dataBuffer = fs.readFileSync(PDF_PATH);
    const data = await pdf(dataBuffer);
    const text = data.text;
    
    const lines = text.split('\n');
    const transactions = [];
    
    let currentCategory = null;
    let currentDescription = '';
    
    // Regex to match category code at start of line (e.g., "1.1.01-")
    const categoryRegex = /^(\d+(\.\d+)*)-(.+)/;
    
    // Regex to match currency values (e.g., "29.250,20" or "-534.173,30")
    // Matches optional minus, then digits with optional dots, then comma and 2 digits
    const valueRegex = /-?(\d{1,3}(\.\d{3})*|\d+),\d{2}/g;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) continue;
        
        // Check if line starts with a category code
        const catMatch = line.match(categoryRegex);
        
        if (catMatch) {
            // Found a new category line
            currentCategory = catMatch[1];
            // The description might be the rest of the line, but we need to check if it contains numbers
            // If the line contains the sequence of monthly values, we process it.
            // If not, it might be a wrapped description.
            
            // Check for values in this line
            const values = line.match(valueRegex);
            
            if (values && values.length >= 9) {
                // Line has category AND values
                // Description is everything before the first value
                // But we need to be careful not to include the values in description
                // We can split by the first value match
                const firstValueIndex = line.indexOf(values[0]);
                let description = line.substring(0, firstValueIndex).trim();
                // Remove the code prefix from description if it's still there (it is)
                description = description.replace(currentCategory + '-', '').trim();
                
                processValues(currentCategory, description, values);
                currentCategory = null; // Reset
            } else {
                // Line has category but NO values (or not enough)
                // It's likely a wrapped description
                currentDescription = catMatch[3].trim();
                // We continue to next line to find values or more description
            }
        } else if (currentCategory) {
            // We are inside a category but looking for values or more description
            const values = line.match(valueRegex);
            
            if (values && values.length >= 9) {
                // Found the values line
                processValues(currentCategory, currentDescription, values);
                currentCategory = null; // Reset
            } else {
                // Still part of description?
                // If it doesn't look like values, append to description
                currentDescription += ' ' + line;
            }
        }
    }
    
    function processValues(code, description, values) {
        // We expect 9 monthly values + 1 total (usually)
        // We only care about the first 9 for the months Jan-Sep
        
        for (let m = 0; m < MONTHS.length; m++) {
            if (m >= values.length) break;
            
            const rawValue = values[m];
            // Convert "29.250,20" to 29250.20
            // Remove dots, replace comma with dot
            const cleanValue = rawValue.replace(/\./g, '').replace(',', '.');
            const amount = parseFloat(cleanValue);
            
            if (amount !== 0) {
                // Filter out summary lines (keep only leaf categories, usually 2+ dots like 1.1.01)
                // Exception: Some specific codes might be different, but standard is X.Y.Z
                const dotCount = (code.match(/\./g) || []).length;
                if (dotCount >= 2) {
                    transactions.push({
                        category_code: code,
                        description: `${description} - ${getMonthName(m)}/2025`,
                        amount: amount,
                        reference_month: MONTHS[m],
                        payment_date: MONTHS[m].substring(0, 8) + '10' // Replace last 2 chars with 10
                    });
                }
            }
        }
    }
    
    // Generate CSV
    // Add BOM for Excel UTF-8 compatibility
    // Use semicolon delimiter to avoid issues with commas in descriptions
    const csvHeader = '\ufeffcategory_code;description;amount;reference_month;payment_date\n';
    const csvRows = transactions.map(t => 
        `${t.category_code};"${t.description}";${t.amount};${t.reference_month};${t.payment_date}`
    ).join('\n');
    
    fs.writeFileSync(CSV_PATH, csvHeader + csvRows);
    console.log(`✅ CSV gerado com ${transactions.length} transações em ${CSV_PATH}`);
}

function getMonthName(index) {
    const names = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'];
    return names[index];
}

function getPaymentDate(refDate) {
    // Unused now
    const date = new Date(refDate);
    date.setDate(10);
    return date.toISOString().split('T')[0];
}

main().catch(console.error);
