// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist/**", "docs/**", "node_modules/**"] },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            // The generated model files (src/api/sdk/**/models*) use `declare namespace`
            // blocks to hold request/response shapes alongside each class, mirroring the
            // generated OpenAPI client this SDK was originally scaffolded from.
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-unsafe-function-type": "off",
            "@typescript-eslint/prefer-as-const": "off",
            "@typescript-eslint/no-wrapper-object-types": "off",
            "@typescript-eslint/no-require-imports": "off",
            "preserve-caught-error": "off",
            // chai's `should` assertions (e.g. `value.should.be.true`) are bare
            // expression statements by design, and some model/data-template helpers
            // rely on getter side effects the same way.
            "@typescript-eslint/no-unused-expressions": "off",
        },
    }
);
