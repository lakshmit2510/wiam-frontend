module.exports = {
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"extends": [
		"airbnb-base",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	],
	"env": {
		"jquery": true,
		"mocha": true,
		"jasmine": true
	},
	"settings": {
		"import/extensions": [".js",".ts"],
		"import/parsers": {
		  "@typescript-eslint/parser": [".ts"]
		 },
		 "import/resolver": {
			 "node": {
				 "extensions": [".js",".ts"]
			 }
		 }
	},
	"rules": {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"no-useless-constructor": "off",
		"@typescript-eslint/no-useless-constructor": "off",
		"import/prefer-default-export": "off",
		"import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
		"class-methods-use-this": "off",
		"import/extensions": "off",
		"no-empty-function": "off",
		"max-lines-per-function": ["error", { "max": 75, "skipComments": true, "skipBlankLines": true }],
		"max-lines": ["error", { "max": 400, "skipComments": true, "skipBlankLines": true }],
		"max-len": ["error", { "code": 140, "ignoreStrings": true, "ignoreUrls": true }]
	}
};
