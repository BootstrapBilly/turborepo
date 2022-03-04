module.exports = {
    ...require("config/eslint-react-library"),
    parserOptions: {
        root: true,
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"]
    }
}