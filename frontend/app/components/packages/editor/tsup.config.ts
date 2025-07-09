import type { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["cjs", "esm"], // generate cjs and esm files
  treeshake: true,
  minify: env === "production",
  bundle: env === "production",
  external: ["react"],
  watch: env === "development",
  target: "es2022",
  outDir: "dist",
  entry: ["src/index.tsx"],
  publicDir: "src/styles",
};
