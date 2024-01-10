const { defineConfig } = require("@vue/cli-service");

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const JavaScriptObfuscator = require("webpack-obfuscator");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 添加这行来禁用 ESLint
  productionSourceMap: false, // 生产环境禁用 source map
  publicPath: process.env.NODE_ENV === "development" ? "/" : process.env.VUE_APP_PATH,
  configureWebpack: {
    plugins: [
      require("unplugin-element-plus/webpack")({
        libs: [
          {
            libraryName: "element-plus",
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/theme-chalk/${name}.css`;
            },
          },
        ],
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      //代码混淆
      process.env.NODE_ENV === 'production' ?
      new JavaScriptObfuscator(
        {
          // 压缩,无换行
          compact: true,

          // 是否启用控制流扁平化(降低1.5倍的运行速度)
          controlFlowFlattening: false,

          // 通过固定和随机（在代码混淆时生成）的位置移动数组。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。
          rotateStringArray: true,

          // 随机的死代码块(增加了混淆代码的大小)
          deadCodeInjection: true,

          // 此选项几乎不可能使用开发者工具的控制台选项卡
          debugProtection: true,

          // 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，从而更难使用“开发人员工具”的其他功能。
          // debugProtectionInterval: false,

          // 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
          disableConsoleOutput: true,

          // 标识符的混淆方式 hexadecimal(十六进制) mangled(短标识符)
          identifierNamesGenerator: "hexadecimal",
          log: false,

          // 是否启用全局变量和函数名称的混淆
          renameGlobals: false,

          // 混淆后的代码,不能使用代码美化,同时需要配置 cpmpat:true;
          selfDefending: true,

          // 删除字符串文字并将它们放在一个特殊的数组中
          stringArray: true,

          stringArrayEncoding: ["base64"],
          stringArrayThreshold: 0.75,
          // 允许启用/禁用字符串转换为unicode转义序列。Unicode转义序列大大增加了代码大小，并且可以轻松地将字符串恢复为原始视图。建议仅对小型源代码启用此选项。
          unicodeEscapeSequence: true,
        },
        []
      ) : '',
    ],
  },

  
  devServer:{
    open:false,
    host:'0.0.0.0',
    port :9527,
    https:false,
    proxy:{
      '/dev-api':{
        target:'http://localhost:8888',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/dev-api': ''   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉 
        }  
      },
      '/pro-api':{
        target:'http://localhost:8888',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/pro-api': ''   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉 
        }  
      },
      '/test-api':{
        target:'http://localhost:8888',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/test-api': ''   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉 
        }  
      }
    }
  }
});
