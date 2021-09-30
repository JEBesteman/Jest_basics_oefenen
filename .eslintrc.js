module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": ["eslint:recommended", "plugin:jest/recommended", "plugin:jest/style"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    },
    "plugins": ["jest"],
    "settings": {
        "jest": {
            version: require("jest/package.json").version,
        },
    },
};
