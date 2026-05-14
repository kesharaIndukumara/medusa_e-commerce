import eslintConfig from "eslint-config-docs"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [...eslintConfig.base, {
    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: true,
            tsconfigRootDir: __dirname,
        },
    },
}];
