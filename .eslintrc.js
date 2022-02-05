module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript/base"
    ],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        'vue/no-mutating-props' : 'error',
        'vue/require-prop-types' : 'off',
        'vue/no-v-html' : 'off',
        "vue/script-indent": [
            "error",
            4,
            {
                "baseIndent": 0
            }
        ],
        "max-len": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
    },
    "parserOptions": {
      "ecmaVersion": 2018,
      "parser": "@typescript-eslint/parser",
      "sourceType": "module",
      "project": "tsconfig.json",
      "tsconfigRootDir": "./"
    },
}
