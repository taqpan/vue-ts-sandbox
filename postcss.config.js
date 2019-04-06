const Autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    Autoprefixer({
      browsers: [
        "> 1% in JP",
        "ie >= 11",
        "Android >= 4",
        "last 5 versions"
      ]
    })
  ]
}
