2025-12-04T00:38:04.8950427Z Current runner version: '2.329.0'
2025-12-04T00:38:04.8974873Z ##[group]Runner Image Provisioner
2025-12-04T00:38:04.8975799Z Hosted Compute Agent
2025-12-04T00:38:04.8976313Z Version: 20251124.448
2025-12-04T00:38:04.8976985Z Commit: fda5086b43ec66ade217e5fcd18146c879571177
2025-12-04T00:38:04.8977633Z Build Date: 2025-11-24T21:16:26Z
2025-12-04T00:38:04.8978224Z ##[endgroup]
2025-12-04T00:38:04.8978758Z ##[group]Operating System
2025-12-04T00:38:04.8979374Z Ubuntu
2025-12-04T00:38:04.8979855Z 24.04.3
2025-12-04T00:38:04.8980325Z LTS
2025-12-04T00:38:04.8980979Z ##[endgroup]
2025-12-04T00:38:04.8981440Z ##[group]Runner Image
2025-12-04T00:38:04.8982017Z Image: ubuntu-24.04
2025-12-04T00:38:04.8982533Z Version: 20251126.144.1
2025-12-04T00:38:04.8983534Z Included Software: https://github.com/actions/runner-images/blob/ubuntu24/20251126.144/images/ubuntu/Ubuntu2404-Readme.md
2025-12-04T00:38:04.8985091Z Image Release: https://github.com/actions/runner-images/releases/tag/ubuntu24%2F20251126.144
2025-12-04T00:38:04.8986024Z ##[endgroup]
2025-12-04T00:38:04.8987141Z ##[group]GITHUB*TOKEN Permissions
2025-12-04T00:38:04.8989164Z Contents: read
2025-12-04T00:38:04.8989682Z Metadata: read
2025-12-04T00:38:04.8990252Z Packages: read
2025-12-04T00:38:04.8991108Z ##[endgroup]
2025-12-04T00:38:04.8993262Z Secret source: Actions
2025-12-04T00:38:04.8994022Z Prepare workflow directory
2025-12-04T00:38:04.9381965Z Prepare all required actions
2025-12-04T00:38:04.9422257Z Getting action download info
2025-12-04T00:38:05.3889345Z Download action repository 'actions/checkout@v4' (SHA:34e114876b0b11c390a56381ad16ebd13914f8d5)
2025-12-04T00:38:05.9894603Z Download action repository 'actions/setup-node@v4' (SHA:49933ea5288caeca8642d1e84afbd3f7d6820020)
2025-12-04T00:38:06.1590152Z Complete job name: 🧪 Unit Tests + Coverage
2025-12-04T00:38:06.2274198Z ##[group]Run actions/checkout@v4
2025-12-04T00:38:06.2275043Z with:
2025-12-04T00:38:06.2275450Z repository: versixsolutions/norma
2025-12-04T00:38:06.2276154Z token: \*\**
2025-12-04T00:38:06.2276562Z ssh-strict: true
2025-12-04T00:38:06.2276945Z ssh-user: git
2025-12-04T00:38:06.2277350Z persist-credentials: true
2025-12-04T00:38:06.2277793Z clean: true
2025-12-04T00:38:06.2278193Z sparse-checkout-cone-mode: true
2025-12-04T00:38:06.2278682Z fetch-depth: 1
2025-12-04T00:38:06.2279073Z fetch-tags: false
2025-12-04T00:38:06.2279469Z show-progress: true
2025-12-04T00:38:06.2279862Z lfs: false
2025-12-04T00:38:06.2280233Z submodules: false
2025-12-04T00:38:06.2280870Z set-safe-directory: true
2025-12-04T00:38:06.2281555Z env:
2025-12-04T00:38:06.2281916Z NODE*VERSION: 20
2025-12-04T00:38:06.2282361Z VITE_SUPABASE_URL: https://test.supabase.co
2025-12-04T00:38:06.2283117Z VITE_SUPABASE_ANON_KEY: ***
2025-12-04T00:38:06.2283555Z ##[endgroup]
2025-12-04T00:38:06.3399285Z Syncing repository: versixsolutions/norma
2025-12-04T00:38:06.3401504Z ##[group]Getting Git version info
2025-12-04T00:38:06.3402179Z Working directory is '/home/runner/work/norma/norma'
2025-12-04T00:38:06.3403112Z [command]/usr/bin/git version
2025-12-04T00:38:06.3484014Z git version 2.52.0
2025-12-04T00:38:06.3511377Z ##[endgroup]
2025-12-04T00:38:06.3526681Z Temporarily overriding HOME='/home/runner/work/\_temp/ba72cd7d-7f91-484f-93a8-5928ce42e5a9' before making global git config changes
2025-12-04T00:38:06.3528879Z Adding repository directory to the temporary git global config as a safe directory
2025-12-04T00:38:06.3539471Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/norma/norma
2025-12-04T00:38:06.3581095Z Deleting the contents of '/home/runner/work/norma/norma'
2025-12-04T00:38:06.3585093Z ##[group]Initializing the repository
2025-12-04T00:38:06.3589173Z [command]/usr/bin/git init /home/runner/work/norma/norma
2025-12-04T00:38:06.3714995Z hint: Using 'master' as the name for the initial branch. This default branch name
2025-12-04T00:38:06.3716868Z hint: will change to "main" in Git 3.0. To configure the initial branch name
2025-12-04T00:38:06.3718302Z hint: to use in all of your new repositories, which will suppress this warning,
2025-12-04T00:38:06.3720025Z hint: call:
2025-12-04T00:38:06.3720873Z hint:
2025-12-04T00:38:06.3721660Z hint: git config --global init.defaultBranch <name>
2025-12-04T00:38:06.3722411Z hint:
2025-12-04T00:38:06.3722968Z hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
2025-12-04T00:38:06.3723857Z hint: 'development'. The just-created branch can be renamed via this command:
2025-12-04T00:38:06.3724586Z hint:
2025-12-04T00:38:06.3725207Z hint: git branch -m <name>
2025-12-04T00:38:06.3725817Z hint:
2025-12-04T00:38:06.3726412Z hint: Disable this message with "git config set advice.defaultBranchName false"
2025-12-04T00:38:06.3727371Z Initialized empty Git repository in /home/runner/work/norma/norma/.git/
2025-12-04T00:38:06.3732059Z [command]/usr/bin/git remote add origin https://github.com/versixsolutions/norma
2025-12-04T00:38:06.3768684Z ##[endgroup]
2025-12-04T00:38:06.3769866Z ##[group]Disabling automatic garbage collection
2025-12-04T00:38:06.3773990Z [command]/usr/bin/git config --local gc.auto 0
2025-12-04T00:38:06.3805331Z ##[endgroup]
2025-12-04T00:38:06.3806515Z ##[group]Setting up auth
2025-12-04T00:38:06.3813514Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2025-12-04T00:38:06.3846615Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2025-12-04T00:38:06.4210113Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2025-12-04T00:38:06.4241992Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2025-12-04T00:38:06.4472253Z [command]/usr/bin/git config --local --name-only --get-regexp ^includeIf\.gitdir:
2025-12-04T00:38:06.4503904Z [command]/usr/bin/git submodule foreach --recursive git config --local --show-origin --name-only --get-regexp remote.origin.url
2025-12-04T00:38:06.4748143Z [command]/usr/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic **_
2025-12-04T00:38:06.4785040Z ##[endgroup]
2025-12-04T00:38:06.4785860Z ##[group]Fetching the repository
2025-12-04T00:38:06.4793860Z [command]/usr/bin/git -c protocol.version=2 fetch --no-tags --prune --no-recurse-submodules --depth=1 origin +8cb117dd394eb58c9c23e5c937a30418d5584665:refs/remotes/origin/main
2025-12-04T00:38:07.4127012Z From https://github.com/versixsolutions/norma
2025-12-04T00:38:07.4127619Z _ [new ref] 8cb117dd394eb58c9c23e5c937a30418d5584665 -> origin/main
2025-12-04T00:38:07.4162627Z ##[endgroup]
2025-12-04T00:38:07.4163478Z ##[group]Determining the checkout info
2025-12-04T00:38:07.4165558Z ##[endgroup]
2025-12-04T00:38:07.4171316Z [command]/usr/bin/git sparse-checkout disable
2025-12-04T00:38:07.4214816Z [command]/usr/bin/git config --local --unset-all extensions.worktreeConfig
2025-12-04T00:38:07.4243487Z ##[group]Checking out the ref
2025-12-04T00:38:07.4247588Z [command]/usr/bin/git checkout --progress --force -B main refs/remotes/origin/main
2025-12-04T00:38:07.4579876Z Switched to a new branch 'main'
2025-12-04T00:38:07.4580850Z branch 'main' set up to track 'origin/main'.
2025-12-04T00:38:07.4589481Z ##[endgroup]
2025-12-04T00:38:07.4631433Z [command]/usr/bin/git log -1 --format=%H
2025-12-04T00:38:07.4655603Z 8cb117dd394eb58c9c23e5c937a30418d5584665
2025-12-04T00:38:07.4889565Z ##[group]Run actions/setup-node@v4
2025-12-04T00:38:07.4889943Z with:
2025-12-04T00:38:07.4890169Z node-version: 20
2025-12-04T00:38:07.4890394Z cache: npm
2025-12-04T00:38:07.4890936Z always-auth: false
2025-12-04T00:38:07.4891180Z check-latest: false
2025-12-04T00:38:07.4891559Z token: \***
2025-12-04T00:38:07.4891767Z env:
2025-12-04T00:38:07.4891968Z NODE_VERSION: 20
2025-12-04T00:38:07.4892245Z VITE_SUPABASE_URL: https://test.supabase.co
2025-12-04T00:38:07.4892943Z VITE_SUPABASE_ANON_KEY: **_
2025-12-04T00:38:07.4893213Z ##[endgroup]
2025-12-04T00:38:07.6734160Z Found in cache @ /opt/hostedtoolcache/node/20.19.6/x64
2025-12-04T00:38:07.6741347Z ##[group]Environment details
2025-12-04T00:38:09.8841300Z node: v20.19.6
2025-12-04T00:38:09.8842000Z npm: 10.8.2
2025-12-04T00:38:09.8842527Z yarn: 1.22.22
2025-12-04T00:38:09.8847989Z ##[endgroup]
2025-12-04T00:38:09.8870657Z [command]/opt/hostedtoolcache/node/20.19.6/x64/bin/npm config get cache
2025-12-04T00:38:10.1598769Z /home/runner/.npm
2025-12-04T00:38:10.4698304Z Cache hit for: node-cache-Linux-x64-npm-6746f3a23c9f7363038cdbec9de2d943df1137196b09647300b2d17e6abcaa66
2025-12-04T00:38:11.7529253Z Received 8388608 of 192019688 (4.4%), 8.0 MBs/sec
2025-12-04T00:38:12.7533503Z Received 134217728 of 192019688 (69.9%), 64.0 MBs/sec
2025-12-04T00:38:13.5199580Z Received 192019688 of 192019688 (100.0%), 66.2 MBs/sec
2025-12-04T00:38:13.5201137Z Cache Size: ~183 MB (192019688 B)
2025-12-04T00:38:13.5351921Z [command]/usr/bin/tar -xf /home/runner/work/\_temp/45f48f5c-38be-4321-84ac-ff149775271d/cache.tzst -P -C /home/runner/work/norma/norma --use-compress-program unzstd
2025-12-04T00:38:14.0680414Z Cache restored successfully
2025-12-04T00:38:14.1067492Z Cache restored from key: node-cache-Linux-x64-npm-6746f3a23c9f7363038cdbec9de2d943df1137196b09647300b2d17e6abcaa66
2025-12-04T00:38:14.1224491Z ##[group]Run npm install
2025-12-04T00:38:14.1224879Z [36;1mnpm install[0m
2025-12-04T00:38:14.1269547Z shell: /usr/bin/bash -e {0}
2025-12-04T00:38:14.1269872Z env:
2025-12-04T00:38:14.1270079Z NODE_VERSION: 20
2025-12-04T00:38:14.1270366Z VITE_SUPABASE_URL: https://test.supabase.co
2025-12-04T00:38:14.1271321Z VITE_SUPABASE_ANON_KEY: _**
2025-12-04T00:38:14.1271602Z ##[endgroup]
2025-12-04T00:38:21.8358449Z npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-12-04T00:38:22.0181911Z npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
2025-12-04T00:38:22.0406274Z npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-12-04T00:38:22.1756689Z npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-12-04T00:38:22.1878802Z npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
2025-12-04T00:38:22.2982405Z npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
2025-12-04T00:38:22.7072633Z npm warn deprecated source-map@0.8.0-beta.0: The work that was done in this beta branch won't be included in future versions
2025-12-04T00:38:22.8089497Z npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead
2025-12-04T00:38:24.2405334Z npm warn deprecated popper.js@1.16.1: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1
2025-12-04T00:38:25.6451130Z npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
2025-12-04T00:38:39.1195513Z
2025-12-04T00:38:39.1196213Z > versix-norma@0.1.1 prepare
2025-12-04T00:38:39.1196723Z > husky install
2025-12-04T00:38:39.1197858Z
2025-12-04T00:38:39.1734332Z husky - install command is DEPRECATED
2025-12-04T00:38:39.2019513Z
2025-12-04T00:38:39.2020692Z added 1184 packages, and audited 1185 packages in 25s
2025-12-04T00:38:39.2021154Z
2025-12-04T00:38:39.2023100Z 290 packages are looking for funding
2025-12-04T00:38:39.2023759Z run `npm fund` for details
2025-12-04T00:38:39.2101681Z
2025-12-04T00:38:39.2102241Z 2 moderate severity vulnerabilities
2025-12-04T00:38:39.2102607Z
2025-12-04T00:38:39.2103033Z To address all issues (including breaking changes), run:
2025-12-04T00:38:39.2103817Z npm audit fix --force
2025-12-04T00:38:39.2104204Z
2025-12-04T00:38:39.2105228Z Run `npm audit` for details.
2025-12-04T00:38:39.3013548Z ##[group]Run npm run test:coverage -- --runInBand --watch=false || npm run test:coverage -- --watch=false
2025-12-04T00:38:39.3014239Z [36;1mnpm run test:coverage -- --runInBand --watch=false || npm run test:coverage -- --watch=false[0m
2025-12-04T00:38:39.3049254Z shell: /usr/bin/bash -e {0}
2025-12-04T00:38:39.3049500Z env:
2025-12-04T00:38:39.3049668Z NODE*VERSION: 20
2025-12-04T00:38:39.3049911Z VITE_SUPABASE_URL: https://test.supabase.co
2025-12-04T00:38:39.3050621Z VITE_SUPABASE_ANON_KEY: *\*\*
2025-12-04T00:38:39.3050930Z ##[endgroup]
2025-12-04T00:38:39.4182585Z
2025-12-04T00:38:39.4183619Z > versix-norma@0.1.1 test:coverage
2025-12-04T00:38:39.4184182Z > vitest --coverage --runInBand --watch=false
2025-12-04T00:38:39.4184458Z
2025-12-04T00:38:39.6145088Z file:///home/runner/work/norma/norma/node*modules/vitest/dist/chunks/cac.DnEx6DOX.js:404
2025-12-04T00:38:39.6146319Z throw new CACError(`Unknown option \`${name.length > 1 ? `--${name}`:`-${name}`}\``);
2025-12-04T00:38:39.6230337Z                 ^
2025-12-04T00:38:39.6230890Z 
2025-12-04T00:38:39.6231289Z CACError: Unknown option `--runInBand`
2025-12-04T00:38:39.6232605Z at Command.checkUnknownOptions (file:///home/runner/work/norma/norma/node_modules/vitest/dist/chunks/cac.DnEx6DOX.js:404:17)
2025-12-04T00:38:39.6234321Z at CAC.runMatchedCommand (file:///home/runner/work/norma/norma/node_modules/vitest/dist/chunks/cac.DnEx6DOX.js:604:13)
2025-12-04T00:38:39.6235979Z at CAC.parse (file:///home/runner/work/norma/norma/node_modules/vitest/dist/chunks/cac.DnEx6DOX.js:545:12)
2025-12-04T00:38:39.6237312Z at file:///home/runner/work/norma/norma/node_modules/vitest/dist/cli.js:28:13
2025-12-04T00:38:39.6238289Z at ModuleJob.run (node:internal/modules/esm/module_job:325:25)
2025-12-04T00:38:39.6239274Z at async ModuleLoader.import (node:internal/modules/esm/loader:606:24)
2025-12-04T00:38:39.6240367Z at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
2025-12-04T00:38:39.6241179Z
2025-12-04T00:38:39.6241354Z Node.js v20.19.6
2025-12-04T00:38:39.7386653Z
2025-12-04T00:38:39.7387313Z > versix-norma@0.1.1 test:coverage
2025-12-04T00:38:39.7388001Z > vitest --coverage --watch=false
2025-12-04T00:38:39.7388327Z
2025-12-04T00:38:40.4279216Z
2025-12-04T00:38:40.4282782Z [1m[46m RUN [49m[22m [36mv4.0.14 [39m[90m/home/runner/work/norma/norma[39m
2025-12-04T00:38:40.4283732Z [2mCoverage enabled with [22m[33mv8[39m
2025-12-04T00:38:40.4284098Z
2025-12-04T00:38:41.9513258Z [90mstderr[2m | src/contexts/AuthContext.test.tsx[2m > [22m[2mAuthContext[2m > [22m[2mInitial Loading[2m > [22m[2mshould start with loading state
2025-12-04T00:38:41.9515057Z [22m[39mWarning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:41.9515676Z
2025-12-04T00:38:41.9516254Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:41.9516887Z
2025-12-04T00:38:41.9517072Z act(() => {
2025-12-04T00:38:41.9517496Z /* fire events that update state */
2025-12-04T00:38:41.9517954Z });
2025-12-04T00:38:41.9518329Z /* assert on the output */
2025-12-04T00:38:41.9518615Z
2025-12-04T00:38:41.9519610Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:41.9521305Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:41.9521923Z
2025-12-04T00:38:42.0001332Z [90mstdout[2m | src/pages/Comunicados.test.tsx
2025-12-04T00:38:42.0004633Z [22m[39m[DEBUG] Supabase inicializado com sucesso { url: [32m'https://test.supabas...'[39m, hasKey: [33mtrue[39m }
2025-12-04T00:38:42.0005431Z
2025-12-04T00:38:42.0229917Z [90mstderr[2m | src/pages/FAQ.test.tsx[2m > [22m[2mFAQ[2m > [22m[2mrenderiza título e subtítulo
2025-12-04T00:38:42.0234727Z [22m[39m⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
2025-12-04T00:38:42.0239227Z ⚠️ React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
2025-12-04T00:38:42.0241029Z
2025-12-04T00:38:42.1067336Z [90mstderr[2m | src/pages/Comunicados.test.tsx[2m > [22m[2mComunicados Page[2m > [22m[2mRendering[2m > [22m[2mshould render page title and subtitle
2025-12-04T00:38:42.1072815Z [22m[39m⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
2025-12-04T00:38:42.1076936Z ⚠️ React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
2025-12-04T00:38:42.1078513Z
2025-12-04T00:38:42.3411308Z [90mstderr[2m | src/contexts/AuthContext.test.tsx[2m > [22m[2mAuthContext[2m > [22m[2msignOut[2m > [22m[2mshould clear session and profile on signOut
2025-12-04T00:38:42.3441747Z [22m[39mWarning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3445971Z
2025-12-04T00:38:42.3446784Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3447540Z
2025-12-04T00:38:42.3447835Z act(() => {
2025-12-04T00:38:42.3448392Z /* fire events that update state */
2025-12-04T00:38:42.3448968Z });
2025-12-04T00:38:42.3449471Z /* assert on the output */
2025-12-04T00:38:42.3449929Z
2025-12-04T00:38:42.3451212Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3452751Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3454028Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3454658Z
2025-12-04T00:38:42.3471960Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3472510Z
2025-12-04T00:38:42.3472652Z act(() => {
2025-12-04T00:38:42.3473045Z /* fire events that update state */
2025-12-04T00:38:42.3473481Z });
2025-12-04T00:38:42.3473808Z /* assert on the output */
2025-12-04T00:38:42.3474076Z
2025-12-04T00:38:42.3475035Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3476410Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3477534Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3478056Z
2025-12-04T00:38:42.3478648Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3479207Z
2025-12-04T00:38:42.3479359Z act(() => {
2025-12-04T00:38:42.3479755Z /* fire events that update state */
2025-12-04T00:38:42.3480187Z });
2025-12-04T00:38:42.3480868Z /* assert on the output */
2025-12-04T00:38:42.3481157Z
2025-12-04T00:38:42.3482169Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3484726Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3485865Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3486386Z
2025-12-04T00:38:42.3897287Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3897891Z
2025-12-04T00:38:42.3898038Z act(() => {
2025-12-04T00:38:42.3898427Z /* fire events that update state */
2025-12-04T00:38:42.3898923Z });
2025-12-04T00:38:42.3899255Z /* assert on the output */
2025-12-04T00:38:42.3899510Z
2025-12-04T00:38:42.3900620Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3901788Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3902798Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3903288Z
2025-12-04T00:38:42.3903829Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3904455Z
2025-12-04T00:38:42.3904575Z act(() => {
2025-12-04T00:38:42.3904943Z /* fire events that update state */
2025-12-04T00:38:42.3905357Z });
2025-12-04T00:38:42.3905674Z /* assert on the output */
2025-12-04T00:38:42.3905911Z
2025-12-04T00:38:42.3906845Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3908145Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3908714Z
2025-12-04T00:38:42.3910118Z [90mstderr[2m | src/contexts/AuthContext.test.tsx[2m > [22m[2mAuthContext[2m > [22m[2msignOut[2m > [22m[2mshould clear session and profile on signOut
2025-12-04T00:38:42.3911825Z [22m[39mWarning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3912368Z
2025-12-04T00:38:42.3912916Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3913440Z
2025-12-04T00:38:42.3913579Z act(() => {
2025-12-04T00:38:42.3913942Z /* fire events that update state */
2025-12-04T00:38:42.3914361Z });
2025-12-04T00:38:42.3914689Z /* assert on the output */
2025-12-04T00:38:42.3914929Z
2025-12-04T00:38:42.3915874Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3917162Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3918139Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3918565Z
2025-12-04T00:38:42.3919085Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3919613Z
2025-12-04T00:38:42.3919732Z act(() => {
2025-12-04T00:38:42.3920092Z /* fire events that update state */
2025-12-04T00:38:42.3950807Z });
2025-12-04T00:38:42.3951227Z /* assert on the output */
2025-12-04T00:38:42.3951480Z
2025-12-04T00:38:42.3952454Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3965040Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3969816Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3970327Z
2025-12-04T00:38:42.3971047Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3971578Z
2025-12-04T00:38:42.3971707Z act(() => {
2025-12-04T00:38:42.3972092Z /* fire events that update state */
2025-12-04T00:38:42.3972504Z });
2025-12-04T00:38:42.3972838Z /* assert on the output */
2025-12-04T00:38:42.3973083Z
2025-12-04T00:38:42.3974008Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.3975362Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.3976847Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.3977510Z
2025-12-04T00:38:42.3978053Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.3978583Z
2025-12-04T00:38:42.3978711Z act(() => {
2025-12-04T00:38:42.3979087Z /* fire events that update state */
2025-12-04T00:38:42.3979500Z });
2025-12-04T00:38:42.3979816Z /* assert on the output */
2025-12-04T00:38:42.3980066Z
2025-12-04T00:38:42.3981150Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4000974Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4001576Z
2025-12-04T00:38:42.4252515Z [32m✓[39m src/pages/FAQ.test.tsx [2m([22m[2m12 tests[22m[2m | [22m[33m8 skipped[39m[2m)[22m[33m 379[2mms[22m[39m
2025-12-04T00:38:42.4541033Z [90mstderr[2m | src/contexts/AuthContext.test.tsx[2m > [22m[2mAuthContext[2m > [22m[2msignOut[2m > [22m[2mshould handle signOut errors gracefully
2025-12-04T00:38:42.4544936Z [22m[39mWarning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4545789Z
2025-12-04T00:38:42.4546547Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4547641Z
2025-12-04T00:38:42.4548174Z act(() => {
2025-12-04T00:38:42.4558627Z /* fire events that update state */
2025-12-04T00:38:42.4559381Z });
2025-12-04T00:38:42.4559893Z /* assert on the output */
2025-12-04T00:38:42.4560351Z
2025-12-04T00:38:42.4561671Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4563189Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4564339Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4566673Z
2025-12-04T00:38:42.4567455Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4568186Z
2025-12-04T00:38:42.4568433Z act(() => {
2025-12-04T00:38:42.4568933Z /* fire events that update state */
2025-12-04T00:38:42.4569458Z });
2025-12-04T00:38:42.4569895Z /* assert on the output */
2025-12-04T00:38:42.4571103Z
2025-12-04T00:38:42.4572216Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4573868Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4576252Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4576781Z
2025-12-04T00:38:42.4577329Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4577855Z
2025-12-04T00:38:42.4578005Z act(() => {
2025-12-04T00:38:42.4578392Z /* fire events that update state */
2025-12-04T00:38:42.4578816Z });
2025-12-04T00:38:42.4579151Z /* assert on the output */
2025-12-04T00:38:42.4579395Z
2025-12-04T00:38:42.4580339Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4581775Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4582694Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4583120Z
2025-12-04T00:38:42.4583579Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4584042Z
2025-12-04T00:38:42.4584150Z act(() => {
2025-12-04T00:38:42.4584470Z /* fire events that update state */
2025-12-04T00:38:42.4584822Z });
2025-12-04T00:38:42.4585091Z /* assert on the output */
2025-12-04T00:38:42.4585322Z
2025-12-04T00:38:42.4586577Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4588040Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4589092Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4589585Z
2025-12-04T00:38:42.4590121Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4624024Z
2025-12-04T00:38:42.4624205Z act(() => {
2025-12-04T00:38:42.4624613Z /* fire events that update state */
2025-12-04T00:38:42.4625038Z });
2025-12-04T00:38:42.4650714Z /* assert on the output */
2025-12-04T00:38:42.4651054Z
2025-12-04T00:38:42.4652045Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4653372Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4653907Z
2025-12-04T00:38:42.4655288Z [90mstderr[2m | src/contexts/AuthContext.test.tsx[2m > [22m[2mAuthContext[2m > [22m[2msignOut[2m > [22m[2mshould handle signOut errors gracefully
2025-12-04T00:38:42.4656467Z [22m[39mAviso no logout: Network error
2025-12-04T00:38:42.4657287Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4657790Z
2025-12-04T00:38:42.4658535Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4659148Z
2025-12-04T00:38:42.4659290Z act(() => {
2025-12-04T00:38:42.4659667Z /* fire events that update state */
2025-12-04T00:38:42.4660084Z });
2025-12-04T00:38:42.4660408Z /* assert on the output */
2025-12-04T00:38:42.4660809Z
2025-12-04T00:38:42.4661741Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4663040Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4664101Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4664600Z
2025-12-04T00:38:42.4665140Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4665670Z
2025-12-04T00:38:42.4665795Z act(() => {
2025-12-04T00:38:42.4666168Z /* fire events that update state */
2025-12-04T00:38:42.4666573Z });
2025-12-04T00:38:42.4666885Z /* assert on the output */
2025-12-04T00:38:42.4667129Z
2025-12-04T00:38:42.4668044Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4669314Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4670359Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4671052Z
2025-12-04T00:38:42.4671604Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4672151Z
2025-12-04T00:38:42.4672275Z act(() => {
2025-12-04T00:38:42.4672643Z /* fire events that update state */
2025-12-04T00:38:42.4673048Z });
2025-12-04T00:38:42.4673893Z /* assert on the output */
2025-12-04T00:38:42.4674143Z
2025-12-04T00:38:42.4675068Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4676361Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4677404Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.4677902Z
2025-12-04T00:38:42.4678444Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.4678963Z
2025-12-04T00:38:42.4679095Z act(() => {
2025-12-04T00:38:42.4679464Z /* fire events that update state */
2025-12-04T00:38:42.4679856Z });
2025-12-04T00:38:42.4680635Z /* assert on the output */
2025-12-04T00:38:42.4681062Z
2025-12-04T00:38:42.4682325Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.4683615Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.4684173Z
2025-12-04T00:38:42.9158031Z [90mstderr[2m | src/contexts/AuthContext.test.tsx[2m > [22m[2mAuthContext[2m > [22m[2mAuth State Change Listener[2m > [22m[2mshould update state when auth state changes
2025-12-04T00:38:42.9160045Z [22m[39mWarning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9161159Z
2025-12-04T00:38:42.9161886Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9283983Z
2025-12-04T00:38:42.9285118Z act(() => {
2025-12-04T00:38:42.9285765Z /* fire events that update state */
2025-12-04T00:38:42.9286510Z });
2025-12-04T00:38:42.9287057Z /* assert on the output */
2025-12-04T00:38:42.9287487Z
2025-12-04T00:38:42.9288593Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9290055Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9291531Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9292231Z
2025-12-04T00:38:42.9293125Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9293816Z
2025-12-04T00:38:42.9294113Z act(() => {
2025-12-04T00:38:42.9294645Z /* fire events that update state */
2025-12-04T00:38:42.9295221Z });
2025-12-04T00:38:42.9295716Z /* assert on the output */
2025-12-04T00:38:42.9296131Z
2025-12-04T00:38:42.9297237Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9298750Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9300002Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9300866Z
2025-12-04T00:38:42.9301622Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9302518Z
2025-12-04T00:38:42.9302861Z act(() => {
2025-12-04T00:38:42.9303485Z /* fire events that update state */
2025-12-04T00:38:42.9304224Z });
2025-12-04T00:38:42.9304770Z /* assert on the output */
2025-12-04T00:38:42.9305199Z
2025-12-04T00:38:42.9306329Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9307941Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9308796Z
2025-12-04T00:38:42.9690051Z [90mstderr[2m | src/contexts/AuthContext.test.tsx[2m > [22m[2mAuthContext[2m > [22m[2mAuth State Change Listener[2m > [22m[2mshould update state when auth state changes
2025-12-04T00:38:42.9693248Z [22m[39mWarning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9693808Z
2025-12-04T00:38:42.9694378Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9694908Z
2025-12-04T00:38:42.9695046Z act(() => {
2025-12-04T00:38:42.9695426Z /* fire events that update state */
2025-12-04T00:38:42.9695841Z });
2025-12-04T00:38:42.9708284Z /* assert on the output */
2025-12-04T00:38:42.9708546Z
2025-12-04T00:38:42.9709489Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9710934Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9711980Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9713062Z
2025-12-04T00:38:42.9713608Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9714147Z
2025-12-04T00:38:42.9714275Z act(() => {
2025-12-04T00:38:42.9714650Z /* fire events that update state */
2025-12-04T00:38:42.9715048Z });
2025-12-04T00:38:42.9715373Z /* assert on the output */
2025-12-04T00:38:42.9715619Z
2025-12-04T00:38:42.9716596Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9717893Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9718945Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9719439Z
2025-12-04T00:38:42.9719981Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9720650Z
2025-12-04T00:38:42.9720783Z act(() => {
2025-12-04T00:38:42.9721159Z /* fire events that update state */
2025-12-04T00:38:42.9721552Z });
2025-12-04T00:38:42.9721856Z /* assert on the output */
2025-12-04T00:38:42.9722086Z
2025-12-04T00:38:42.9722986Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9724274Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9725325Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9725827Z
2025-12-04T00:38:42.9726360Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9726879Z
2025-12-04T00:38:42.9727018Z act(() => {
2025-12-04T00:38:42.9727383Z /* fire events that update state */
2025-12-04T00:38:42.9727795Z });
2025-12-04T00:38:42.9728099Z /* assert on the output */
2025-12-04T00:38:42.9728340Z
2025-12-04T00:38:42.9729267Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9730924Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9731982Z Warning: An update to AuthProvider inside a test was not wrapped in act(...).
2025-12-04T00:38:42.9732480Z
2025-12-04T00:38:42.9733022Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:42.9733555Z
2025-12-04T00:38:42.9733679Z act(() => {
2025-12-04T00:38:42.9734047Z /* fire events that update state */
2025-12-04T00:38:42.9750659Z });
2025-12-04T00:38:42.9751008Z /* assert on the output \_/
2025-12-04T00:38:42.9751276Z
2025-12-04T00:38:42.9752213Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:42.9761404Z at AuthProvider (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:11:25)
2025-12-04T00:38:42.9761980Z
2025-12-04T00:38:43.0081285Z [32m✓[39m src/pages/Comunicados.test.tsx [2m([22m[2m20 tests[22m[2m)[22m[33m 938[2mms[22m[39m
2025-12-04T00:38:43.0466981Z Error: useAuth must be used within an AuthProvider
2025-12-04T00:38:43.0491479Z at Module.useAuth (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:217:11)
2025-12-04T00:38:43.0493087Z at /home/runner/work/norma/norma/src/contexts/AuthContext.test.tsx:689:26
2025-12-04T00:38:43.0494486Z at TestComponent (/home/runner/work/norma/norma/node_modules/@testing-library/react/dist/pure.js:331:27)
2025-12-04T00:38:43.0496110Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.0497923Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.0499613Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.0532498Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.0534640Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.0536758Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.0538864Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.0540082Z Error: useAuth must be used within an AuthProvider
2025-12-04T00:38:43.0541167Z at Module.useAuth (/home/runner/work/norma/norma/src/contexts/AuthContext.tsx:217:11)
2025-12-04T00:38:43.0542180Z at /home/runner/work/norma/norma/src/contexts/AuthContext.test.tsx:689:26
2025-12-04T00:38:43.0543355Z at TestComponent (/home/runner/work/norma/norma/node_modules/@testing-library/react/dist/pure.js:331:27)
2025-12-04T00:38:43.0544733Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.0546296Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.0547791Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.0549290Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.0551317Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.0553256Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.0554979Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.0956984Z [32m✓[39m src/contexts/AuthContext.test.tsx [2m([22m[2m18 tests[22m[2m)[22m[33m 1127[2mms[22m[39m
2025-12-04T00:38:43.9455606Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9456524Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9457669Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9459169Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9460844Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9462400Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9464199Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9465979Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9467582Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9469276Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9471290Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9520137Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9521521Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9522725Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9524108Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9525436Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9526801Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9528549Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9530335Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9532119Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9533738Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9535551Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9571189Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mrenderiza saudação com primeiro nome do usuário
2025-12-04T00:38:43.9588229Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:43.9589935Z
2025-12-04T00:38:43.9591837Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:43.9594131Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:43.9596695Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:43.9598600Z
2025-12-04T00:38:43.9600203Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:43.9603177Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:43.9606079Z
2025-12-04T00:38:43.9635744Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9637776Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9640062Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9643322Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9645920Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9648440Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9685053Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9686681Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9688356Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9690040Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9693359Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9695106Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9696092Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9697405Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9698986Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9700766Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9702383Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9704442Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9706512Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9708263Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9709988Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9718215Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9720405Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mexibe nome do condomínio
2025-12-04T00:38:43.9721897Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:43.9722392Z
2025-12-04T00:38:43.9722860Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:43.9724113Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:43.9725549Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:43.9726405Z
2025-12-04T00:38:43.9726990Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:43.9728171Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:43.9728787Z
2025-12-04T00:38:43.9729332Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9730294Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9731787Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9733350Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9734891Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9736486Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9738500Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9740803Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9742599Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9749270Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9751598Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9753050Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9754011Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9755284Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9756912Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9773198Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9774849Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9776746Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9778558Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9780207Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9783017Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9784919Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9787148Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mrenderiza grid de atalhos com estatísticas
2025-12-04T00:38:43.9788410Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:43.9788863Z
2025-12-04T00:38:43.9789401Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:43.9790902Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:43.9792533Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:43.9793399Z
2025-12-04T00:38:43.9793989Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:43.9795170Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:43.9795765Z
2025-12-04T00:38:43.9796289Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9797281Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9798546Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9800110Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9801792Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9803338Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9805265Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9807460Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9809392Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9811430Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9813339Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9814781Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9815715Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9816924Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9818492Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9819975Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9821673Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9823625Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9825584Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9827293Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9829029Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9831098Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9833257Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mnavega para página correta ao clicar em atalho
2025-12-04T00:38:43.9834583Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:43.9835033Z
2025-12-04T00:38:43.9835494Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:43.9836732Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:43.9838333Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:43.9839186Z
2025-12-04T00:38:43.9839777Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:43.9843673Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:43.9844269Z
2025-12-04T00:38:43.9844800Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9845761Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9848413Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9850083Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9851840Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9853413Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9855536Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9857584Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9859342Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9861388Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9863360Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9864889Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9865838Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9867164Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9868768Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9870310Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9872106Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9874059Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9877445Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9879258Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9881340Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9883326Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9906148Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mexibe indicador de alerta em cards com pendências
2025-12-04T00:38:43.9907444Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:43.9907873Z
2025-12-04T00:38:43.9908327Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:43.9909555Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:43.9911340Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:43.9912215Z
2025-12-04T00:38:43.9912766Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:43.9913874Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:43.9914438Z
2025-12-04T00:38:43.9914906Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9915823Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9917025Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9918566Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9920058Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9922335Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9924339Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9926276Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9928000Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9929776Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9931940Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9933465Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9934430Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:43.9935640Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:43.9937186Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:43.9938738Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:43.9940359Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:43.9942509Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:43.9944499Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:43.9946241Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:43.9948014Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:43.9949923Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:43.9963863Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mcarrega feed unificado de atualizações
2025-12-04T00:38:43.9965141Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:43.9965588Z
2025-12-04T00:38:43.9966044Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:43.9967313Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:43.9968933Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:43.9969802Z
2025-12-04T00:38:43.9970394Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:43.9971776Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:43.9972390Z
2025-12-04T00:38:43.9972868Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:43.9999140Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0000321Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0002624Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0004424Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0005983Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0007844Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0009854Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0013506Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0015355Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0017317Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0018743Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0019692Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0021144Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0022771Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0024323Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0025945Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0027964Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0030013Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0035236Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0036854Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0038715Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0041091Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mexibe mensagem quando não há atualizações
2025-12-04T00:38:44.0047901Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:44.0048377Z
2025-12-04T00:38:44.0048843Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:44.0050051Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:44.0051809Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:44.0052699Z
2025-12-04T00:38:44.0053293Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:44.0054436Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:44.0055024Z
2025-12-04T00:38:44.0055534Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0056506Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0058152Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0059985Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0061773Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0063404Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0065295Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0067316Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0069122Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0072533Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0074531Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0076097Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0077105Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0078389Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0079870Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0081689Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0091594Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0093669Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0095715Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0097533Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0099365Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0101564Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0103755Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mabre chatbot ao clicar no botão flutuante
2025-12-04T00:38:44.0105104Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:44.0105557Z
2025-12-04T00:38:44.0106021Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:44.0107308Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:44.0108932Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:44.0109826Z
2025-12-04T00:38:44.0110424Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:44.0111938Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:44.0112931Z
2025-12-04T00:38:44.0113881Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0115151Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0116428Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0118118Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0119688Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0121454Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0123350Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0125277Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0126987Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0128745Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0130810Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0132340Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0133322Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0134592Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0136231Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0137674Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0139156Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0142777Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0144869Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0146705Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0148504Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0150659Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0152774Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mfecha chatbot ao clicar em fechar
2025-12-04T00:38:44.0154103Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:44.0154556Z
2025-12-04T00:38:44.0155025Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:44.0156306Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:44.0157948Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:44.0158836Z
2025-12-04T00:38:44.0159435Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:44.0161391Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:44.0162061Z
2025-12-04T00:38:44.0162566Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0168581Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0169912Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0171715Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0173197Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0174782Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0176675Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0178604Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0180290Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0182376Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0184271Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0185710Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0186616Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0187829Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0189391Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0191096Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0192625Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0194532Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0196444Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0198142Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0199910Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0202034Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0204270Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mexibe banner publicitário quando disponível
2025-12-04T00:38:44.0205633Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:44.0206079Z
2025-12-04T00:38:44.0206546Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:44.0207827Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:44.0209784Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:44.0211232Z
2025-12-04T00:38:44.0211834Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:44.0213019Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:44.0213631Z
2025-12-04T00:38:44.0214127Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0215079Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0216344Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0217994Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0219550Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0221409Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0223447Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0225503Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0227288Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0229144Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0231318Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0232923Z ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
2025-12-04T00:38:44.0233904Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:63:40)
2025-12-04T00:38:44.0235176Z at renderWithHooks (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:15486:18)
2025-12-04T00:38:44.0236820Z at mountIndeterminateComponent (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:20103:13)
2025-12-04T00:38:44.0238376Z at beginWork (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:21626:16)
2025-12-04T00:38:44.0239968Z at HTMLUnknownElement.callCallback (/home/runner/work/norma/norma/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
2025-12-04T00:38:44.0272287Z at HTMLUnknownElement.callTheUserObjectsOperation (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
2025-12-04T00:38:44.0274271Z at innerInvokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:360:16)
2025-12-04T00:38:44.0276013Z at invokeEventListeners (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:296:3)
2025-12-04T00:38:44.0277744Z at HTMLUnknownElementImpl.\_dispatch (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:243:9)
2025-12-04T00:38:44.0279653Z at HTMLUnknownElementImpl.dispatchEvent (/home/runner/work/norma/norma/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:114:17)
2025-12-04T00:38:44.0281998Z [90mstderr[2m | src/pages/Dashboard.test.tsx[2m > [22m[2mDashboard[2m > [22m[2mregistra clique no banner e abre link externo
2025-12-04T00:38:44.0283306Z [22m[39mThe above error occurred in the <Dashboard> component:
2025-12-04T00:38:44.0283746Z
2025-12-04T00:38:44.0284192Z at Dashboard (/home/runner/work/norma/norma/src/pages/Dashboard.tsx:28:67)
2025-12-04T00:38:44.0285847Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:44.0287740Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:44.0288650Z
2025-12-04T00:38:44.0289260Z Consider adding an error boundary to your tree to customize error handling behavior.
2025-12-04T00:38:44.0301796Z Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
2025-12-04T00:38:44.0302460Z
2025-12-04T00:38:44.0693330Z [31m❯[39m src/pages/Dashboard.test.tsx [2m([22m[2m12 tests[22m[2m | [22m[31m11 failed[39m[2m | [22m[33m1 skipped[39m[2m)[22m[32m 106[2mms[22m[39m
2025-12-04T00:38:44.0694906Z [31m [31m×[31m renderiza saudação com primeiro nome do usuário[39m[32m 47[2mms[22m[39m
2025-12-04T00:38:44.0695991Z [31m [31m×[31m exibe nome do condomínio[39m[32m 5[2mms[22m[39m
2025-12-04T00:38:44.0697094Z [31m [31m×[31m renderiza grid de atalhos com estatísticas[39m[32m 4[2mms[22m[39m
2025-12-04T00:38:44.0698284Z [31m [31m×[31m navega para página correta ao clicar em atalho[39m[32m 6[2mms[22m[39m
2025-12-04T00:38:44.0701291Z [31m [31m×[31m exibe indicador de alerta em cards com pendências[39m[32m 4[2mms[22m[39m
2025-12-04T00:38:44.0703300Z [2m[90m↓[39m[22m redireciona admin para /admin
2025-12-04T00:38:44.0704572Z [31m [31m×[31m carrega feed unificado de atualizações[39m[32m 5[2mms[22m[39m
2025-12-04T00:38:44.0705791Z [31m [31m×[31m exibe mensagem quando não há atualizações[39m[32m 4[2mms[22m[39m
2025-12-04T00:38:44.0706927Z [31m [31m×[31m abre chatbot ao clicar no botão flutuante[39m[32m 5[2mms[22m[39m
2025-12-04T00:38:44.0708042Z [31m [31m×[31m fecha chatbot ao clicar em fechar[39m[32m 7[2mms[22m[39m
2025-12-04T00:38:44.0709358Z [31m [31m×[31m exibe banner publicitário quando disponível[39m[32m 4[2mms[22m[39m
2025-12-04T00:38:44.0711021Z [31m [31m×[31m registra clique no banner e abre link externo[39m[32m 11[2mms[22m[39m
2025-12-04T00:38:44.5386637Z [90mstdout[2m | src/components/Layout.test.tsx
2025-12-04T00:38:44.5392422Z [22m[39m[DEBUG] Supabase inicializado com sucesso { url: [32m'https://test.supabas...'[39m, hasKey: [33mtrue[39m }
2025-12-04T00:38:44.5393356Z
2025-12-04T00:38:44.5605695Z [90mstderr[2m | src/hooks/queries/chamados.test.tsx[2m > [22m[2museCreateChamado[2m > [22m[2mfalha ao criar chamado sem usuário
2025-12-04T00:38:44.5607036Z [22m[39mErro ao criar chamado: Error: Usuário não autenticado
2025-12-04T00:38:44.5608236Z at Object.mutationFn [90m(/home/runner/work/norma/norma/[39msrc/hooks/queries/chamados.ts:74:15[90m)[39m
2025-12-04T00:38:44.5610004Z at Object.fn [90m(file:///home/runner/work/norma/norma/[39mnode_modules/[4m@tanstack/query-core[24m/build/modern/mutation.js:74:29[90m)[39m
2025-12-04T00:38:44.5612256Z at run [90m(file:///home/runner/work/norma/norma/[39mnode_modules/[4m@tanstack/query-core[24m/build/modern/retryer.js:77:49[90m)[39m
2025-12-04T00:38:44.5617333Z at Object.start [90m(file:///home/runner/work/norma/norma/[39mnode_modules/[4m@tanstack/query-core[24m/build/modern/retryer.js:119:9[90m)[39m
2025-12-04T00:38:44.5619215Z at Mutation.execute [90m(file:///home/runner/work/norma/norma/[39mnode_modules/[4m@tanstack/query-core[24m/build/modern/mutation.js:113:40[90m)[39m
2025-12-04T00:38:44.5620073Z
2025-12-04T00:38:44.6047660Z [90mstderr[2m | src/components/Layout.test.tsx[2m > [22m[2mLayout Component[2m > [22m[2mshould show loading spinner when theme is loading
2025-12-04T00:38:44.6061978Z [22m[39m⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
2025-12-04T00:38:44.6066942Z ⚠️ React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
2025-12-04T00:38:44.6068535Z
2025-12-04T00:38:44.6856893Z [90mstderr[2m | src/components/Layout.test.tsx[2m > [22m[2mLayout Component[2m > [22m[2mshould render header with condominium name
2025-12-04T00:38:44.6858093Z [22m[39mWarning: Each child in a list should have a unique "key" prop.
2025-12-04T00:38:44.6858375Z
2025-12-04T00:38:44.6858758Z Check the render method of `Layout`. See https://reactjs.org/link/warning-keys for more information.
2025-12-04T00:38:44.6859396Z at default (/home/runner/work/norma/norma/src/components/Layout.test.tsx:25:15)
2025-12-04T00:38:44.6859962Z at Layout (/home/runner/work/norma/norma/src/components/Layout.tsx:27:57)
2025-12-04T00:38:44.6860886Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:44.6861799Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:44.6862265Z
2025-12-04T00:38:44.8047367Z [32m✓[39m src/hooks/queries/chamados.test.tsx [2m([22m[2m9 tests[22m[2m)[22m[33m 380[2mms[22m[39m
2025-12-04T00:38:44.9347129Z [32m✓[39m src/components/Layout.test.tsx [2m([22m[2m8 tests[22m[2m)[22m[33m 306[2mms[22m[39m
2025-12-04T00:38:45.6473830Z [32m✓[39m src/hooks/queries/comunicados.test.tsx [2m([22m[2m7 tests[22m[2m)[22m[32m 268[2mms[22m[39m
2025-12-04T00:38:46.3371674Z [32m✓[39m src/components/Skeleton.test.tsx [2m([22m[2m19 tests[22m[2m)[22m[32m 259[2mms[22m[39m
2025-12-04T00:38:47.7400748Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mcarrega estatísticas com sucesso
2025-12-04T00:38:47.7402885Z [22m[39mErro ao carregar estatísticas: TypeError: **vite*ssr_import_1**.supabase.from(...).select(...).order is not a function
2025-12-04T00:38:47.7404382Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:63:10
2025-12-04T00:38:47.7405577Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:177:7
2025-12-04T00:38:47.7407456Z at commitHookEffectListMount [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:23189:26[90m)[39m
2025-12-04T00:38:47.7409634Z at commitPassiveMountOnFiber [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24970:11[90m)[39m
2025-12-04T00:38:47.7412128Z at commitPassiveMountEffects_complete [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24930:9[90m)[39m
2025-12-04T00:38:47.7414371Z at commitPassiveMountEffects_begin [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24917:7[90m)[39m
2025-12-04T00:38:47.7416621Z at commitPassiveMountEffects [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24905:3[90m)[39m
2025-12-04T00:38:47.7418826Z at flushPassiveEffectsImpl [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:27078:3[90m)[39m
2025-12-04T00:38:47.7421148Z at flushPassiveEffects [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:27023:14[90m)[39m
2025-12-04T00:38:47.7422944Z at [90m/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:26808:9
2025-12-04T00:38:47.7423701Z
2025-12-04T00:38:47.7723696Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.7726157Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7728007Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7729373Z [90m at processTicksAndRejections (node:internal/process/task_queues:95:5)[39m
2025-12-04T00:38:47.7729971Z
2025-12-04T00:38:47.7740659Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.7744408Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7745728Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7747217Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7748523Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7749120Z
2025-12-04T00:38:47.7761937Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.7763901Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7765340Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7766877Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7768259Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7768828Z
2025-12-04T00:38:47.7784219Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.7786169Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7787562Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7789030Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7790282Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7791009Z
2025-12-04T00:38:47.7793743Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.7800810Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7802194Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7803696Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7804974Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7805531Z
2025-12-04T00:38:47.7814728Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.7944077Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7950339Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7971776Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.7973287Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.7973868Z
2025-12-04T00:38:47.7979529Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8018681Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8020112Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8021899Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8023303Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8023875Z
2025-12-04T00:38:47.8025123Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8027093Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8028560Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8030079Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8031577Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8032103Z
2025-12-04T00:38:47.8033275Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8035106Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8036432Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8037895Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8039167Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8039737Z
2025-12-04T00:38:47.8041046Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8042880Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8044198Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8045614Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8046913Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8047473Z
2025-12-04T00:38:47.8048624Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8050695Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8052065Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8053534Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8054818Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8055364Z
2025-12-04T00:38:47.8056519Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8058340Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8059657Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8061652Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8063248Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8063795Z
2025-12-04T00:38:47.8065025Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8067030Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8068440Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8070007Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8071639Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8072211Z
2025-12-04T00:38:47.8073536Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8075541Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8076949Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8078474Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8079736Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8080237Z
2025-12-04T00:38:47.8085104Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8087097Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8088540Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8090087Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8091668Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8139632Z
2025-12-04T00:38:47.8141140Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8143136Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8145875Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8147330Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8148631Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8149185Z
2025-12-04T00:38:47.8150346Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8153746Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8155039Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8156486Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8157748Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8158283Z
2025-12-04T00:38:47.8159434Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8162121Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8163493Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8164958Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8166233Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8166753Z
2025-12-04T00:38:47.8167884Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8169660Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8171118Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8172572Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8173883Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8174409Z
2025-12-04T00:38:47.8175575Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8177384Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8178644Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8179940Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8209958Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8210741Z
2025-12-04T00:38:47.8211973Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8213962Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8215340Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8216916Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8225793Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8226389Z
2025-12-04T00:38:47.8227488Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8229153Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8230781Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8232501Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8244750Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8245301Z
2025-12-04T00:38:47.8250904Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8254238Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8255606Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8257048Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8275240Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8276039Z
2025-12-04T00:38:47.8277287Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8279264Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8280875Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8282363Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8283718Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8284294Z
2025-12-04T00:38:47.8285512Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8287533Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8288843Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8290398Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8291907Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8292475Z
2025-12-04T00:38:47.8294902Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8296789Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8298161Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8299645Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8301041Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8301491Z
2025-12-04T00:38:47.8307974Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8316588Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8317870Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8319252Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8320648Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8321154Z
2025-12-04T00:38:47.8325699Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8333618Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8334880Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8336249Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8337461Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8337989Z
2025-12-04T00:38:47.8342525Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8345216Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8348921Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8357311Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8358580Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8359089Z
2025-12-04T00:38:47.8360184Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8362120Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8363327Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8364668Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8365884Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8366394Z
2025-12-04T00:38:47.8374785Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8376635Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8377939Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8379364Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8380750Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8382310Z
2025-12-04T00:38:47.8387150Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8424876Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8426246Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8427705Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8428979Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8429516Z
2025-12-04T00:38:47.8430824Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8432648Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8433954Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8435420Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8436682Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8437199Z
2025-12-04T00:38:47.8438321Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8440148Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8441596Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8443001Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8444245Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8444785Z
2025-12-04T00:38:47.8449969Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8457655Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8458956Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8460403Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8467710Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8468276Z
2025-12-04T00:38:47.8472439Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8474374Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8475736Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8477173Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8478425Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8478947Z
2025-12-04T00:38:47.8480100Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8482063Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8483370Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8484900Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8486209Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8486737Z
2025-12-04T00:38:47.8488610Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8491033Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8492591Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8494194Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8495646Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8496315Z
2025-12-04T00:38:47.8507005Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8519469Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8520928Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8522371Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8523625Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8524142Z
2025-12-04T00:38:47.8535354Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8537405Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8548535Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8552801Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8554278Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8554881Z
2025-12-04T00:38:47.8559585Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8568520Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8569990Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8571786Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8578685Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8579278Z
2025-12-04T00:38:47.8580730Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8582730Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8584161Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8585732Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8592449Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8593038Z
2025-12-04T00:38:47.8594325Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8596325Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8597807Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8599392Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8600964Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8601541Z
2025-12-04T00:38:47.8606248Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8613760Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8615234Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8616826Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8618274Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8618868Z
2025-12-04T00:38:47.8631163Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8636401Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8637892Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8639493Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8641086Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8641671Z
2025-12-04T00:38:47.8645867Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8649019Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8651433Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8653255Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8654998Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8656608Z
2025-12-04T00:38:47.8657905Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8659901Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8661543Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8663157Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8664570Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8665145Z
2025-12-04T00:38:47.8673440Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8676619Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8678074Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8679641Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8681267Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8681876Z
2025-12-04T00:38:47.8691740Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8694947Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8696418Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8697994Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8699390Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8699959Z
2025-12-04T00:38:47.8711918Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8733082Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8734755Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8736590Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8738085Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8738831Z
2025-12-04T00:38:47.8740242Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8742538Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8744117Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8745789Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8747820Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8748694Z
2025-12-04T00:38:47.8783963Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8786359Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8788204Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8789935Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8791844Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8796312Z
2025-12-04T00:38:47.8802106Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8804502Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8806172Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8808125Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8810699Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8816751Z
2025-12-04T00:38:47.8820166Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8822766Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8825837Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8853494Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8858104Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8859308Z
2025-12-04T00:38:47.8860929Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8862983Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8864464Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8865948Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8867322Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8867927Z
2025-12-04T00:38:47.8873923Z [32m✓[39m src/components/InstallPWA.test.tsx [2m([22m[2m9 tests[22m[2m)[22m[33m 879[2mms[22m[39m
2025-12-04T00:38:47.8875221Z [33m[2m✓[22m[39m exibe mensagem e botões corretos [33m 314[2mms[22m[39m
2025-12-04T00:38:47.8877921Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8879938Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8881689Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8883275Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8884698Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8887147Z
2025-12-04T00:38:47.8888651Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8890856Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8892317Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8893864Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8895275Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8895834Z
2025-12-04T00:38:47.8897049Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8898852Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8900329Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8902125Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8903496Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8904061Z
2025-12-04T00:38:47.8905272Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8907269Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8908675Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8910237Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8913157Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8913747Z
2025-12-04T00:38:47.8915010Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8918539Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8920026Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8921818Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8923182Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8923760Z
2025-12-04T00:38:47.8924960Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8926980Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8928428Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8929957Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8931582Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8932164Z
2025-12-04T00:38:47.8933407Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8935340Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8936758Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8938959Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8940401Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8941180Z
2025-12-04T00:38:47.8951899Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8953838Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8955266Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8956838Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8958210Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8958811Z
2025-12-04T00:38:47.8960056Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8962822Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8964874Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8966977Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8968983Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8970389Z
2025-12-04T00:38:47.8971817Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8973820Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8975257Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8976789Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8978197Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8978777Z
2025-12-04T00:38:47.8991283Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.8993270Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8994740Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8996317Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.8997748Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.8998327Z
2025-12-04T00:38:47.9017706Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9019738Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9021403Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9022959Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9024367Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9025650Z
2025-12-04T00:38:47.9032900Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9035402Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9038103Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9039717Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9041308Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9041907Z
2025-12-04T00:38:47.9043143Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9045128Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9046544Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9048148Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9049553Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9050138Z
2025-12-04T00:38:47.9101083Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9103818Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9105135Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9106681Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9108099Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9108706Z
2025-12-04T00:38:47.9109953Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9112228Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9113692Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9115247Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9116670Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9117253Z
2025-12-04T00:38:47.9118505Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9150964Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9152552Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9154147Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9155626Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9156216Z
2025-12-04T00:38:47.9157485Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9159499Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9165425Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9167432Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9169116Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9169682Z
2025-12-04T00:38:47.9171148Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9191659Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9193193Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9194821Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9196235Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9196786Z
2025-12-04T00:38:47.9198042Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9200073Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9201784Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9203399Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9204860Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9205446Z
2025-12-04T00:38:47.9206706Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9208693Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9210164Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9241885Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9243302Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9243893Z
2025-12-04T00:38:47.9245115Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9247141Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9248627Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9250184Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9251783Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9252381Z
2025-12-04T00:38:47.9253642Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9255568Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9256928Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9258399Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9259703Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9260275Z
2025-12-04T00:38:47.9261639Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9263844Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9265389Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9266871Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9268150Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9268710Z
2025-12-04T00:38:47.9269911Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9314241Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9315725Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9317295Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9318738Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9319314Z
2025-12-04T00:38:47.9320758Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9322771Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9334980Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9336649Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9338101Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9338701Z
2025-12-04T00:38:47.9354790Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9356855Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9358306Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9359905Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9365335Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9365914Z
2025-12-04T00:38:47.9367170Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9369213Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9401853Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9403460Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9404873Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9405465Z
2025-12-04T00:38:47.9406723Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9408726Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9410204Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9412015Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9413773Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9414552Z
2025-12-04T00:38:47.9415815Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9417847Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9419310Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9421285Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9422741Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9423320Z
2025-12-04T00:38:47.9424550Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9426578Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9428044Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9429610Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9434333Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9434884Z
2025-12-04T00:38:47.9436025Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9437831Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9439163Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9440830Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9442145Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9442681Z
2025-12-04T00:38:47.9443822Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9445737Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9451192Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9455469Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9456873Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9457457Z
2025-12-04T00:38:47.9458777Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9461474Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9463054Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9464645Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9466095Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9466682Z
2025-12-04T00:38:47.9467969Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9470008Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9472185Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9473928Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9475369Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9475955Z
2025-12-04T00:38:47.9477192Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9479197Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9480834Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9482389Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9483710Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9484261Z
2025-12-04T00:38:47.9485442Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9487309Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9488693Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9490197Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9491943Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9492514Z
2025-12-04T00:38:47.9493742Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9497057Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9498570Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9500171Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9501819Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9502378Z
2025-12-04T00:38:47.9503630Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9507213Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9508687Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9510265Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9511906Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9512470Z
2025-12-04T00:38:47.9513704Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9515719Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9517179Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9518796Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9523820Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9524430Z
2025-12-04T00:38:47.9525961Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9528161Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9529644Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9545421Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9546853Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9547414Z
2025-12-04T00:38:47.9548653Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9550860Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9552362Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9553973Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9555365Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9555941Z
2025-12-04T00:38:47.9563684Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9565698Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9567126Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9568720Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9570158Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9572423Z
2025-12-04T00:38:47.9578662Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9581100Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9582670Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9584319Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9585742Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9587118Z
2025-12-04T00:38:47.9595288Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9597289Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9598641Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9600093Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9601615Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9603040Z
2025-12-04T00:38:47.9609871Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9619712Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9621396Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9623558Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9625002Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9625597Z
2025-12-04T00:38:47.9628857Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9631039Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9632444Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9633928Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9635223Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9635738Z
2025-12-04T00:38:47.9646220Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9649410Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9650906Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9652274Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9653492Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9654005Z
2025-12-04T00:38:47.9660089Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9662591Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9666505Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9668130Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9669532Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9670106Z
2025-12-04T00:38:47.9698886Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9701147Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9702678Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9704268Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9705729Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9706322Z
2025-12-04T00:38:47.9707576Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9709556Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9711340Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9712936Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9714356Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9714926Z
2025-12-04T00:38:47.9727239Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9730347Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9732990Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9734572Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9735990Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9736575Z
2025-12-04T00:38:47.9737809Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9739783Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9741431Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9743033Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9744438Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9745012Z
2025-12-04T00:38:47.9754262Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9757093Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9758890Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9760948Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9762946Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9764097Z
2025-12-04T00:38:47.9765391Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9767954Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9769368Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9771096Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9772498Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9773065Z
2025-12-04T00:38:47.9796137Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9812128Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9818011Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9819982Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9822916Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9823517Z
2025-12-04T00:38:47.9824759Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9826732Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9828046Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9829401Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9831591Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9832194Z
2025-12-04T00:38:47.9849836Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9852048Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9853503Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9855053Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9856469Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9865025Z
2025-12-04T00:38:47.9871624Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9877032Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9880138Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9885787Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9887219Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9887791Z
2025-12-04T00:38:47.9889035Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9891227Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9892665Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9894270Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9895673Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9896230Z
2025-12-04T00:38:47.9924526Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9926565Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9950026Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9952091Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9953502Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9954113Z
2025-12-04T00:38:47.9955365Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9957514Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9958952Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9960695Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9962249Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9962825Z
2025-12-04T00:38:47.9964069Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9966354Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9968029Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9969595Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9978219Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9983810Z
2025-12-04T00:38:47.9985482Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:47.9988164Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9990288Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:47.9992663Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:47.9994597Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0000377Z
2025-12-04T00:38:48.0002163Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0005022Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0006954Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0009015Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0011119Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0016627Z
2025-12-04T00:38:48.0018172Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0020389Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0022168Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0023737Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0025401Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0025980Z
2025-12-04T00:38:48.0031399Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0033465Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0034550Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0035679Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0036789Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0037278Z
2025-12-04T00:38:48.0038402Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0040190Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0041682Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0042962Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0047947Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0048797Z
2025-12-04T00:38:48.0050159Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0052084Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0053406Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0054836Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0056094Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0056598Z
2025-12-04T00:38:48.0057712Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0059398Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0063689Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0075451Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0076315Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0076632Z
2025-12-04T00:38:48.0077274Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0078277Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0078996Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0079788Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0080737Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0081246Z
2025-12-04T00:38:48.0083503Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0085429Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0086870Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0088427Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0089817Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0090376Z
2025-12-04T00:38:48.0098449Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0100626Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0102089Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0103666Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0105045Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0117316Z
2025-12-04T00:38:48.0122921Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0124944Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0126764Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0131869Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0133266Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0133838Z
2025-12-04T00:38:48.0135071Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0137014Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0138423Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0139956Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0141528Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0142122Z
2025-12-04T00:38:48.0148539Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0150847Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0152306Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0153855Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0155227Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0155796Z
2025-12-04T00:38:48.0165682Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0167688Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0169138Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0170885Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0172271Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0172843Z
2025-12-04T00:38:48.0183026Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0185204Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0186859Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0188648Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0190251Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0191176Z
2025-12-04T00:38:48.0206619Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0208822Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0210724Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0212519Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0214120Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0214857Z
2025-12-04T00:38:48.0218344Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0220897Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0222558Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0224347Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0225941Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0226700Z
2025-12-04T00:38:48.0256863Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0258836Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0260267Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0262012Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0263327Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0263876Z
2025-12-04T00:38:48.0267447Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0273537Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0274915Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0276456Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0277888Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0278509Z
2025-12-04T00:38:48.0283774Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0286697Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0289997Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0291729Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0293027Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0293568Z
2025-12-04T00:38:48.0298852Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0323595Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0325619Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0327435Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0329090Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0329831Z
2025-12-04T00:38:48.0331512Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0333702Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0335445Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0337691Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0339604Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0341360Z
2025-12-04T00:38:48.0370704Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0376232Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0378058Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0379846Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0381685Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0388133Z
2025-12-04T00:38:48.0394781Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0397161Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0398938Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0401093Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0402787Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0409098Z
2025-12-04T00:38:48.0418075Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0424393Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0428305Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0440364Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0441988Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0442564Z
2025-12-04T00:38:48.0443637Z [90mstderr[2m | src/hooks/useVotacoes.test.tsx[2m > [22m[2museVotacoes[2m > [22m[2mtrata erro ao carregar votações
2025-12-04T00:38:48.0444880Z [22m[39mErro ao carregar votações: Error: db error
2025-12-04T00:38:48.0446098Z at Object.order [90m(/home/runner/work/norma/norma/[39msrc/hooks/useVotacoes.test.tsx:120:109[90m)[39m
2025-12-04T00:38:48.0447385Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useVotacoes.ts:52:10
2025-12-04T00:38:48.0448470Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useVotacoes.ts:112:7
2025-12-04T00:38:48.0450229Z at commitHookEffectListMount [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:23189:26[90m)[39m
2025-12-04T00:38:48.0452906Z at commitPassiveMountOnFiber [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24970:11[90m)[39m
2025-12-04T00:38:48.0455398Z at commitPassiveMountEffects_complete [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24930:9[90m)[39m
2025-12-04T00:38:48.0476955Z at commitPassiveMountEffects_begin [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24917:7[90m)[39m
2025-12-04T00:38:48.0479326Z at commitPassiveMountEffects [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24905:3[90m)[39m
2025-12-04T00:38:48.0481746Z at flushPassiveEffectsImpl [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:27078:3[90m)[39m
2025-12-04T00:38:48.0484596Z at flushPassiveEffects [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:27023:14[90m)[39m
2025-12-04T00:38:48.0485586Z
2025-12-04T00:38:48.0486830Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0488817Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0490270Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0492062Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0493478Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0494068Z
2025-12-04T00:38:48.0495344Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0497315Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0498743Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0500292Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0501883Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0502461Z
2025-12-04T00:38:48.0503705Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0530190Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0535376Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0536827Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0538050Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0538601Z
2025-12-04T00:38:48.0539795Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0541967Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0544647Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0546169Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0547486Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0548058Z
2025-12-04T00:38:48.0549217Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0551375Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0552748Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0554316Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0555720Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0556302Z
2025-12-04T00:38:48.0557562Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0561316Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0562826Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0564409Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0565813Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0566368Z
2025-12-04T00:38:48.0567621Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0569575Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0571232Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0572813Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0574230Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0574799Z
2025-12-04T00:38:48.0576028Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0578001Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0579437Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0582374Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0583792Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0584375Z
2025-12-04T00:38:48.0585629Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0587622Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0589067Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0590860Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0593438Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0594023Z
2025-12-04T00:38:48.0595267Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0597234Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0598744Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0600376Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0601965Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0602532Z
2025-12-04T00:38:48.0603747Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0605711Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0608292Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0609914Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0611976Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0612569Z
2025-12-04T00:38:48.0613819Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0615786Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0617211Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0618783Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0620168Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0620930Z
2025-12-04T00:38:48.0622180Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0624198Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0625610Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0627178Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0628554Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0629179Z
2025-12-04T00:38:48.0630432Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0633756Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0635218Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0636833Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0638211Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0638804Z
2025-12-04T00:38:48.0641335Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0643318Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0644748Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0646311Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0647679Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0648241Z
2025-12-04T00:38:48.0649511Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0651674Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0653122Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0654703Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0657517Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0658093Z
2025-12-04T00:38:48.0659329Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0661494Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0663426Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0665024Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0666414Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0666987Z
2025-12-04T00:38:48.0680628Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0682666Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0684108Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0685695Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0687126Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0687704Z
2025-12-04T00:38:48.0732620Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0734613Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0736008Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0737559Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0738965Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0739561Z
2025-12-04T00:38:48.0741236Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0742822Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0743938Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0745195Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0746331Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0746813Z
2025-12-04T00:38:48.0747799Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0749489Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0750933Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0752365Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0753580Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0754097Z
2025-12-04T00:38:48.0755199Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0756968Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0758230Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0759588Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0760979Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0761775Z
2025-12-04T00:38:48.0768110Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0784387Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0785871Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0787474Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0788907Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0789493Z
2025-12-04T00:38:48.0790965Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0792990Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0794473Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0796083Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0797493Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0798075Z
2025-12-04T00:38:48.0816583Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0823180Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0824660Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0826261Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0827687Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0828266Z
2025-12-04T00:38:48.0829567Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0831747Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0833189Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0834751Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0836119Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0836708Z
2025-12-04T00:38:48.0842291Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0847806Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0849270Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0851061Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0852469Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0853032Z
2025-12-04T00:38:48.0854283Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0856243Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0857657Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0859811Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0861432Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0862000Z
2025-12-04T00:38:48.0973658Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.0976165Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0978734Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0980220Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.0981697Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.0982267Z
2025-12-04T00:38:48.1002176Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1004054Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1005395Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1006839Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1008126Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1008654Z
2025-12-04T00:38:48.1009820Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1011852Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1013197Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1014638Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1015929Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1016459Z
2025-12-04T00:38:48.1025471Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1027314Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1028597Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1030007Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1031442Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1031966Z
2025-12-04T00:38:48.1052087Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1054022Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1055370Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1056810Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1058037Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1058550Z
2025-12-04T00:38:48.1075230Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1077330Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1078619Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1080020Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1081491Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1082034Z
2025-12-04T00:38:48.1083256Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1085207Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1086640Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1088233Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1089669Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1090238Z
2025-12-04T00:38:48.1099185Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1105004Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1106423Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1107936Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1109277Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1109859Z
2025-12-04T00:38:48.1142203Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1144105Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1145479Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1146959Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1148249Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1148775Z
2025-12-04T00:38:48.1149888Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1151955Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1153330Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1154800Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1156085Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1156625Z
2025-12-04T00:38:48.1157784Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1159605Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1161187Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1163002Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1164583Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1165148Z
2025-12-04T00:38:48.1166332Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1168288Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1169682Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1171659Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1173055Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1173583Z
2025-12-04T00:38:48.1178856Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1186292Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1187697Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1189085Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1190410Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1193657Z
2025-12-04T00:38:48.1205961Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1223245Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1225088Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1226736Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1228230Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1228928Z
2025-12-04T00:38:48.1230285Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1232458Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1233826Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1235350Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1236768Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1237378Z
2025-12-04T00:38:48.1262371Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1273687Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1275315Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1276948Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1278377Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1279067Z
2025-12-04T00:38:48.1280336Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1282957Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1285475Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1286952Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1288255Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1288810Z
2025-12-04T00:38:48.1296960Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1302485Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1303812Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1305366Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1306707Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1307241Z
2025-12-04T00:38:48.1319372Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1334683Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1341863Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1343498Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1344950Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1345522Z
2025-12-04T00:38:48.1346775Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1348807Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1350296Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1352101Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1353481Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1354075Z
2025-12-04T00:38:48.1355356Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1357358Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1358796Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1360410Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1362053Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1362604Z
2025-12-04T00:38:48.1379137Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1381113Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1382416Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1383935Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1385250Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1386410Z
2025-12-04T00:38:48.1391739Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1396944Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1398295Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1399790Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1401302Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1401848Z
2025-12-04T00:38:48.1403040Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1404851Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1406201Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1407664Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1408949Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1409484Z
2025-12-04T00:38:48.1413281Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1415544Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1419445Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1421166Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1422540Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1423089Z
2025-12-04T00:38:48.1425886Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1427745Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1429089Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1430671Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1431974Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1436439Z
2025-12-04T00:38:48.1442563Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1447600Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1448975Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1450600Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1451899Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1452458Z
2025-12-04T00:38:48.1466653Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1469284Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1473619Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1475229Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1476560Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1477081Z
2025-12-04T00:38:48.1478192Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1479983Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1481527Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1483016Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1484324Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1484874Z
2025-12-04T00:38:48.1486322Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1488154Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1489476Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1491102Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1496500Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1497064Z
2025-12-04T00:38:48.1505316Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1507252Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1508599Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1510339Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1514007Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1514576Z
2025-12-04T00:38:48.1519745Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1522055Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1524198Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1526002Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1529052Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1529595Z
2025-12-04T00:38:48.1532387Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1534318Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1535722Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1537308Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1538707Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1543698Z
2025-12-04T00:38:48.1549826Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1557480Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1558964Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1560757Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1562196Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1562784Z
2025-12-04T00:38:48.1580936Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1582939Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1584399Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1585995Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1587373Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1587952Z
2025-12-04T00:38:48.1589085Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1591285Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1592719Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1594313Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1595753Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1596332Z
2025-12-04T00:38:48.1601540Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1603476Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1604917Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1606479Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1607830Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1609850Z
2025-12-04T00:38:48.1613526Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1615751Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1617336Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1619073Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1622399Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1622983Z
2025-12-04T00:38:48.1624278Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1626250Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1627786Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1635903Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1641163Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1641702Z
2025-12-04T00:38:48.1642858Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1653347Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1655341Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1657063Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1658457Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1659214Z
2025-12-04T00:38:48.1661384Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1663191Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1664441Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1665818Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1667064Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1667585Z
2025-12-04T00:38:48.1673022Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1674859Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1676140Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1677520Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1678718Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1679232Z
2025-12-04T00:38:48.1692200Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1697281Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1698735Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1700328Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1701934Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1702438Z
2025-12-04T00:38:48.1710982Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1729208Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1731087Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1733943Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1738612Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1741640Z
2025-12-04T00:38:48.1744593Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1750405Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1752199Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1753787Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1755203Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1755791Z
2025-12-04T00:38:48.1761022Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1766160Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1767635Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1769214Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1770830Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1771427Z
2025-12-04T00:38:48.1772700Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1774786Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1785662Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1787304Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1788740Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1789275Z
2025-12-04T00:38:48.1790761Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1792776Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1795329Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1796901Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1798268Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1798830Z
2025-12-04T00:38:48.1800040Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1802168Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1803621Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1805172Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1806495Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1807048Z
2025-12-04T00:38:48.1813392Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1815417Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1816853Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1818150Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1820311Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1821373Z
2025-12-04T00:38:48.1826390Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1830284Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1831882Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1833390Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1834644Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1835126Z
2025-12-04T00:38:48.1842231Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1854409Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1857081Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1858969Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1861036Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1862227Z
2025-12-04T00:38:48.1863784Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1866021Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1867960Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1870158Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1872688Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1873285Z
2025-12-04T00:38:48.1879609Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1882402Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1884777Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1886316Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1887625Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1888188Z
2025-12-04T00:38:48.1900419Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1902656Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1904061Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1905525Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1906914Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1909587Z
2025-12-04T00:38:48.1911372Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1914218Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1916907Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1918502Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1919880Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1920621Z
2025-12-04T00:38:48.1922014Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1924106Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1925651Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1933280Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1935416Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1936283Z
2025-12-04T00:38:48.1937718Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1939900Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1941736Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1943469Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1947989Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1948570Z
2025-12-04T00:38:48.1954339Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1956327Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1958625Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1960117Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1961662Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1965723Z
2025-12-04T00:38:48.1969399Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1971767Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1974085Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1977271Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1978658Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1979764Z
2025-12-04T00:38:48.1982634Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.1984728Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1987855Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1989498Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.1991091Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.1991964Z
2025-12-04T00:38:48.2010162Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2012393Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2013742Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2015198Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2016510Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2017060Z
2025-12-04T00:38:48.2018232Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2020066Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2021685Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2023275Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2024620Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2025186Z
2025-12-04T00:38:48.2026790Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2028781Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2030339Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2032267Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2033852Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2034631Z
2025-12-04T00:38:48.2064184Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2066152Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2067490Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2068982Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2070272Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2071007Z
2025-12-04T00:38:48.2072206Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2074100Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2075662Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2077188Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2078557Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2079080Z
2025-12-04T00:38:48.2080215Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2082133Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2083672Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2086080Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2088130Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2089531Z
2025-12-04T00:38:48.2091798Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2093883Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2095407Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2097011Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2098399Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2099067Z
2025-12-04T00:38:48.2108773Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2112184Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2113676Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2115279Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2116683Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2117273Z
2025-12-04T00:38:48.2135677Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2137688Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2139257Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2141097Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2142697Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2143449Z
2025-12-04T00:38:48.2155735Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2157739Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2159194Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2160984Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2162405Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2162947Z
2025-12-04T00:38:48.2172078Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2174115Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2175590Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2177158Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2178575Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2179163Z
2025-12-04T00:38:48.2188958Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2191245Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2192553Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2193999Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2195338Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2195886Z
2025-12-04T00:38:48.2321922Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2324204Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2326212Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2328255Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2329949Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2331099Z
2025-12-04T00:38:48.2332502Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2334625Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2336303Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2338129Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2339749Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2340435Z
2025-12-04T00:38:48.2341856Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2344014Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2345394Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2346869Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2348164Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2348748Z
2025-12-04T00:38:48.2349913Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2351915Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2353317Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2354843Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2370982Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2371535Z
2025-12-04T00:38:48.2372673Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2374479Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2375769Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2377461Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2378839Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2379350Z
2025-12-04T00:38:48.2380700Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2384300Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2385581Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2386940Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2388189Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2388667Z
2025-12-04T00:38:48.2389801Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2391794Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2393092Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2394512Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2395641Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2396115Z
2025-12-04T00:38:48.2397117Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2398745Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2399959Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2402485Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2403744Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2404259Z
2025-12-04T00:38:48.2405456Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2407415Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2408875Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2410710Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2412138Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2412691Z
2025-12-04T00:38:48.2413908Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2415917Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2417287Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2418695Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2419893Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2420409Z
2025-12-04T00:38:48.2421710Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2423761Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2425220Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2426626Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2427856Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2428349Z
2025-12-04T00:38:48.2429455Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2431398Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2432663Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2434086Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2435329Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2435851Z
2025-12-04T00:38:48.2436969Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2438726Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2439987Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2441554Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2442781Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2443284Z
2025-12-04T00:38:48.2444399Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2446176Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2447446Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2448801Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2450003Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2463198Z
2025-12-04T00:38:48.2464743Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2466944Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2468649Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2470409Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2472232Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2472983Z
2025-12-04T00:38:48.2474334Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2476497Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2478098Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2479841Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2481991Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2482763Z
2025-12-04T00:38:48.2512237Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2514482Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2516196Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2518015Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2519595Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2520281Z
2025-12-04T00:38:48.2521911Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2523946Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2525315Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2526919Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2528551Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2529133Z
2025-12-04T00:38:48.2531551Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2533489Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2534909Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2536485Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2537847Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2538629Z
2025-12-04T00:38:48.2547507Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2549550Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2551224Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2552799Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2554400Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2555108Z
2025-12-04T00:38:48.2567777Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2569795Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2571448Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2572998Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2574491Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2575066Z
2025-12-04T00:38:48.2593725Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2595685Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2598920Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2600420Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2601860Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2602365Z
2025-12-04T00:38:48.2603534Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2605380Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2606686Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2608129Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2609419Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2609949Z
2025-12-04T00:38:48.2618931Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2621035Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2622328Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2623774Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2625167Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2625703Z
2025-12-04T00:38:48.2632291Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2634296Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2635774Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2637339Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2638725Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2639310Z
2025-12-04T00:38:48.2648315Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2650320Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2651962Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2653582Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2654977Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2655537Z
2025-12-04T00:38:48.2696336Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2698076Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2699405Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2701171Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2702435Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2702908Z
2025-12-04T00:38:48.2704528Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2706360Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2707653Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2709091Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2710377Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2711088Z
2025-12-04T00:38:48.2712201Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2714060Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2715392Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2716581Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2717725Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2718203Z
2025-12-04T00:38:48.2728697Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2730901Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2732350Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2733869Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2735170Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2735753Z
2025-12-04T00:38:48.2751911Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2753844Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2755170Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2756613Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2757900Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2758498Z
2025-12-04T00:38:48.2776932Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2780970Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2783251Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2785574Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2788489Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2788969Z
2025-12-04T00:38:48.2806388Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2808328Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2809666Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2811992Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2813362Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2840910Z
2025-12-04T00:38:48.2842607Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2845346Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2847270Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2849477Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2851666Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2852616Z
2025-12-04T00:38:48.2854200Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2856825Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2859598Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2861543Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2863281Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2878124Z
2025-12-04T00:38:48.2879410Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2913235Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2914790Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2916435Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2917878Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2918452Z
2025-12-04T00:38:48.2919751Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2921993Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2923442Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2925024Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2926448Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2927019Z
2025-12-04T00:38:48.2928212Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2930059Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2931720Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2933309Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2934641Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2935159Z
2025-12-04T00:38:48.2936328Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.2938870Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2940259Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2941966Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.2943284Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.2943837Z
2025-12-04T00:38:48.2995856Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3113309Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3114628Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3116081Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3117289Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3117797Z
2025-12-04T00:38:48.3118873Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3120766Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3122013Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3123365Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3124552Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3125062Z
2025-12-04T00:38:48.3126191Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3128004Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3129303Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3130905Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3132183Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3132693Z
2025-12-04T00:38:48.3133844Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3135647Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3136915Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3138276Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3139471Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3139970Z
2025-12-04T00:38:48.3202872Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3204893Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3206245Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3207721Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3209639Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3210188Z
2025-12-04T00:38:48.3211552Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3213355Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3214646Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3216051Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3217288Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3217806Z
2025-12-04T00:38:48.3218943Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3220964Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3222264Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3223694Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3224925Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3225461Z
2025-12-04T00:38:48.3226612Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3228428Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3229751Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3312025Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3313623Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3314201Z
2025-12-04T00:38:48.3315474Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3317445Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3318887Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3320653Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3322066Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3322661Z
2025-12-04T00:38:48.3323905Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3325854Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3327269Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3328816Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3330258Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3361156Z
2025-12-04T00:38:48.3362446Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3364890Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3366606Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3368192Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3369605Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3370185Z
2025-12-04T00:38:48.3400883Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3402870Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3404262Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3405819Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3407178Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3407746Z
2025-12-04T00:38:48.3414433Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3416816Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3418552Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3420429Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3422306Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3426960Z
2025-12-04T00:38:48.3433536Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3435934Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3437673Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3439509Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3441536Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3446231Z
2025-12-04T00:38:48.3458641Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3464672Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3470027Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3475722Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3478433Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3480223Z
2025-12-04T00:38:48.3483497Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3486798Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3489502Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3492564Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3495238Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3497658Z
2025-12-04T00:38:48.3500216Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3503604Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3506404Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3508292Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3509832Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3511163Z
2025-12-04T00:38:48.3512734Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3514809Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3516351Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3517997Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3519408Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3519938Z
2025-12-04T00:38:48.3521372Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3523176Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3524466Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3525905Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3527141Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3527669Z
2025-12-04T00:38:48.3528792Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3530786Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3532081Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3533494Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3534718Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3535226Z
2025-12-04T00:38:48.3565877Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3567724Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3569030Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3570629Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3571925Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3572438Z
2025-12-04T00:38:48.3577775Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3579794Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3581730Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3597694Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3599219Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3599895Z
2025-12-04T00:38:48.3601376Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3603316Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3604738Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3606266Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3609063Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3610013Z
2025-12-04T00:38:48.3627413Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3628642Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3629523Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3630820Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3634762Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3635387Z
2025-12-04T00:38:48.3650105Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3652597Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3655663Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3657315Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3658740Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3659316Z
2025-12-04T00:38:48.3664306Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3666809Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3669124Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3671312Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3673973Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3674566Z
2025-12-04T00:38:48.3681084Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3683144Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3684624Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3686210Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3687663Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3688217Z
2025-12-04T00:38:48.3696517Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3699132Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3701439Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3704293Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3705703Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3706310Z
2025-12-04T00:38:48.3709682Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3712175Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3713889Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3722000Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3723858Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3724736Z
2025-12-04T00:38:48.3726178Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3728583Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3730344Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3733044Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3734455Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3735065Z
2025-12-04T00:38:48.3738793Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3741034Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3742534Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3744112Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3745563Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3746146Z
2025-12-04T00:38:48.3751682Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3754871Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3756344Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3757959Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3759352Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3759952Z
2025-12-04T00:38:48.3773593Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3775784Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3779243Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3781337Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3785216Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3785830Z
2025-12-04T00:38:48.3787135Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3789142Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3790797Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3792433Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3793834Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3794398Z
2025-12-04T00:38:48.3824234Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3826525Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3828218Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3830144Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3832064Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3832843Z
2025-12-04T00:38:48.3834209Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3836606Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3838358Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3840174Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3842101Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3842918Z
2025-12-04T00:38:48.3844424Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3846774Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3848488Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3850279Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3852583Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3854333Z
2025-12-04T00:38:48.3855645Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3859215Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3860913Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3862528Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3863900Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3864501Z
2025-12-04T00:38:48.3865785Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3868293Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3869688Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3871513Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3912138Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3912766Z
2025-12-04T00:38:48.3914101Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3918126Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3919649Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3921518Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3922966Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3923565Z
2025-12-04T00:38:48.3924806Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3926849Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3928351Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3957889Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3959304Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3959901Z
2025-12-04T00:38:48.3961432Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3964719Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3966232Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3967836Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3969220Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3969809Z
2025-12-04T00:38:48.3971316Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3973325Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3974843Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3976488Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3977938Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3978544Z
2025-12-04T00:38:48.3979779Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3982012Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3983495Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3985083Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3987070Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3987704Z
2025-12-04T00:38:48.3988988Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.3991207Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3994148Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3995720Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.3997155Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.3997732Z
2025-12-04T00:38:48.3998916Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4001137Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4002627Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4005581Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4007026Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4007587Z
2025-12-04T00:38:48.4008861Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4011048Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4012532Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4014151Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4015582Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4016159Z
2025-12-04T00:38:48.4018873Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4021128Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4022602Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4024156Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4025585Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4026140Z
2025-12-04T00:38:48.4027404Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4029436Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4038051Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4039664Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4041296Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4041892Z
2025-12-04T00:38:48.4043176Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4050699Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4052818Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4054454Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4055848Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4056444Z
2025-12-04T00:38:48.4057723Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4059775Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4061465Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4063051Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4064463Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4065049Z
2025-12-04T00:38:48.4066326Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4068333Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4069785Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4071607Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4073070Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4073648Z
2025-12-04T00:38:48.4078343Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4080402Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4082139Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4083783Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4086637Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4087237Z
2025-12-04T00:38:48.4088534Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4090745Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4092194Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4093859Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4095263Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4095828Z
2025-12-04T00:38:48.4097093Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4100756Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4102304Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4103921Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4105358Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4106271Z
2025-12-04T00:38:48.4107818Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4109839Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4111605Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4113271Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4121926Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4122524Z
2025-12-04T00:38:48.4123797Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4125823Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4129307Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4131202Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4132631Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4133186Z
2025-12-04T00:38:48.4134437Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4136462Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4137907Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4139552Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4141261Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4141853Z
2025-12-04T00:38:48.4146556Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4148572Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4150055Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4151853Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4153322Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4153916Z
2025-12-04T00:38:48.4158058Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4160330Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4163875Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4165928Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4169183Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4170736Z
2025-12-04T00:38:48.4176290Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4178603Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4182811Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4184892Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4186382Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4186960Z
2025-12-04T00:38:48.4193617Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4200421Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4202236Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4203875Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4205315Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4205928Z
2025-12-04T00:38:48.4207208Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4209221Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4210979Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4212602Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4214011Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4214574Z
2025-12-04T00:38:48.4220074Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4222924Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4225400Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4226998Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4228406Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4229004Z
2025-12-04T00:38:48.4230341Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4233709Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4235168Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4236738Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4238202Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4238788Z
2025-12-04T00:38:48.4244070Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4251160Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4252666Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4254238Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4255717Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4256302Z
2025-12-04T00:38:48.4257897Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4260128Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4261762Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4263407Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4264832Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4265406Z
2025-12-04T00:38:48.4270737Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4275048Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4277651Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4279321Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4280947Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4281529Z
2025-12-04T00:38:48.4282817Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4284886Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4286332Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4287910Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4289267Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4289814Z
2025-12-04T00:38:48.4291085Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4292797Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4294000Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4295307Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4296481Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4296984Z
2025-12-04T00:38:48.4379944Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4382097Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4429078Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4431380Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4433041Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4433858Z
2025-12-04T00:38:48.4435289Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4437515Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4439243Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4441754Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4443662Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4444485Z
2025-12-04T00:38:48.4445993Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4448216Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4449864Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4451842Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4454438Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4455001Z
2025-12-04T00:38:48.4456990Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4458989Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4460778Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4462396Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4463770Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4464355Z
2025-12-04T00:38:48.4465601Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4467581Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4469064Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4472112Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4473574Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4474169Z
2025-12-04T00:38:48.4475385Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4477340Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4478813Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4480401Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4481924Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4482497Z
2025-12-04T00:38:48.4483688Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4485566Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4486885Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4488337Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4489575Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4490112Z
2025-12-04T00:38:48.4491483Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4493594Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4495139Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4496620Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4497876Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4498397Z
2025-12-04T00:38:48.4499598Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4507104Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4508559Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4511912Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4515270Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4515904Z
2025-12-04T00:38:48.4517168Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4519189Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4520853Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4522454Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4525740Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4526346Z
2025-12-04T00:38:48.4527670Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4529721Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4531449Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4533017Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4534452Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4535015Z
2025-12-04T00:38:48.4543258Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4546757Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4553820Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4555360Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4556733Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4557338Z
2025-12-04T00:38:48.4570893Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4579804Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4581450Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4582984Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4591576Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4592369Z
2025-12-04T00:38:48.4593603Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4595604Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4597010Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4598589Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4599878Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4600658Z
2025-12-04T00:38:48.4605904Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4613584Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4615052Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4616641Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4618039Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4618597Z
2025-12-04T00:38:48.4623011Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4628446Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4629924Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4631751Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4633155Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4633745Z
2025-12-04T00:38:48.4639623Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4643617Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4646826Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4649167Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4652838Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4653897Z
2025-12-04T00:38:48.4655407Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4657887Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4661831Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4663468Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4664878Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4665437Z
2025-12-04T00:38:48.4666648Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4668585Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4670260Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4671930Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4673217Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4673741Z
2025-12-04T00:38:48.4681833Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4683936Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4687335Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4688810Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4690099Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4690835Z
2025-12-04T00:38:48.4776697Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4782268Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4783770Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4785348Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4786677Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4787254Z
2025-12-04T00:38:48.4815444Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4818437Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4820388Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4823680Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4825069Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4825646Z
2025-12-04T00:38:48.4833001Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4836747Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4838195Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4839810Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4841382Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4841968Z
2025-12-04T00:38:48.4859989Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4865877Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4867359Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4868931Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4872928Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4873545Z
2025-12-04T00:38:48.4875334Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4877595Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4879067Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4880846Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4882254Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4882819Z
2025-12-04T00:38:48.4888576Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4897371Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4898873Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4900643Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4902058Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4902627Z
2025-12-04T00:38:48.4907832Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4914465Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4915922Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4917482Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4918921Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4919484Z
2025-12-04T00:38:48.4920920Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4922891Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4924318Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4925856Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4927212Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4927771Z
2025-12-04T00:38:48.4932959Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4948240Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4949689Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4951467Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4952864Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4953426Z
2025-12-04T00:38:48.4954543Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4956078Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4958564Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4960655Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4961847Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4962328Z
2025-12-04T00:38:48.4963406Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4965127Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4966283Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4967571Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4968776Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4969319Z
2025-12-04T00:38:48.4970434Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4973357Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4974630Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4975957Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4977068Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4977547Z
2025-12-04T00:38:48.4978643Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4980371Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4981848Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4983276Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4984502Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4985028Z
2025-12-04T00:38:48.4989011Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.4990746Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4992005Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4993267Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.4994391Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.4994899Z
2025-12-04T00:38:48.5002715Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5004817Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5006448Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5008062Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5009512Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5011057Z
2025-12-04T00:38:48.5015179Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5017953Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5051566Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5053420Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5054889Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5055573Z
2025-12-04T00:38:48.5074165Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5077518Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5080258Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5082946Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5085219Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5086888Z
2025-12-04T00:38:48.5088401Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5090285Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5091904Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5093446Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5094848Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5095444Z
2025-12-04T00:38:48.5101844Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5103869Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5105322Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5106869Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5108307Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5108883Z
2025-12-04T00:38:48.5117350Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5119382Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5121091Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5122715Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5124134Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5124702Z
2025-12-04T00:38:48.5145518Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5147574Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5149039Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5150867Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5152959Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5153554Z
2025-12-04T00:38:48.5154861Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5156838Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5159703Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5161422Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5162727Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5163258Z
2025-12-04T00:38:48.5164427Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5166307Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5167647Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5169112Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5170358Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5171089Z
2025-12-04T00:38:48.5174940Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5176858Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5178210Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5179744Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5181254Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5181830Z
2025-12-04T00:38:48.5193273Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5195291Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5196740Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5198353Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5199773Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5200376Z
2025-12-04T00:38:48.5205788Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5207822Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5209301Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5211062Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5212409Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5214345Z
2025-12-04T00:38:48.5227695Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5238987Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5241344Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5243902Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5245198Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5245733Z
2025-12-04T00:38:48.5246922Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5248770Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5250169Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5251915Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5253278Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5253817Z
2025-12-04T00:38:48.5260771Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5267814Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5292144Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5293797Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5295184Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5295752Z
2025-12-04T00:38:48.5297028Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5299005Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5300401Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5302134Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5303537Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5304088Z
2025-12-04T00:38:48.5305295Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5307153Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5308560Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5310153Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5311756Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5312341Z
2025-12-04T00:38:48.5313559Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5315470Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5316871Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5318426Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5319796Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5320873Z
2025-12-04T00:38:48.5322340Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5324347Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5325777Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5327308Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5328697Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5329255Z
2025-12-04T00:38:48.5331940Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5334249Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5335986Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5337708Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5339305Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5340001Z
2025-12-04T00:38:48.5364466Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5366735Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5368227Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5369838Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5371725Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5372320Z
2025-12-04T00:38:48.5373541Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5375594Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5377079Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5378662Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5380114Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5380919Z
2025-12-04T00:38:48.5382202Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5384191Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5385692Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5387303Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5388712Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5389302Z
2025-12-04T00:38:48.5393898Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5396094Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5398010Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5400089Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5401846Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5402600Z
2025-12-04T00:38:48.5412633Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5414675Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5416126Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5417719Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5419134Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5432604Z
2025-12-04T00:38:48.5433901Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5435942Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5437441Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5439026Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5440689Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5441296Z
2025-12-04T00:38:48.5442544Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5444551Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5446036Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5447596Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5448995Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5449580Z
2025-12-04T00:38:48.5452796Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5455407Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5457836Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5459571Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5461393Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5462225Z
2025-12-04T00:38:48.5464298Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5466478Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5468112Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5470056Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5471886Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5472566Z
2025-12-04T00:38:48.5478547Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5517996Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5519582Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5521428Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5522855Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5523438Z
2025-12-04T00:38:48.5526940Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5528974Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5530720Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5533713Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5535177Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5535748Z
2025-12-04T00:38:48.5536985Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5539052Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5540725Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5542328Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5543780Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5545603Z
2025-12-04T00:38:48.5546907Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5548921Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5550374Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5552188Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5553588Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5554179Z
2025-12-04T00:38:48.5555415Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5558730Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5560280Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5562092Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5563475Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5564078Z
2025-12-04T00:38:48.5565356Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5567376Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5568811Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5570978Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5572711Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5573270Z
2025-12-04T00:38:48.5574516Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5576552Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5578039Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5579604Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5581267Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5583109Z
2025-12-04T00:38:48.5585692Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5587744Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5588422Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5589388Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5590068Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5590090Z
2025-12-04T00:38:48.5591644Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5592770Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5593429Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5594465Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5595149Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5595171Z
2025-12-04T00:38:48.5599890Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5601222Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5601908Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5602886Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5603585Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5603619Z
2025-12-04T00:38:48.5632521Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5633712Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5634405Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5636956Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5637685Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5637711Z
2025-12-04T00:38:48.5638965Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5640792Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5641491Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5642533Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5643213Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5643234Z
2025-12-04T00:38:48.5644470Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5645556Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5646233Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5647327Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5648020Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5648040Z
2025-12-04T00:38:48.5669911Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5671288Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5671947Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5672983Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5673691Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5673729Z
2025-12-04T00:38:48.5689017Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5690231Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5691141Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5692162Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5692839Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5692867Z
2025-12-04T00:38:48.5694145Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5695238Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5696014Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5697047Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5697722Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5697742Z
2025-12-04T00:38:48.5699000Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5700074Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5701058Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5718009Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5719032Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5719242Z
2025-12-04T00:38:48.5720716Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5721832Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5722488Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5723527Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5724197Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5724218Z
2025-12-04T00:38:48.5725437Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5726563Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5727248Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5728283Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5742828Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5742858Z
2025-12-04T00:38:48.5744174Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5745292Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5745971Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5746976Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5747662Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5747698Z
2025-12-04T00:38:48.5748924Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5750032Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5762597Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5763670Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5764355Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5764393Z
2025-12-04T00:38:48.5765667Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5771009Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5771736Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5772751Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5773418Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5773440Z
2025-12-04T00:38:48.5774722Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5775902Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5777018Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5778087Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5778783Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5778806Z
2025-12-04T00:38:48.5802210Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5812882Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5815323Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5816646Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5818531Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5819805Z
2025-12-04T00:38:48.5822891Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5825244Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5827073Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5831452Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5833882Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5835617Z
2025-12-04T00:38:48.5838630Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5847310Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5848007Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5849027Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5849702Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5849720Z
2025-12-04T00:38:48.5853834Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5855237Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5856980Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5859311Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5860000Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5860020Z
2025-12-04T00:38:48.5861613Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5862726Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5863398Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5864378Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5865034Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5865056Z
2025-12-04T00:38:48.5868583Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5871685Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5872338Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5873393Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5874093Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5874114Z
2025-12-04T00:38:48.5880375Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5903290Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5904065Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5905117Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5905837Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5906009Z
2025-12-04T00:38:48.5907227Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5908303Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5909042Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5910034Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5911040Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5911084Z
2025-12-04T00:38:48.5916320Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5917455Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5918135Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5919113Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5919795Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5919819Z
2025-12-04T00:38:48.5928713Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5929902Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5930801Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5931811Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5932488Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5932524Z
2025-12-04T00:38:48.5941231Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5942385Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5943045Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5944706Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5945418Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5945440Z
2025-12-04T00:38:48.5953724Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5954876Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5955518Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5956531Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5957225Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5957279Z
2025-12-04T00:38:48.5965764Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5966902Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5967598Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5968581Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5969273Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5969297Z
2025-12-04T00:38:48.5976780Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5979385Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5980051Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5981270Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5981916Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5981948Z
2025-12-04T00:38:48.5996428Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.5997783Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.5998694Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.5999897Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6001568Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6004668Z
2025-12-04T00:38:48.6017533Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6021063Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6024078Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6025134Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6027135Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6028334Z
2025-12-04T00:38:48.6034001Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6049784Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6050786Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6051800Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6052393Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6052411Z
2025-12-04T00:38:48.6057292Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6058412Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6059075Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6060100Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6060906Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6060941Z
2025-12-04T00:38:48.6062139Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6063207Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6063886Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6064894Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6065516Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6065550Z
2025-12-04T00:38:48.6070758Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6081741Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6082417Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6083438Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6084085Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6084118Z
2025-12-04T00:38:48.6087625Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6088746Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6089423Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6090422Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6091286Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6091305Z
2025-12-04T00:38:48.6095619Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6097653Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6098275Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6099239Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6100243Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6100263Z
2025-12-04T00:38:48.6117027Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6118105Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6118795Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6119823Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6120734Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6120757Z
2025-12-04T00:38:48.6129850Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6132124Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6132780Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6133799Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6134440Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6134462Z
2025-12-04T00:38:48.6143536Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6145484Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6147457Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6148503Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6149165Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6149187Z
2025-12-04T00:38:48.6170029Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6181126Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6185492Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6186555Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6187256Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6187566Z
2025-12-04T00:38:48.6189049Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6190185Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6191070Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6192077Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6192757Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6192781Z
2025-12-04T00:38:48.6194009Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6195133Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6195777Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6196795Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6197493Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6197517Z
2025-12-04T00:38:48.6202526Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6203648Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6204333Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6205357Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6206029Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6206046Z
2025-12-04T00:38:48.6207245Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6211539Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6212251Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6213263Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6213905Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6213926Z
2025-12-04T00:38:48.6215199Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6216314Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6216983Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6217974Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6218639Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6218658Z
2025-12-04T00:38:48.6224915Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6226045Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6226961Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6228158Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6228799Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6228822Z
2025-12-04T00:38:48.6234569Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6240912Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6241628Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6242675Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6243362Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6243416Z
2025-12-04T00:38:48.6247784Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6250381Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6251266Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6255787Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6256505Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6256522Z
2025-12-04T00:38:48.6257735Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6258887Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6259599Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6260818Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6261455Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6261493Z
2025-12-04T00:38:48.6267303Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6269239Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6271583Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6272617Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6273278Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6273296Z
2025-12-04T00:38:48.6279214Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6282387Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6283058Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6284061Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6284697Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6284717Z
2025-12-04T00:38:48.6289260Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6291397Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6293303Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6294594Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6295163Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6295195Z
2025-12-04T00:38:48.6312163Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6313653Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6314979Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6316828Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6317524Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6317554Z
2025-12-04T00:38:48.6318770Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6319900Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6320815Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6321872Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6322563Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6322594Z
2025-12-04T00:38:48.6352414Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6353574Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6354248Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6355238Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6355897Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6355920Z
2025-12-04T00:38:48.6357171Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6358333Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6359033Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6360056Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6360935Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6360967Z
2025-12-04T00:38:48.6362158Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6363279Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6363952Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6365225Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6366058Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6366086Z
2025-12-04T00:38:48.6384723Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6385884Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6386580Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6387593Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6388245Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6388272Z
2025-12-04T00:38:48.6389503Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6412044Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6412803Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6413857Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6414573Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6414596Z
2025-12-04T00:38:48.6415817Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6416930Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6417613Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6418608Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6419247Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6419266Z
2025-12-04T00:38:48.6420881Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6422009Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6422653Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6423651Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6424348Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6424383Z
2025-12-04T00:38:48.6425633Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6426740Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6427410Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6428412Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6429066Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6429082Z
2025-12-04T00:38:48.6430292Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6432210Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6432919Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6433908Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6434577Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6434600Z
2025-12-04T00:38:48.6439744Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6441075Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6441766Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6442807Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6443467Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6443487Z
2025-12-04T00:38:48.6444700Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6445803Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6446493Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6447531Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6448230Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6448254Z
2025-12-04T00:38:48.6451657Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6452819Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6453476Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6454483Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6455102Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6455123Z
2025-12-04T00:38:48.6485771Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6487836Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6489332Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6491139Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6521194Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6523526Z
2025-12-04T00:38:48.6525195Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6529174Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6530998Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6534647Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6536272Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6538334Z
2025-12-04T00:38:48.6539619Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6541885Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6543252Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6544768Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6546093Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6546653Z
2025-12-04T00:38:48.6547844Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6549769Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6551335Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6552727Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6554041Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6554611Z
2025-12-04T00:38:48.6555794Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6557675Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6559077Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6560895Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6562272Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6562802Z
2025-12-04T00:38:48.6564019Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6565935Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6567332Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6568825Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6570135Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6570881Z
2025-12-04T00:38:48.6572167Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6574095Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6575480Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6577136Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6578470Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6579022Z
2025-12-04T00:38:48.6580267Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6582489Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6584399Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6586034Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6587442Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6588012Z
2025-12-04T00:38:48.6591915Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6593915Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6595362Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6598592Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6600005Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6600770Z
2025-12-04T00:38:48.6602006Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6603981Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6605426Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6607006Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6609605Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6610132Z
2025-12-04T00:38:48.6611538Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6613570Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6615021Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6616610Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6617966Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6618541Z
2025-12-04T00:38:48.6619795Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6621831Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6623162Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6624689Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6626052Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6626611Z
2025-12-04T00:38:48.6627838Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6629652Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6631175Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6634258Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6635543Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6636056Z
2025-12-04T00:38:48.6637582Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6639416Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6640957Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6642418Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6644969Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6645501Z
2025-12-04T00:38:48.6646703Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6648572Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6649921Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6651668Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6653065Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6653641Z
2025-12-04T00:38:48.6654854Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6658237Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6659714Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6661496Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6662932Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6663506Z
2025-12-04T00:38:48.6664765Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6666708Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6668145Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6676818Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6678294Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6678876Z
2025-12-04T00:38:48.6680122Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6682314Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6683767Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6685330Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6686753Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6687308Z
2025-12-04T00:38:48.6688546Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6690730Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6692205Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6701151Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6702584Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6703150Z
2025-12-04T00:38:48.6704370Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6706396Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6710285Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6712010Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6713373Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6713992Z
2025-12-04T00:38:48.6715265Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6717194Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6718573Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6720436Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6722258Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6723028Z
2025-12-04T00:38:48.6737218Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6744272Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6745788Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6747418Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6748795Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6749360Z
2025-12-04T00:38:48.6752722Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6755123Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6758274Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6760263Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6762121Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6764332Z
2025-12-04T00:38:48.6766188Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6768414Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6771735Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6773689Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6776836Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6777798Z
2025-12-04T00:38:48.6782865Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6786855Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6789363Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6791181Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6792550Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6793128Z
2025-12-04T00:38:48.6794358Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6796364Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6797776Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6799414Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6800997Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6801560Z
2025-12-04T00:38:48.6803095Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6805248Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6806906Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6808619Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6810087Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6811024Z
2025-12-04T00:38:48.6812382Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6816582Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6818038Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6819550Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6821159Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6821729Z
2025-12-04T00:38:48.6824920Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6826918Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6828283Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6829746Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6831245Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6831802Z
2025-12-04T00:38:48.6839185Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6841325Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6842787Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6844345Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6846225Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6846829Z
2025-12-04T00:38:48.6854425Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6863218Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6864657Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6866183Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6867556Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6868117Z
2025-12-04T00:38:48.6873489Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6879193Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6880836Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6882404Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6883716Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6884275Z
2025-12-04T00:38:48.6885491Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6887478Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6888923Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6890747Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6892128Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6892685Z
2025-12-04T00:38:48.6897506Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6912107Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6913574Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6915138Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6916519Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6917138Z
2025-12-04T00:38:48.6918382Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6920301Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6921837Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6923307Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6924615Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6925168Z
2025-12-04T00:38:48.6930699Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6933546Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6936440Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6939267Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6940677Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6941271Z
2025-12-04T00:38:48.6942509Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6944508Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6945950Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6947547Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6948959Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6949536Z
2025-12-04T00:38:48.6951001Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6952940Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6954248Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6955746Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6957171Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6957737Z
2025-12-04T00:38:48.6962842Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6980066Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6981704Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6983318Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6984680Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6985243Z
2025-12-04T00:38:48.6986423Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.6988375Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6989855Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6991662Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.6993069Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.6993638Z
2025-12-04T00:38:48.7015798Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7019952Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7023541Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7025197Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7026608Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7027750Z
2025-12-04T00:38:48.7030939Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7033028Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7034490Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7036076Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7037481Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7038060Z
2025-12-04T00:38:48.7039305Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7041477Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7043355Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7045148Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7046718Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7047488Z
2025-12-04T00:38:48.7048844Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7051261Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7053792Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7056250Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7057710Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7058278Z
2025-12-04T00:38:48.7059496Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7061616Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7063035Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7064638Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7066023Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7066606Z
2025-12-04T00:38:48.7073088Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7075125Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7076595Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7078198Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7079597Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7080162Z
2025-12-04T00:38:48.7092274Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7094294Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7096272Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7097887Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7099282Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7099856Z
2025-12-04T00:38:48.7105042Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7113875Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7115346Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7116936Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7118360Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7118953Z
2025-12-04T00:38:48.7124473Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7128670Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7130122Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7131948Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7133348Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7133933Z
2025-12-04T00:38:48.7135155Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7137188Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7138660Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7140265Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7141860Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7142447Z
2025-12-04T00:38:48.7161758Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7191975Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7193655Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7195045Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7196332Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7196959Z
2025-12-04T00:38:48.7198026Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7199828Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7201447Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7202970Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7204313Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7204939Z
2025-12-04T00:38:48.7206508Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7208463Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7209761Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7211470Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7212912Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7213579Z
2025-12-04T00:38:48.7214780Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7216687Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7218134Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7219627Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7221117Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7221712Z
2025-12-04T00:38:48.7236871Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7239175Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7241082Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7242955Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7244552Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7245355Z
2025-12-04T00:38:48.7246737Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7249018Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7251825Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7253419Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7254814Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7255395Z
2025-12-04T00:38:48.7256628Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7258640Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7260072Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7261840Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7263234Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7263804Z
2025-12-04T00:38:48.7282796Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7284997Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7287601Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7289520Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7291380Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7291950Z
2025-12-04T00:38:48.7293195Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7295141Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7296574Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7298162Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7299570Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7300144Z
2025-12-04T00:38:48.7326871Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7329158Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7331070Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7332988Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7334628Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7336281Z
2025-12-04T00:38:48.7362233Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7364706Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7366719Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7368498Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7370079Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7371133Z
2025-12-04T00:38:48.7372609Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7374885Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7376580Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7378327Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7379917Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7380962Z
2025-12-04T00:38:48.7403633Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7405954Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7407726Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7409526Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7411433Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7412293Z
2025-12-04T00:38:48.7413730Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7416609Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7418338Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7420071Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7421866Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7422621Z
2025-12-04T00:38:48.7423991Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7426190Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7427840Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7429653Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7431903Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7433477Z
2025-12-04T00:38:48.7434745Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7436696Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7437978Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7439536Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7441091Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7441640Z
2025-12-04T00:38:48.7442881Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7444897Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7446285Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7447806Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7449144Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7449685Z
2025-12-04T00:38:48.7451463Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7454171Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7455682Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7457282Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7458697Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7459272Z
2025-12-04T00:38:48.7462227Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7464187Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7465576Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7467108Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7468924Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7469507Z
2025-12-04T00:38:48.7470906Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7482002Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7497068Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7498755Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7500127Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7500887Z
2025-12-04T00:38:48.7502175Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7504178Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7505633Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7507150Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7522838Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7523453Z
2025-12-04T00:38:48.7524719Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7526595Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7527936Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7529424Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7530869Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7531390Z
2025-12-04T00:38:48.7532533Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7534343Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7571794Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7573293Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7574599Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7575164Z
2025-12-04T00:38:48.7576406Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7578276Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7579641Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7581320Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7582622Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7583143Z
2025-12-04T00:38:48.7584217Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7585959Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7587709Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7589165Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7590413Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7591118Z
2025-12-04T00:38:48.7592270Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7594086Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7595376Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7596809Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7598083Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7598602Z
2025-12-04T00:38:48.7599755Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7601715Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7602993Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7604401Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7605754Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7606282Z
2025-12-04T00:38:48.7607411Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7609198Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7610645Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7612089Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7613315Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7613840Z
2025-12-04T00:38:48.7614895Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7616573Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7617829Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7619226Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7620396Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7621046Z
2025-12-04T00:38:48.7622403Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7624236Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7625531Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7626950Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7628257Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7629096Z
2025-12-04T00:38:48.7631443Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7633491Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7634956Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7636501Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7642734Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7643313Z
2025-12-04T00:38:48.7644523Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7646386Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7647709Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7649159Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7650432Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7651138Z
2025-12-04T00:38:48.7652286Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7655385Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7656802Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7658290Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7659610Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7660158Z
2025-12-04T00:38:48.7661525Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7663388Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7664730Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7666202Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7667514Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7668069Z
2025-12-04T00:38:48.7669223Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7671168Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7672411Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7673784Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7675005Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7675518Z
2025-12-04T00:38:48.7676706Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7678499Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7679732Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7681762Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7682925Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7710972Z
2025-12-04T00:38:48.7713764Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7715827Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7717246Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7718777Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7720165Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7720970Z
2025-12-04T00:38:48.7722235Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7724216Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7725553Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7727120Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7728466Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7729017Z
2025-12-04T00:38:48.7730232Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mexibe erro gracioso quando supabase falha
2025-12-04T00:38:48.7732472Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7733970Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7735531Z Erro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gte is not a function
2025-12-04T00:38:48.7736912Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:104:10
2025-12-04T00:38:48.7737469Z
2025-12-04T00:38:48.7973467Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mpermite recarregar manualmente via reload
2025-12-04T00:38:48.7975388Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1\*\*.supabase.from(...).select(...).order is not a function
2025-12-04T00:38:48.7976550Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:63:10
2025-12-04T00:38:48.7977213Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:177:7
2025-12-04T00:38:48.7978226Z at commitHookEffectListMount [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:23189:26[90m)[39m
2025-12-04T00:38:48.7979379Z at commitPassiveMountOnFiber [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24970:11[90m)[39m
2025-12-04T00:38:48.7980762Z at commitPassiveMountEffects_complete [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24930:9[90m)[39m
2025-12-04T00:38:48.7981972Z at commitPassiveMountEffects_begin [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24917:7[90m)[39m
2025-12-04T00:38:48.7983107Z at commitPassiveMountEffects [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:24905:3[90m)[39m
2025-12-04T00:38:48.7984529Z at flushPassiveEffectsImpl [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:27078:3[90m)[39m
2025-12-04T00:38:48.7985768Z at flushPassiveEffects [90m(/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:27023:14[90m)[39m
2025-12-04T00:38:48.7986702Z at [90m/home/runner/work/norma/norma/[39mnode_modules/[4mreact-dom[24m/cjs/react-dom.development.js:26808:9
2025-12-04T00:38:48.7987100Z
2025-12-04T00:38:48.8489782Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mpermite recarregar manualmente via reload
2025-12-04T00:38:48.8525918Z [22m[39mWarning: An update to TestComponent inside a test was not wrapped in act(...).
2025-12-04T00:38:48.8526514Z
2025-12-04T00:38:48.8527110Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:48.8527689Z
2025-12-04T00:38:48.8527830Z act(() => {
2025-12-04T00:38:48.8528236Z /* fire events that update state _/
2025-12-04T00:38:48.8528712Z });
2025-12-04T00:38:48.8529061Z /_ assert on the output _/
2025-12-04T00:38:48.8529330Z
2025-12-04T00:38:48.8530299Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:48.8532028Z at TestComponent (/home/runner/work/norma/norma/node_modules/@testing-library/react/dist/pure.js:329:5)
2025-12-04T00:38:48.8532768Z
2025-12-04T00:38:48.8534009Z [90mstderr[2m | src/hooks/useDashboardStats.test.tsx[2m > [22m[2museDashboardStats[2m > [22m[2mpermite recarregar manualmente via reload
2025-12-04T00:38:48.8535999Z [22m[39mErro ao carregar estatísticas: TypeError: **vite_ssr_import_1**.supabase.from(...).select(...).gt is not a function
2025-12-04T00:38:48.8537620Z at Object.reload [90m(/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.ts:115:10[90m)[39m
2025-12-04T00:38:48.8539264Z at [90m/home/runner/work/norma/norma/[39msrc/hooks/useDashboardStats.test.tsx:125:5
2025-12-04T00:38:48.8541091Z at [90mfile:///home/runner/work/norma/norma/[39mnode_modules/[4m@vitest/runner[24m/dist/index.js:919:20
2025-12-04T00:38:48.8556823Z Warning: An update to TestComponent inside a test was not wrapped in act(...).
2025-12-04T00:38:48.8557426Z
2025-12-04T00:38:48.8558032Z When testing, code that causes React state updates should be wrapped into act(...):
2025-12-04T00:38:48.8558609Z
2025-12-04T00:38:48.8558764Z act(() => {
2025-12-04T00:38:48.8559158Z /_ fire events that update state _/
2025-12-04T00:38:48.8559585Z });
2025-12-04T00:38:48.8559933Z /_ assert on the output \*/
2025-12-04T00:38:48.8560191Z
2025-12-04T00:38:48.8561394Z This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
2025-12-04T00:38:48.8562949Z at TestComponent (/home/runner/work/norma/norma/node_modules/@testing-library/react/dist/pure.js:329:5)
2025-12-04T00:38:48.8563666Z
2025-12-04T00:38:48.8888246Z [31m❯[39m src/hooks/useDashboardStats.test.tsx [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 1171[2mms[22m[39m
2025-12-04T00:38:48.8895349Z [32m✓[39m carrega estatísticas com sucesso[32m 82[2mms[22m[39m
2025-12-04T00:38:48.8896330Z [32m✓[39m não carrega sem condominio_id[32m 4[2mms[22m[39m
2025-12-04T00:38:48.8897527Z [31m [31m×[31m exibe erro gracioso quando supabase falha[39m[33m 1025[2mms[22m[39m
2025-12-04T00:38:48.8898665Z [32m✓[39m permite recarregar manualmente via reload[32m 57[2mms[22m[39m
2025-12-04T00:38:49.9053163Z [32m✓[39m src/components/EmptyState.test.tsx [2m([22m[2m10 tests[22m[2m)[22m[33m 565[2mms[22m[39m
2025-12-04T00:38:50.2922611Z [32m✓[39m src/hooks/queries/assembleias.test.tsx [2m([22m[2m6 tests[22m[2m | [22m[33m4 skipped[39m[2m)[22m[32m 43[2mms[22m[39m
2025-12-04T00:38:51.0763062Z [31m❯[39m src/hooks/useVotacoes.test.tsx [2m([22m[2m5 tests[22m[2m | [22m[31m5 failed[39m[2m)[22m[33m 5054[2mms[22m[39m
2025-12-04T00:38:51.0765288Z [31m [31m×[31m carrega votações e enriquece com resultados e voto do usuário[39m[33m 1040[2mms[22m[39m
2025-12-04T00:38:51.0766860Z [31m [31m×[31m filtra por status ativa/encerrada corretamente[39m[33m 1003[2mms[22m[39m
2025-12-04T00:38:51.0768193Z [31m [31m×[31m trata erro ao carregar votações[39m[33m 1003[2mms[22m[39m
2025-12-04T00:38:51.0769512Z [31m [31m×[31m impede voto duplo e voto em votação encerrada[39m[33m 1002[2mms[22m[39m
2025-12-04T00:38:51.0770994Z [31m [31m×[31m registra voto e recarrega dados[39m[33m 1003[2mms[22m[39m
2025-12-04T00:38:51.6881175Z [90mstdout[2m | src/pages/Login.test.tsx
2025-12-04T00:38:51.6886345Z [22m[39m[DEBUG] Supabase inicializado com sucesso { url: [32m'https://test.supabas...'[39m, hasKey: [33mtrue[39m }
2025-12-04T00:38:51.6891094Z
2025-12-04T00:38:51.8539285Z [32m✓[39m src/components/ui/Modal.test.tsx [2m([22m[2m9 tests[22m[2m)[22m[33m 529[2mms[22m[39m
2025-12-04T00:38:52.0218777Z [90mstderr[2m | src/pages/Login.test.tsx[2m > [22m[2mLogin[2m > [22m[2mrenderiza formulário de login
2025-12-04T00:38:52.0221932Z [22m[39m⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
2025-12-04T00:38:52.0225643Z ⚠️ React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
2025-12-04T00:38:52.0227201Z
2025-12-04T00:38:52.4922752Z [90mstdout[2m | src/components/PageLayout.test.tsx
2025-12-04T00:38:52.4928010Z [22m[39m[DEBUG] Supabase inicializado com sucesso { url: [32m'https://test.supabas...'[39m, hasKey: [33mtrue[39m }
2025-12-04T00:38:52.4932657Z
2025-12-04T00:38:52.6349966Z [90mstderr[2m | src/components/PageLayout.test.tsx[2m > [22m[2mPageLayout[2m > [22m[2mrenderiza título corretamente
2025-12-04T00:38:52.6353364Z [22m[39m⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
2025-12-04T00:38:52.6357066Z ⚠️ React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
2025-12-04T00:38:52.6358563Z
2025-12-04T00:38:52.7781299Z [90mstderr[2m | src/pages/Login.test.tsx[2m > [22m[2mLogin[2m > [22m[2mexibe erro de credenciais inválidas
2025-12-04T00:38:52.7794577Z [22m[39m❌ [ERROR] Erro no login {
2025-12-04T00:38:52.7795326Z error: [32m'Invalid login credentials'[39m,
2025-12-04T00:38:52.7796044Z stack: [32m'Error: Invalid login credentials\n'[39m +
2025-12-04T00:38:52.7797070Z [32m' at /home/runner/work/norma/norma/src/pages/Login.test.tsx:94:34\n'[39m +
2025-12-04T00:38:52.7798464Z [32m' at file:///home/runner/work/norma/norma/node_modules/@vitest/runner/dist/index.js:145:11\n'[39m +
2025-12-04T00:38:52.7799996Z [32m' at file:///home/runner/work/norma/norma/node_modules/@vitest/runner/dist/index.js:919:26\n'[39m +
2025-12-04T00:38:52.7801701Z [32m' at file:///home/runner/work/norma/norma/node_modules/@vitest/runner/dist/index.js:1244:20\n'[39m +
2025-12-04T00:38:52.7802782Z [32m' at new Promise (<anonymous>)\n'[39m +
2025-12-04T00:38:52.7804097Z [32m' at runWithTimeout (file:///home/runner/work/norma/norma/node_modules/@vitest/runner/dist/index.js:1210:10)\n'[39m +
2025-12-04T00:38:52.7806109Z [32m' at file:///home/runner/work/norma/norma/node_modules/@vitest/runner/dist/index.js:1654:37\n'[39m +
2025-12-04T00:38:52.7807988Z [32m' at Traces.$ (file:///home/runner/work/norma/norma/node_modules/vitest/dist/chunks/traces.U4xDYhzZ.js:115:27)\n'[39m +
2025-12-04T00:38:52.7809817Z [32m' at trace (file:///home/runner/work/norma/norma/node_modules/vitest/dist/chunks/test.DqQZzsWf.js:234:21)\n'[39m +
2025-12-04T00:38:52.7811700Z [32m' at runTest (file:///home/runner/work/norma/norma/node_modules/@vitest/runner/dist/index.js:1654:12)'[39m,
2025-12-04T00:38:52.7812711Z email: [32m'wrong@test.com'[39m
2025-12-04T00:38:52.7813133Z }
2025-12-04T00:38:52.7813290Z
2025-12-04T00:38:52.8822561Z [32m✓[39m src/pages/Login.test.tsx [2m([22m[2m8 tests[22m[2m)[22m[33m 1104[2mms[22m[39m
2025-12-04T00:38:52.8824023Z [33m[2m✓[22m[39m renderiza formulário de login [33m 326[2mms[22m[39m
2025-12-04T00:38:52.8825374Z [33m[2m✓[22m[39m submete formulário com credenciais válidas [33m 324[2mms[22m[39m
2025-12-04T00:38:53.3354702Z [90mstderr[2m | src/pages/PendingApproval.test.tsx[2m > [22m[2mPendingApproval[2m > [22m[2mrenderiza título e mensagem principal
2025-12-04T00:38:53.3359297Z [22m[39m⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
2025-12-04T00:38:53.3364229Z ⚠️ React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
2025-12-04T00:38:53.3367658Z
2025-12-04T00:38:53.3624812Z [32m✓[39m src/components/PageLayout.test.tsx [2m([22m[2m10 tests[22m[2m)[22m[33m 801[2mms[22m[39m
2025-12-04T00:38:53.7349764Z [32m✓[39m src/pages/PendingApproval.test.tsx [2m([22m[2m10 tests[22m[2m)[22m[33m 395[2mms[22m[39m
2025-12-04T00:38:54.2381686Z [90mstdout[2m | src/hooks/useChatbot.test.tsx[2m > [22m[2museChatbot[2m > [22m[2menvia mensagem válida e adiciona resposta sanitizada
2025-12-04T00:38:54.2382882Z [22m[39m[DEBUG] Enviando para ask-ai {
2025-12-04T00:38:54.2383565Z query: [32m'Qual é o horário da piscina?'[39m,
2025-12-04T00:38:54.2384182Z userName: [32m'Teste'[39m,
2025-12-04T00:38:54.2384775Z filter_condominio_id: [32m'condo-123'[39m
2025-12-04T00:38:54.2385242Z }
2025-12-04T00:38:54.2385411Z
2025-12-04T00:38:54.2528561Z [90mstdout[2m | src/hooks/useChatbot.test.tsx[2m > [22m[2museChatbot[2m > [22m[2menvia mensagem válida e adiciona resposta sanitizada
2025-12-04T00:38:54.2529890Z [22m[39m[DEBUG] Resposta ask-ai {
2025-12-04T00:38:54.2531066Z data: { answer: [32m'Resposta simulada segura <script>alert(1)</script>'[39m },
2025-12-04T00:38:54.2531871Z error: [1mnull[22m
2025-12-04T00:38:54.2532252Z }
2025-12-04T00:38:54.2532426Z
2025-12-04T00:38:54.2954946Z [32m✓[39m src/hooks/useChatbot.test.tsx [2m([22m[2m4 tests[22m[2m)[22m[32m 61[2mms[22m[39m
2025-12-04T00:38:54.6685329Z [90mstderr[2m | src/components/Chatbot.test.tsx[2m > [22m[2mChatbot[2m > [22m[2mnão renderiza quando isOpen é false
2025-12-04T00:38:54.6688624Z [22m[39m⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
2025-12-04T00:38:54.6692759Z ⚠️ React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
2025-12-04T00:38:54.6694297Z
2025-12-04T00:38:54.9389686Z [90mstderr[2m | src/components/Chatbot.test.tsx[2m > [22m[2mChatbot[2m > [22m[2mrenderiza quando isOpen é true
2025-12-04T00:38:54.9391703Z [22m[39mWarning: Each child in a list should have a unique "key" prop.
2025-12-04T00:38:54.9392312Z
2025-12-04T00:38:54.9393162Z Check the render method of `MessagesList`. See https://reactjs.org/link/warning-keys for more information.
2025-12-04T00:38:54.9394045Z at div
2025-12-04T00:38:54.9394900Z at MessagesList (/home/runner/work/norma/norma/src/components/chatbot/MessagesList.tsx:7:3)
2025-12-04T00:38:54.9395781Z at div
2025-12-04T00:38:54.9396499Z at Chatbot (/home/runner/work/norma/norma/src/components/Chatbot.tsx:16:20)
2025-12-04T00:38:54.9397781Z at Router (/home/runner/work/norma/norma/node_modules/react-router/dist/umd/react-router.development.js:1207:17)
2025-12-04T00:38:54.9399388Z at BrowserRouter (/home/runner/work/norma/norma/node_modules/react-router-dom/dist/umd/react-router-dom.development.js:695:7)
2025-12-04T00:38:54.9401373Z
2025-12-04T00:38:55.3397407Z [32m✓[39m src/components/Chatbot.test.tsx [2m([22m[2m8 tests[22m[2m)[22m[33m 657[2mms[22m[39m
2025-12-04T00:38:55.5573458Z [2m[90m↓[39m[22m src/hooks/useComunicados.test.tsx [2m([22m[2m3 tests[22m[2m | [22m[33m3 skipped[39m[2m)[22m
2025-12-04T00:38:55.6778911Z [32m✓[39m src/components/dashboard/StatCard.test.tsx [2m([22m[2m7 tests[22m[2m)[22m[33m 424[2mms[22m[39m
2025-12-04T00:38:56.7845268Z [32m✓[39m src/lib/sanitize.test.ts [2m([22m[2m8 tests[22m[2m)[22m[32m 39[2mms[22m[39m
2025-12-04T00:38:57.0172986Z [32m✓[39m src/components/LoadingSpinner.test.tsx [2m([22m[2m6 tests[22m[2m)[22m[32m 89[2mms[22m[39m
2025-12-04T00:38:57.8569195Z [90mstdout[2m | src/lib/logger.test.ts[2m > [22m[2mLogger[2m > [22m[2mshould not throw when calling methods
2025-12-04T00:38:57.8572332Z [22m[39m[DEBUG] Debug message { key: [32m'value'[39m }
2025-12-04T00:38:57.8573099Z ✅ [INFO] Info message
2025-12-04T00:38:57.8573689Z ⚡ [PERF] Test operation: 1250.00ms
2025-12-04T00:38:57.8574056Z
2025-12-04T00:38:57.8575066Z [90mstderr[2m | src/lib/logger.test.ts[2m > [22m[2mLogger[2m > [22m[2mshould not throw when calling methods
2025-12-04T00:38:57.8576115Z [22m[39m⚠️ [WARN] Warning message
2025-12-04T00:38:57.8576700Z ❌ [ERROR] Error message {
2025-12-04T00:38:57.8577248Z error: [32m'Test error'[39m,
2025-12-04T00:38:57.8577863Z stack: [32m'Error: Test error\n'[39m +
2025-12-04T00:38:57.8578808Z [32m' at /home/runner/work/norma/norma/src/lib/logger.test.ts:35:37\n'[39m +
2025-12-04T00:38:57.8580419Z [32m' at Proxy.assertThrows (file:///home/runner/work/norma/norma/node_modules/vitest/node_modules/chai/index.js:2798:5)\n'[39m +
2025-12-04T00:38:57.8582585Z [32m' at Proxy.methodWrapper (file:///home/runner/work/norma/norma/node_modules/vitest/node_modules/chai/index.js:1700:25)\n'[39m +
2025-12-04T00:38:57.8584693Z [32m' at Proxy.<anonymous> (file:///home/runner/work/norma/norma/node_modules/vitest/node_modules/@vitest/expect/dist/index.js:1149:12)\n'[39m +
2025-12-04T00:38:57.8586928Z [32m' at Proxy.overwritingMethodWrapper (file:///home/runner/work/norma/norma/node_modules/vitest/node_modules/chai/index.js:1750:33)\n'[39m +
2025-12-04T00:38:57.8589102Z [32m' at Proxy.<anonymous> (file:///home/runner/work/norma/norma/node_modules/vitest/node_modules/@vitest/expect/dist/index.js:1485:16)\n'[39m +
2025-12-04T00:38:57.8591454Z [32m' at Proxy.<anonymous> (file:///home/runner/work/norma/norma/node_modules/vitest/node_modules/@vitest/expect/dist/index.js:1090:14)\n'[39m +
2025-12-04T00:38:57.8593474Z [32m' at Proxy.methodWrapper (file:///home/runner/work/norma/norma/node_modules/vitest/node_modules/chai/index.js:1700:25)\n'[39m +
2025-12-04T00:38:57.8595017Z [32m' at /home/runner/work/norma/norma/src/lib/logger.test.ts:37:12\n'[39m +
2025-12-04T00:38:57.8596343Z [32m' at file:///home/runner/work/norma/norma/node_modules/@vitest/runner/dist/index.js:145:11'[39m
2025-12-04T00:38:57.8597636Z }
2025-12-04T00:38:57.8598080Z
2025-12-04T00:38:57.8871939Z [32m✓[39m src/lib/logger.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 16[2mms[22m[39m
2025-12-04T00:38:58.1051147Z [32m✓[39m src/hooks/useAuth.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 4[2mms[22m[39m
2025-12-04T00:38:58.3855018Z [32m✓[39m src/components/ui/Tooltip.test.tsx [2m([22m[2m6 tests[22m[2m)[22m[33m 1578[2mms[22m[39m
2025-12-04T00:38:58.3856130Z [33m[2m✓[22m[39m exibe tooltip ao fazer hover [33m 513[2mms[22m[39m
2025-12-04T00:38:58.3856762Z [33m[2m✓[22m[39m esconde tooltip ao sair do hover [33m 415[2mms[22m[39m
2025-12-04T00:38:58.3857424Z [33m[2m✓[22m[39m renderiza conteúdo ReactNode complexo [33m 306[2mms[22m[39m
2025-12-04T00:38:59.3892032Z Failed to parse file:///home/runner/work/norma/norma/src/pages/admin/UserManagement.tsx. Excluding it from coverage.
2025-12-04T00:38:59.3893159Z Error [RollupError]: Expression expected
2025-12-04T00:38:59.3894299Z at getRollupError (file:///home/runner/work/norma/norma/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
2025-12-04T00:38:59.3895776Z at convertProgram (file:///home/runner/work/norma/norma/node_modules/rollup/dist/es/shared/parseAst.js:1098:26)
2025-12-04T00:38:59.3897210Z at parseAstAsync (file:///home/runner/work/norma/norma/node_modules/rollup/dist/es/shared/parseAst.js:2084:106)
2025-12-04T00:38:59.3898824Z at V8CoverageProvider.remapCoverage (file:///home/runner/work/norma/norma/node_modules/@vitest/coverage-v8/dist/provider.js:135:10)
2025-12-04T00:38:59.3900281Z at file:///home/runner/work/norma/norma/node_modules/@vitest/coverage-v8/dist/provider.js:121:23
2025-12-04T00:38:59.3901326Z at async Promise.all (index 0)
2025-12-04T00:38:59.3902664Z at V8CoverageProvider.getCoverageMapForUncoveredFiles (file:///home/runner/work/norma/norma/node_modules/@vitest/coverage-v8/dist/provider.js:111:4)
2025-12-04T00:38:59.3904580Z at V8CoverageProvider.generateCoverage (file:///home/runner/work/norma/norma/node_modules/@vitest/coverage-v8/dist/provider.js:59:29)
2025-12-04T00:38:59.3906095Z at file:///home/runner/work/norma/norma/node_modules/vitest/dist/chunks/cli-api.CbjxIXjQ.js:12234:23
2025-12-04T00:38:59.3907374Z at file:///home/runner/work/norma/norma/node_modules/vitest/dist/chunks/cli-api.CbjxIXjQ.js:12247:11 {
2025-12-04T00:38:59.3908189Z code: 'PARSE_ERROR',
2025-12-04T00:38:59.3908531Z pos: 416
2025-12-04T00:38:59.3908810Z }
2025-12-04T00:38:59.4292778Z
2025-12-04T00:38:59.4293688Z [31m⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 17 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m
2025-12-04T00:38:59.4293979Z
2025-12-04T00:38:59.4297788Z [41m[1m FAIL [22m[49m src/hooks/useDashboardStats.test.tsx[2m > [22museDashboardStats[2m > [22mexibe erro gracioso quando supabase falha
2025-12-04T00:38:59.4305277Z [31m[1mAssertionError[22m: expected true to be false // Object.is equality
2025-12-04T00:38:59.4305955Z
2025-12-04T00:38:59.4306256Z Ignored nodes: comments, script, style
2025-12-04T00:38:59.4306863Z [36m<html>[31m
2025-12-04T00:38:59.4307274Z [36m<head />[31m
2025-12-04T00:38:59.4307714Z [36m<body>[31m
2025-12-04T00:38:59.4308106Z [36m<div />[31m
2025-12-04T00:38:59.4308497Z [36m</body>[31m
2025-12-04T00:38:59.4308912Z [36m</html>[31m[39m
2025-12-04T00:38:59.4309149Z
2025-12-04T00:38:59.4309358Z [32m- Expected[39m
2025-12-04T00:38:59.4309795Z [31m+ Received[39m
2025-12-04T00:38:59.4310015Z
2025-12-04T00:38:59.4310221Z [32m- false[39m
2025-12-04T00:38:59.4310846Z [31m+ true[39m
2025-12-04T00:38:59.4311058Z
2025-12-04T00:38:59.4311696Z [36m [2m❯[22m src/hooks/useDashboardStats.test.tsx:[2m101:56[22m[39m
2025-12-04T00:38:59.4348063Z [90m 99| [39m
2025-12-04T00:38:59.4349075Z [90m100| [39m [35mconst[39m { result } [33m=[39m [34mrenderHook[39m(() [33m=>[39m [34museDashboardStats[39m())
2025-12-04T00:38:59.4351187Z [90m101| [39m [35mawait[39m [34mwaitFor[39m(() [33m=>[39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39mloading)[33m.[39m[34mtoBe[39m([35mfalse[39m))
2025-12-04T00:38:59.4352615Z [90m | [39m [31m^[39m
2025-12-04T00:38:59.4353416Z [90m102| [39m [90m// em caso de erro, mantém valores iniciais[39m
2025-12-04T00:38:59.4354520Z [90m103| [39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39mstats)[33m.[39m[34mtoBeDefined[39m()
2025-12-04T00:38:59.4356177Z [90m [2m❯[22m runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:[2m47:12[22m[39m
2025-12-04T00:38:59.4357394Z [90m [2m❯[22m checkCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m124:77[22m[39m
2025-12-04T00:38:59.4358308Z [90m [2m❯[22m Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m118:16[22m[39m
2025-12-04T00:38:59.4358730Z
2025-12-04T00:38:59.4358955Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/17]⎯[22m[39m
2025-12-04T00:38:59.4359154Z
2025-12-04T00:38:59.4359827Z [41m[1m FAIL [22m[49m src/hooks/useVotacoes.test.tsx[2m > [22museVotacoes[2m > [22mcarrega votações e enriquece com resultados e voto do usuário
2025-12-04T00:38:59.4360882Z [31m[1mAssertionError[22m: expected true to be false // Object.is equality
2025-12-04T00:38:59.4361184Z
2025-12-04T00:38:59.4361332Z Ignored nodes: comments, script, style
2025-12-04T00:38:59.4361618Z [36m<html>[31m
2025-12-04T00:38:59.4361828Z [36m<head />[31m
2025-12-04T00:38:59.4362032Z [36m<body>[31m
2025-12-04T00:38:59.4362239Z [36m<div />[31m
2025-12-04T00:38:59.4362448Z [36m</body>[31m
2025-12-04T00:38:59.4362666Z [36m</html>[31m[39m
2025-12-04T00:38:59.4362782Z
2025-12-04T00:38:59.4362890Z [32m- Expected[39m
2025-12-04T00:38:59.4363111Z [31m+ Received[39m
2025-12-04T00:38:59.4363226Z
2025-12-04T00:38:59.4363329Z [32m- false[39m
2025-12-04T00:38:59.4363527Z [31m+ true[39m
2025-12-04T00:38:59.4363631Z
2025-12-04T00:38:59.4363925Z [36m [2m❯[22m src/hooks/useVotacoes.test.tsx:[2m97:56[22m[39m
2025-12-04T00:38:59.4386804Z [90m 95| [39m it('carrega votações e enriquece com resultados e voto do usuário', …
2025-12-04T00:38:59.4388089Z [90m 96| [39m [35mconst[39m { result } [33m=[39m [34mrenderHook[39m(() [33m=>[39m [34museVotacoes[39m([32m'all'[39m))
2025-12-04T00:38:59.4389722Z [90m 97| [39m [35mawait[39m [34mwaitFor[39m(() [33m=>[39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39mloading)[33m.[39m[34mtoBe[39m([35mfalse[39m))
2025-12-04T00:38:59.4391142Z [90m | [39m [31m^[39m
2025-12-04T00:38:59.4392319Z [90m 98| [39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39mvotacoes[33m.[39mlength)[33m.[39m[34mtoBe[39m([34m2[39m)
2025-12-04T00:38:59.4393678Z [90m 99| [39m [35mconst[39m [ativa[33m,[39m encerrada] [33m=[39m result[33m.[39mcurrent[33m.[39mvotacoes
2025-12-04T00:38:59.4395324Z [90m [2m❯[22m runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:[2m47:12[22m[39m
2025-12-04T00:38:59.4396890Z [90m [2m❯[22m checkCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m124:77[22m[39m
2025-12-04T00:38:59.4398438Z [90m [2m❯[22m Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m118:16[22m[39m
2025-12-04T00:38:59.4399162Z
2025-12-04T00:38:59.4399532Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/17]⎯[22m[39m
2025-12-04T00:38:59.4399843Z
2025-12-04T00:38:59.4401026Z [41m[1m FAIL [22m[49m src/hooks/useVotacoes.test.tsx[2m > [22museVotacoes[2m > [22mfiltra por status ativa/encerrada corretamente
2025-12-04T00:38:59.4402401Z [31m[1mAssertionError[22m: expected true to be false // Object.is equality
2025-12-04T00:38:59.4402887Z
2025-12-04T00:38:59.4403131Z Ignored nodes: comments, script, style
2025-12-04T00:38:59.4403583Z [36m<html>[31m
2025-12-04T00:38:59.4403932Z [36m<head />[31m
2025-12-04T00:38:59.4404528Z [36m<body>[31m
2025-12-04T00:38:59.4405049Z [36m<div />[31m
2025-12-04T00:38:59.4405419Z [36m</body>[31m
2025-12-04T00:38:59.4405802Z [36m</html>[31m[39m
2025-12-04T00:38:59.4406009Z
2025-12-04T00:38:59.4406204Z [32m- Expected[39m
2025-12-04T00:38:59.4406589Z [31m+ Received[39m
2025-12-04T00:38:59.4406781Z
2025-12-04T00:38:59.4406961Z [32m- false[39m
2025-12-04T00:38:59.4407290Z [31m+ true[39m
2025-12-04T00:38:59.4407471Z
2025-12-04T00:38:59.4407955Z [36m [2m❯[22m src/hooks/useVotacoes.test.tsx:[2m109:52[22m[39m
2025-12-04T00:38:59.4409218Z [90m107| [39m [34mit[39m([32m'filtra por status ativa/encerrada corretamente'[39m[33m,[39m [35masync[39m () [33m=>[39m {
2025-12-04T00:38:59.4418644Z [90m108| [39m [35mconst[39m { result[33m:[39m r1 } [33m=[39m [34mrenderHook[39m(() [33m=>[39m [34museVotacoes[39m([32m'ativa'[39m))
2025-12-04T00:38:59.4420199Z [90m109| [39m [35mawait[39m [34mwaitFor[39m(() [33m=>[39m [34mexpect[39m(r1[33m.[39mcurrent[33m.[39mloading)[33m.[39m[34mtoBe[39m([35mfalse[39m))
2025-12-04T00:38:59.4421133Z [90m | [39m [31m^[39m
2025-12-04T00:38:59.4421822Z [90m110| [39m [34mexpect[39m(r1[33m.[39mcurrent[33m.[39mvotacoes[33m.[39mlength)[33m.[39m[34mtoBeGreaterThan[39m([34m0[39m)
2025-12-04T00:38:59.4422535Z [90m111| [39m expect(r1.current.votacoes.some(v => v.status === 'ativa')).toBe(t…
2025-12-04T00:38:59.4423420Z [90m [2m❯[22m runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:[2m47:12[22m[39m
2025-12-04T00:38:59.4424296Z [90m [2m❯[22m checkCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m124:77[22m[39m
2025-12-04T00:38:59.4425136Z [90m [2m❯[22m Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m118:16[22m[39m
2025-12-04T00:38:59.4425534Z
2025-12-04T00:38:59.4425754Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/17]⎯[22m[39m
2025-12-04T00:38:59.4425950Z
2025-12-04T00:38:59.4426455Z [41m[1m FAIL [22m[49m src/hooks/useVotacoes.test.tsx[2m > [22museVotacoes[2m > [22mtrata erro ao carregar votações
2025-12-04T00:38:59.4427721Z [31m[1mAssertionError[22m: expected true to be false // Object.is equality
2025-12-04T00:38:59.4428250Z
2025-12-04T00:38:59.4428515Z Ignored nodes: comments, script, style
2025-12-04T00:38:59.4429023Z [36m<html>[31m
2025-12-04T00:38:59.4429398Z [36m<head />[31m
2025-12-04T00:38:59.4429766Z [36m<body>[31m
2025-12-04T00:38:59.4430137Z [36m<div />[31m
2025-12-04T00:38:59.4430704Z [36m</body>[31m
2025-12-04T00:38:59.4431103Z [36m</html>[31m[39m
2025-12-04T00:38:59.4431309Z
2025-12-04T00:38:59.4431505Z [32m- Expected[39m
2025-12-04T00:38:59.4431899Z [31m+ Received[39m
2025-12-04T00:38:59.4432097Z
2025-12-04T00:38:59.4432288Z [32m- false[39m
2025-12-04T00:38:59.4432634Z [31m+ true[39m
2025-12-04T00:38:59.4432820Z
2025-12-04T00:38:59.4433349Z [36m [2m❯[22m src/hooks/useVotacoes.test.tsx:[2m122:56[22m[39m
2025-12-04T00:38:59.4434409Z [90m120| [39m supabaseFrom.mockImplementationOnce(() => ({ select: () => ({ eq: …
2025-12-04T00:38:59.4435794Z [90m121| [39m [35mconst[39m { result } [33m=[39m [34mrenderHook[39m(() [33m=>[39m [34museVotacoes[39m([32m'all'[39m))
2025-12-04T00:38:59.4437532Z [90m122| [39m [35mawait[39m [34mwaitFor[39m(() [33m=>[39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39mloading)[33m.[39m[34mtoBe[39m([35mfalse[39m))
2025-12-04T00:38:59.4438787Z [90m | [39m [31m^[39m
2025-12-04T00:38:59.4439866Z [90m123| [39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39merror)[33m.[39m[34mtoBeDefined[39m()
2025-12-04T00:38:59.4440856Z [90m124| [39m })
2025-12-04T00:38:59.4442148Z [90m [2m❯[22m runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:[2m47:12[22m[39m
2025-12-04T00:38:59.4444160Z [90m [2m❯[22m checkCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m124:77[22m[39m
2025-12-04T00:38:59.4445828Z [90m [2m❯[22m Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m118:16[22m[39m
2025-12-04T00:38:59.4446597Z
2025-12-04T00:38:59.4447043Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/17]⎯[22m[39m
2025-12-04T00:38:59.4447371Z
2025-12-04T00:38:59.4448444Z [41m[1m FAIL [22m[49m src/hooks/useVotacoes.test.tsx[2m > [22museVotacoes[2m > [22mimpede voto duplo e voto em votação encerrada
2025-12-04T00:38:59.4449821Z [31m[1mAssertionError[22m: expected true to be false // Object.is equality
2025-12-04T00:38:59.4450334Z
2025-12-04T00:38:59.4450767Z Ignored nodes: comments, script, style
2025-12-04T00:38:59.4451298Z [36m<html>[31m
2025-12-04T00:38:59.4451701Z [36m<head />[31m
2025-12-04T00:38:59.4452107Z [36m<body>[31m
2025-12-04T00:38:59.4452485Z [36m<div />[31m
2025-12-04T00:38:59.4452856Z [36m</body>[31m
2025-12-04T00:38:59.4453288Z [36m</html>[31m[39m
2025-12-04T00:38:59.4453505Z
2025-12-04T00:38:59.4453727Z [32m- Expected[39m
2025-12-04T00:38:59.4454149Z [31m+ Received[39m
2025-12-04T00:38:59.4454346Z
2025-12-04T00:38:59.4454535Z [32m- false[39m
2025-12-04T00:38:59.4454886Z [31m+ true[39m
2025-12-04T00:38:59.4455073Z
2025-12-04T00:38:59.4455601Z [36m [2m❯[22m src/hooks/useVotacoes.test.tsx:[2m128:56[22m[39m
2025-12-04T00:38:59.4456893Z [90m126| [39m [34mit[39m([32m'impede voto duplo e voto em votação encerrada'[39m[33m,[39m [35masync[39m () [33m=>[39m {
2025-12-04T00:38:59.4458434Z [90m127| [39m [35mconst[39m { result } [33m=[39m [34mrenderHook[39m(() [33m=>[39m [34museVotacoes[39m([32m'all'[39m))
2025-12-04T00:38:59.4460316Z [90m128| [39m [35mawait[39m [34mwaitFor[39m(() [33m=>[39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39mloading)[33m.[39m[34mtoBe[39m([35mfalse[39m))
2025-12-04T00:38:59.4461753Z [90m | [39m [31m^[39m
2025-12-04T00:38:59.4462305Z [90m129| [39m
2025-12-04T00:38:59.4462854Z [90m130| [39m [90m// já votado na ativa[39m
2025-12-04T00:38:59.4464299Z [90m [2m❯[22m runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:[2m47:12[22m[39m
2025-12-04T00:38:59.4465932Z [90m [2m❯[22m checkCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m124:77[22m[39m
2025-12-04T00:38:59.4467526Z [90m [2m❯[22m Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m118:16[22m[39m
2025-12-04T00:38:59.4468105Z
2025-12-04T00:38:59.4468349Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/17]⎯[22m[39m
2025-12-04T00:38:59.4468533Z
2025-12-04T00:38:59.4469030Z [41m[1m FAIL [22m[49m src/hooks/useVotacoes.test.tsx[2m > [22museVotacoes[2m > [22mregistra voto e recarrega dados
2025-12-04T00:38:59.4469738Z [31m[1mAssertionError[22m: expected true to be false // Object.is equality
2025-12-04T00:38:59.4470048Z
2025-12-04T00:38:59.4470200Z Ignored nodes: comments, script, style
2025-12-04T00:38:59.4470684Z [36m<html>[31m
2025-12-04T00:38:59.4470918Z [36m<head />[31m
2025-12-04T00:38:59.4471131Z [36m<body>[31m
2025-12-04T00:38:59.4471335Z [36m<div />[31m
2025-12-04T00:38:59.4471536Z [36m</body>[31m
2025-12-04T00:38:59.4471752Z [36m</html>[31m[39m
2025-12-04T00:38:59.4471873Z
2025-12-04T00:38:59.4471980Z [32m- Expected[39m
2025-12-04T00:38:59.4472199Z [31m+ Received[39m
2025-12-04T00:38:59.4472306Z
2025-12-04T00:38:59.4472407Z [32m- false[39m
2025-12-04T00:38:59.4472599Z [31m+ true[39m
2025-12-04T00:38:59.4472703Z
2025-12-04T00:38:59.4472995Z [36m [2m❯[22m src/hooks/useVotacoes.test.tsx:[2m155:56[22m[39m
2025-12-04T00:38:59.4473321Z [90m153| [39m
2025-12-04T00:38:59.4473865Z [90m154| [39m [35mconst[39m { result } [33m=[39m [34mrenderHook[39m(() [33m=>[39m [34museVotacoes[39m([32m'all'[39m))
2025-12-04T00:38:59.4475199Z [90m155| [39m [35mawait[39m [34mwaitFor[39m(() [33m=>[39m [34mexpect[39m(result[33m.[39mcurrent[33m.[39mloading)[33m.[39m[34mtoBe[39m([35mfalse[39m))
2025-12-04T00:38:59.4475890Z [90m | [39m [31m^[39m
2025-12-04T00:38:59.4476186Z [90m156| [39m
2025-12-04T00:38:59.4476961Z [90m157| [39m [35mconst[39m ok [33m=[39m [35mawait[39m [34mact[39m([35masync[39m () [33m=>[39m result[33m.[39mcurrent[33m.[39m[34mvotar[39m([32m'vot-3'[39m[33m,[39m [34m10[39m))
2025-12-04T00:38:59.4478036Z [90m [2m❯[22m runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:[2m47:12[22m[39m
2025-12-04T00:38:59.4478885Z [90m [2m❯[22m checkCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m124:77[22m[39m
2025-12-04T00:38:59.4479721Z [90m [2m❯[22m Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:[2m118:16[22m[39m
2025-12-04T00:38:59.4480128Z
2025-12-04T00:38:59.4480337Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/17]⎯[22m[39m
2025-12-04T00:38:59.4480626Z
2025-12-04T00:38:59.4481192Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mrenderiza saudação com primeiro nome do usuário
2025-12-04T00:38:59.4482037Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mexibe nome do condomínio
2025-12-04T00:38:59.4482881Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mrenderiza grid de atalhos com estatísticas
2025-12-04T00:38:59.4483807Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mnavega para página correta ao clicar em atalho
2025-12-04T00:38:59.4484744Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mexibe indicador de alerta em cards com pendências
2025-12-04T00:38:59.4486194Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mcarrega feed unificado de atualizações
2025-12-04T00:38:59.4487969Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mexibe mensagem quando não há atualizações
2025-12-04T00:38:59.4489672Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mabre chatbot ao clicar no botão flutuante
2025-12-04T00:38:59.4491545Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mfecha chatbot ao clicar em fechar
2025-12-04T00:38:59.4493243Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mexibe banner publicitário quando disponível
2025-12-04T00:38:59.4494999Z [41m[1m FAIL [22m[49m src/pages/Dashboard.test.tsx[2m > [22mDashboard[2m > [22mregistra clique no banner e abre link externo
2025-12-04T00:38:59.4496456Z [31m[1mReferenceError[22m: Cannot access 'loadUnifiedFeed' before initialization[39m
2025-12-04T00:38:59.4497551Z [36m [2m❯[22m Dashboard src/pages/Dashboard.tsx:[2m63:40[22m[39m
2025-12-04T00:38:59.4508126Z [90m 61| [39m [34msetLoadingUpdates[39m([35mfalse[39m)[33m;[39m
2025-12-04T00:38:59.4509125Z [90m 62| [39m }
2025-12-04T00:38:59.4510419Z [90m 63| [39m }[33m,[39m [profile[33m?.[39mcondominio_id[33m,[39m isAdmin[33m,[39m loadUnifiedFeed])[33m;[39m
2025-12-04T00:38:59.4512007Z [90m | [39m [31m^[39m
2025-12-04T00:38:59.4515244Z [90m 64| [39m
2025-12-04T00:38:59.4515917Z [90m 65| [39m [35masync[39m [35mfunction[39m [34mloadBanner[39m() {
2025-12-04T00:38:59.4527038Z [90m [2m❯[22m renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:[2m15486:18[22m[39m
2025-12-04T00:38:59.4528782Z [90m [2m❯[22m mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:[2m20103:13[22m[39m
2025-12-04T00:38:59.4530346Z [90m [2m❯[22m beginWork node_modules/react-dom/cjs/react-dom.development.js:[2m21626:16[22m[39m
2025-12-04T00:38:59.4532509Z [90m [2m❯[22m beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:[2m27465:14[22m[39m
2025-12-04T00:38:59.4534055Z [90m [2m❯[22m performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:[2m26599:12[22m[39m
2025-12-04T00:38:59.4535555Z [90m [2m❯[22m workLoopSync node_modules/react-dom/cjs/react-dom.development.js:[2m26505:5[22m[39m
2025-12-04T00:38:59.4536998Z [90m [2m❯[22m renderRootSync node_modules/react-dom/cjs/react-dom.development.js:[2m26473:7[22m[39m
2025-12-04T00:38:59.4538590Z [90m [2m❯[22m recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:[2m25889:20[22m[39m
2025-12-04T00:38:59.4540328Z [90m [2m❯[22m performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:[2m25789:22[22m[39m
2025-12-04T00:38:59.4541217Z
2025-12-04T00:38:59.4541601Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/17]⎯[22m[39m
2025-12-04T00:38:59.4541914Z
2025-12-04T00:38:59.4541963Z
2025-12-04T00:38:59.4542913Z [2m Test Files [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m22 passed[39m[22m[2m | [22m[33m1 skipped[39m[90m (26)[39m
2025-12-04T00:38:59.4544440Z [2m Tests [22m [1m[31m17 failed[39m[22m[2m | [22m[1m[32m193 passed[39m[22m[2m | [22m[33m16 skipped[39m[90m (226)[39m
2025-12-04T00:38:59.4545343Z [2m Start at [22m 00:38:40
2025-12-04T00:38:59.4546451Z [2m Duration [22m 18.99s[2m (transform 1.34s, setup 6.52s, import 3.86s, tests 17.17s, environment 18.17s)[22m
2025-12-04T00:38:59.4547096Z
2025-12-04T00:38:59.4548049Z
2025-12-04T00:38:59.4590728Z ##[error]AssertionError: expected true to be false // Object.is equality

Ignored nodes: comments, script, style

<html>
  <head />
  <body>
    <div />
  </body>
</html>

- Expected

* Received

- false

* true

❯ src/hooks/useDashboardStats.test.tsx:101:56
❯ runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
❯ checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
❯ Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

2025-12-04T00:38:59.4603295Z
2025-12-04T00:38:59.4610370Z ##[error]AssertionError: expected true to be false // Object.is equality

Ignored nodes: comments, script, style

<html>
  <head />
  <body>
    <div />
  </body>
</html>

- Expected

* Received

- false

* true

❯ src/hooks/useVotacoes.test.tsx:97:56
❯ runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
❯ checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
❯ Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

2025-12-04T00:38:59.4614286Z
2025-12-04T00:38:59.4621106Z ##[error]AssertionError: expected true to be false // Object.is equality

Ignored nodes: comments, script, style

<html>
  <head />
  <body>
    <div />
  </body>
</html>

- Expected

* Received

- false

* true

❯ src/hooks/useVotacoes.test.tsx:109:52
❯ runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
❯ checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
❯ Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

2025-12-04T00:38:59.4624879Z
2025-12-04T00:38:59.4631742Z ##[error]AssertionError: expected true to be false // Object.is equality

Ignored nodes: comments, script, style

<html>
  <head />
  <body>
    <div />
  </body>
</html>

- Expected

* Received

- false

* true

❯ src/hooks/useVotacoes.test.tsx:122:56
❯ runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
❯ checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
❯ Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

2025-12-04T00:38:59.4635282Z
2025-12-04T00:38:59.4642206Z ##[error]AssertionError: expected true to be false // Object.is equality

Ignored nodes: comments, script, style

<html>
  <head />
  <body>
    <div />
  </body>
</html>

- Expected

* Received

- false

* true

❯ src/hooks/useVotacoes.test.tsx:128:56
❯ runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
❯ checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
❯ Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

2025-12-04T00:38:59.4646170Z
2025-12-04T00:38:59.4652896Z ##[error]AssertionError: expected true to be false // Object.is equality

Ignored nodes: comments, script, style

<html>
  <head />
  <body>
    <div />
  </body>
</html>

- Expected

* Received

- false

* true

❯ src/hooks/useVotacoes.test.tsx:155:56
❯ runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
❯ checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
❯ Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

2025-12-04T00:38:59.4656429Z
2025-12-04T00:38:59.4667953Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4673724Z
2025-12-04T00:38:59.4685236Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4690779Z
2025-12-04T00:38:59.4699116Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4702680Z
2025-12-04T00:38:59.4708871Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4712399Z
2025-12-04T00:38:59.4718402Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4721773Z
2025-12-04T00:38:59.4727702Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4731096Z
2025-12-04T00:38:59.4737060Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4740254Z
2025-12-04T00:38:59.4746607Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4749959Z
2025-12-04T00:38:59.4756106Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4761213Z
2025-12-04T00:38:59.4771782Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.4777266Z
2025-12-04T00:38:59.4787729Z ##[error]ReferenceError: Cannot access 'loadUnifiedFeed' before initialization
❯ Dashboard src/pages/Dashboard.tsx:63:40
❯ renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
❯ mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
❯ beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
❯ beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
❯ performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
❯ workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
❯ renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
❯ recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20
❯ performConcurrentWorkOnRoot node_modules/react-dom/cjs/react-dom.development.js:25789:22

2025-12-04T00:38:59.5052501Z ##[error]Process completed with exit code 1.
2025-12-04T00:38:59.5147482Z Post job cleanup.
2025-12-04T00:38:59.6084095Z [command]/usr/bin/git version
2025-12-04T00:38:59.6120011Z git version 2.52.0
2025-12-04T00:38:59.6162858Z Temporarily overriding HOME='/home/runner/work/\_temp/5e4cf7b3-fc59-4e94-91e9-95474132cc01' before making global git config changes
2025-12-04T00:38:59.6163788Z Adding repository directory to the temporary git global config as a safe directory
2025-12-04T00:38:59.6168054Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/norma/norma
2025-12-04T00:38:59.6203227Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2025-12-04T00:38:59.6235456Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2025-12-04T00:38:59.6467182Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2025-12-04T00:38:59.6487036Z http.https://github.com/.extraheader
2025-12-04T00:38:59.6499013Z [command]/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
2025-12-04T00:38:59.6529235Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2025-12-04T00:38:59.6767088Z [command]/usr/bin/git config --local --name-only --get-regexp ^includeIf\.gitdir:
2025-12-04T00:38:59.6805676Z [command]/usr/bin/git submodule foreach --recursive git config --local --show-origin --name-only --get-regexp remote.origin.url
2025-12-04T00:38:59.7164124Z Cleaning up orphan processes
