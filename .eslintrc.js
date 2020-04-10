module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["prettier/@typescript-eslint"],
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-constant-condition": "off",
		"prettier/prettier": ["error", { "useTabs": true, "printWidth": 140 , "camelCase": false}],
	},
	extends: [
	  "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	  "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
	  "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
}