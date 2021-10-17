module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
	lintOnSave:false, //关闭语法检查
	//开启代理服务器（方式一）
	// devServer: {
  //   proxy: 'http://localhost:5000'
  // },
	//开启代理服务器（方式二）
	devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        // 重写路径,把atguigu字符串换为''
				pathRewrite:{'^/atguigu':''},
        ws: true, //用于支持websocket
        changeOrigin: true ,//用于控制请求头中的host值
        // false 说真话(说代理服务器的真实地址)
        // true 说谎模式(跟服务器一样的地址)
      },
      '/demo': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/demo':''},
        changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
}