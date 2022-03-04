module.exports = {
    ...require("config/jest-react"),
    rootDir: ".",
    moduleNameMapper: {
        "\\.(css)$": "identity-obj-proxy"
    }
}