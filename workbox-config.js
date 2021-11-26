module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,ico,jpeg,png,js,json,config}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};