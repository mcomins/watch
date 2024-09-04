module.exports = {
	axios: {
		baseURL: process.env.BASE_URL || 'http://localhost:3000/',
		browserBaseURL: '/',
		credentials: true,
		proxyHeaders: true,
		retry: { retries: 1 }
	},
	// add build settings
	build: {
		extend(config, { isDev, isClient }) {
			if (process.env.LINT === 'true' && isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					exclude: /node_modules/,
					loader: 'eslint-loader',
					test: /\.(js|vue)$/
				});
			}

			if (isDev && isClient) {
				config.devtool = 'source-map';
			}
		},
		extractCSS: true,
		loaders: {
			cssModules: {
				modules: {
					localIdentName: '[local]__watch'
				}
			}
		},
		postcss: {
			postcssOptions: {
				plugins: {
					cssnano: {
						preset: ['advanced', {
							zindex: false
						}]
					}
				}
			}
		},
		publicPath: '/assets/'
	},
	// run on build
	buildModules: [
		'@nuxtjs/eslint-module'
	],
	// auto import components
	components: true,
	// set global styles
	css: [
		'@assets/css/global.scss'
	],
	dev: process.env.NODE_ENV !== 'production',
	// set global page headers
	head: {
		htmlAttrs: {
			lang: 'en'
		},
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'A site for tracking securities' }
		],
		titleTemplate: titleChunk => titleChunk ? `${titleChunk} | Watch` : 'Watch'
	},
	// set loading color
	loading: { color: '#EA3323' },
	// extend base functionality
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/style-resources'
	],
	// add plugins
	plugins: [],
	// set variables accessible on server only
	privateRuntimeConfig: {},
	// set variables accessible on client and server
	publicRuntimeConfig: {
		TEST: process.env.TEST || ''
	},
	// set src directory
	srcDir: 'src/client/',
	// enable server-side rendering
	ssr: true,
	// enable global import of styles
	styleResources: {
		scss: [
			'@assets/css/variables.scss'
		]
	}
};
