const imagemin = require("imagemin")
const imageminJpegtran = require("imagemin-jpegtran")
const imageminPngquant = require("imagemin-pngquant")

;(async () => {
  const files = await imagemin([".tmp/cropped/*.{jpg,png}"], {
    destination: "public/images",
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        // quality: [0.9, 1]
      }),
    ],
  })

  console.log(files)
})()
