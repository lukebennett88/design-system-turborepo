module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    "react/no-unescaped-entities": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  settings: { next: { rootDir: ["./apps/*/", "./packages/*/"] } },
};
