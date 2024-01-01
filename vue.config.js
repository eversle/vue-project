const { defineConfig } = require('@vue/cli-service')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({
        libs: [{
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`
          },
        },]
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [

          ElementPlusResolver()
        ]
      }),
      Components({
        resolvers: [

          ElementPlusResolver()
        ]
      }),
    ]
  }

})
