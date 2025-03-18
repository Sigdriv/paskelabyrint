import { dirname } from "path";
import { fileURLToPath } from "url";

import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "unused-imports": unusedImports,
      "@typescript-eslint": typescriptEslintPlugin,
    },
  },
  {
    languageOptions: {
      parser: typescriptEslintParser,
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.js",
      "**/*.jsx",
      "**/*.mts",
      "**/*.mjs",
    ],
    rules: {
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-empty-function": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        2,
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/array-type": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            // React imports first
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "react-**",
              group: "external",
              position: "before",
            },
            // External packages with @ prefix (but not @/)
            {
              pattern: "@*/**",
              group: "external",
              position: "after",
            },
            // Internal imports with @/ prefix
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
            // Relative imports last
            {
              pattern: "./**",
              group: "sibling",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "react-**"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    ignores: ["node_modules/", ".next", "build", "out"],
  },
];

export default eslintConfig;
