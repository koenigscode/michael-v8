const sharp = require("sharp")
const fs = require("fs")

if (!fs.existsSync(".tmp/cropped")) {
  fs.mkdirSync(".tmp/cropped", { recursive: true })
}

fs.readdirSync("./images/large").forEach(file => {
  sharp(`./images/large/${file}`)
    .resize({ width: 2000, height: 2000, fit: "inside" }) // width, height
    .toFile(`.tmp/cropped/${file}`)
})

fs.readdirSync("./images/small").forEach(file => {
  sharp(`./images/small/${file}`)
    .resize({ width: 500, height: 500, fit: "inside" }) // width, height
    .toFile(`.tmp/cropped/${file}`)
})
