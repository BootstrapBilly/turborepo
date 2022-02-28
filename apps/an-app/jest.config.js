module.exports = {
    ...require("config/jest-react"),
    rootDir: ".",
    moduleNameMapper: {
        "\\.module\\.css$": "identity-obj-proxy"
    }
}