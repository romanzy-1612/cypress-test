export default {
  /** Globs to analyze */
  globs: ["src/**/*.ts"],
  /** Globs to exclude */
  exclude: ["src/foo.js"],
  /** Directory to output CEM to */
  outdir: ".",
  /** Run in dev mode, provides extra logging */
  dev: false,
  /** Run in watch mode, runs on file changes */
  watch: false,
  /** Include third party custom elements manifests */
  dependencies: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: true,
  /** Enable special handling for litelement */
  litelement: true,
  /** Enable special handling for catalyst */
  catalyst: false,
  /** Enable special handling for fast */
  fast: false,
  /** Enable special handling for stencil */
  stencil: false,
  /** Provide custom plugins */
  // plugins: [myAwesomePlugin()],

  /** Overrides default module creation: */
  // overrideModuleCreation: ({ ts, globs }) => {
  //   console.log("ts", ts, "globs", globs);

  //   // const program = ts.createProgram(globs, defaultCompilerOptions);
  //   // // const typeChecker = program.getTypeChecker();

  //   // return program
  //   //   .getSourceFiles()
  //   //   .filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
  // },
};
