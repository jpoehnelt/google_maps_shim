import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

var terserOptions = { output: { comments: "" } };

export default [
  {
    input: "src/index.ts",
    plugins: [
      typescript(),
      commonjs(),
      resolve()],
    output: {
      file: "dist/index.js",
      format: "iife",
      name: "google.maps.plugins.shim"
    }
  },
  {
    input: "src/index.ts",
    plugins: [
      typescript(),
      commonjs(),
      resolve(),
      terser(terserOptions)],
    output: {
      file: "dist/index.min.js",
      format: "iife",
      name: "google.maps.plugins.shim"
    }
  }

];
