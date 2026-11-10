import { createRequire } from "module";
import nodePolyfills from "rollup-plugin-node-polyfills";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default [
    // browser-friendly UMD build
    {
        input: "dist/src/index.js",
        output: {
            name: "@jupiterbak/ayx-node",
            file: pkg.browser,
            format: "umd",
        },
        plugins: [
            resolve({
                preferBuiltins: true,
            }),
            commonjs({ extensions: [".js", ".ts"] }), // the ".ts" extension is required
            nodePolyfills(),
            json(),
            terser(),
        ],
    },
];
