const pluginName = "ConsoleLogOnBuildWebpackPlugin";

class ConsoleLogOnBuildWebpackPlugin {
  apply(comiler) {
    // console.log(comiler);
    // console.log("webpack 正在构建");
    comiler.hooks.run.tap(pluginName, (comilation) => {
      console.log("webpack 正在构建");
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
