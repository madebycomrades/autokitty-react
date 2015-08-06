import zlib from 'zlib'
import fs from 'fs'

fs.createReadStream('./static/main.bundle.js')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./static/main.bundle.js.gz'))
