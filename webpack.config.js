const path = require("path"); // Подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // module.exports - это синтаксис экспорта в Node.js
  entry: { main: "./src/index.js" }, // указали первое место, куда заглянет webpack, — файл index.js в папке src
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // указали, в какой файл будет собираться весь js, и дали ему имя
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [
      // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[hash][ext]",
        },
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
  ],
};
