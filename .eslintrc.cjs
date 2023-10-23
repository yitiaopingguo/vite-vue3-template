module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
      'plugin:vue/essential', 'airbnb-base',
      'plugin:prettier/recommended' // 添加 prettier 插件
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
      ecmaVersion: 12,
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    "plugins": [
        "vue",'@typescript-eslint'
    ],
    "rules": {
    }
}
