module.exports = {
	rules: {
		"react-hooks/exhaustive-deps": "off",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"react/require-default-props": "off",
		"react/jsx-props-no-spreading": "off",
		"import/prefer-default-export": "off",
		"no-shadow": "off",
		"react/display-name": "off",
		"react/no-array-index-key": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": [
			"error",
			{ functions: true, classes: true, variables: false },
		],
		quotes: [2, "double", { avoidEscape: true }],
		"no-underscore-dangle": [
			"error",
			{ allow: ["__typename", "__disableRegExpRestore"] },
		],
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".ts", ".tsx"] },
		],
		"react/no-unescaped-entities": [
			"error",
			{
				forbid: [
					{
						char: ">",
						alternatives: ["&gt;"],
					},
					{
						char: '"',
						alternatives: ["&quot;", "&ldquo;", "&#34;", "&rdquo;"],
					},
					{
						char: "}",
						alternatives: ["&#125;"],
					},
				],
			},
		],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"@typescript-eslint/array-type": ["error", { default: "generic" }],
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					["parent", "sibling", "index"],
				],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
				},
			},
		],
		"import/no-extraneous-dependencies": [
			"error",
			{ devDependencies: ["**/*.d.ts"] },
		],
	},
	globals: {
		NodeJS: true,
		__DEV__: true,
	},
	settings: {
		"import/resolver": {
			typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
		},
	},
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"airbnb",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"prettier/react",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	root: true,
};
