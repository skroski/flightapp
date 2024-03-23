const PROXY_CONFIG = [
    {
        context:[
            '/api'
        ],
        target: "https://freeapi.gerasim.in",
        segure: false,
        changeOrigin: true,
        pathRewrite: {
            "ˆ/": ""
        }
    }
]

module.exports = PROXY_CONFIG;