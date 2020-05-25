// 这个文件可以用来做额外的配置，比方说配个别名之类的。

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': "@/assets",
                "common": "@/common",
            }
        }
    }
}