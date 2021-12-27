module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "react/no-unescaped-entities": "off",
  },
  settings: { next: { rootDir: ["./apps/*/", "./packages/*/"] } },
};
