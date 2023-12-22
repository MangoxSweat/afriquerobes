
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const GREP_COLOR: string;
	export const SPACESHIP_VERSION: string;
	export const MANPATH: string;
	export const LESS_TERMCAP_mb: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const LESS_TERMCAP_md: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const LESS_TERMCAP_me: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_optional: string;
	export const COLOR: string;
	export const TERM_SESSION_ID: string;
	export const LESS_TERMCAP_ue: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const npm_config_python: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const LS_COLORS: string;
	export const GREP_COLORS: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const npm_package_peer: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const SPACESHIP_CONFIG: string;
	export const PAGER: string;
	export const npm_package_integrity: string;
	export const TMUX: string;
	export const LESS_TERMCAP_us: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const npm_config_engine_strict: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const ITERM_PROFILE: string;
	export const npm_config_npm_version: string;
	export const XPC_FLAGS: string;
	export const TMUX_PANE: string;
	export const npm_package_engines_node: string;
	export const npm_config_node_gyp: string;
	export const npm_package_dev: string;
	export const RBENV_SHELL: string;
	export const npm_package_version: string;
	export const SPACESHIP_ROOT: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_resolved: string;
	export const SHLVL: string;
	export const PYENV_SHELL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const LC_TERMINAL_VERSION: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_package_dev_optional: string;
	export const ITERM_SESSION_ID: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const npm_lifecycle_script: string;
	export const VISUAL: string;
	export const LESS_TERMCAP_so: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const BROWSER: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_config_not: string;
	export const LC_TERMINAL: string;
	export const SECURITYSESSIONID: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const LESS_TERMCAP_se: string;
	export const COLORTERM: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		GREP_COLOR: string;
		SPACESHIP_VERSION: string;
		MANPATH: string;
		LESS_TERMCAP_mb: string;
		TERM_PROGRAM: string;
		NODE: string;
		LESS_TERMCAP_md: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		LESS_TERMCAP_me: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_optional: string;
		COLOR: string;
		TERM_SESSION_ID: string;
		LESS_TERMCAP_ue: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		npm_config_python: string;
		USER: string;
		NVM_DIR: string;
		LS_COLORS: string;
		GREP_COLORS: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		npm_package_peer: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		SPACESHIP_CONFIG: string;
		PAGER: string;
		npm_package_integrity: string;
		TMUX: string;
		LESS_TERMCAP_us: string;
		PATH: string;
		npm_package_json: string;
		npm_config_engine_strict: string;
		_: string;
		LaunchInstanceID: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		ITERM_PROFILE: string;
		npm_config_npm_version: string;
		XPC_FLAGS: string;
		TMUX_PANE: string;
		npm_package_engines_node: string;
		npm_config_node_gyp: string;
		npm_package_dev: string;
		RBENV_SHELL: string;
		npm_package_version: string;
		SPACESHIP_ROOT: string;
		XPC_SERVICE_NAME: string;
		npm_package_resolved: string;
		SHLVL: string;
		PYENV_SHELL: string;
		HOME: string;
		COLORFGBG: string;
		LC_TERMINAL_VERSION: string;
		HOMEBREW_PREFIX: string;
		npm_package_dev_optional: string;
		ITERM_SESSION_ID: string;
		npm_config_cache: string;
		LOGNAME: string;
		LESS: string;
		npm_lifecycle_script: string;
		VISUAL: string;
		LESS_TERMCAP_so: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		BROWSER: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_config_not: string;
		LC_TERMINAL: string;
		SECURITYSESSIONID: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		LESS_TERMCAP_se: string;
		COLORTERM: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
