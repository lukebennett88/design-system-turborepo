module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["simple-import-sort", "import"],
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "react/no-unescaped-entities": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
  settings: { next: { rootDir: ["./apps/*/", "./packages/*/"] } },
};
