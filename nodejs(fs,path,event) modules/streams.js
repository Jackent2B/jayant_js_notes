const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // fixing the buffer size to 2 byte
});

readableStream.pipe(gzip).pipe(fs.createWriteStream("./fileGzip.txt.gzip"));

const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });
readableStream.pipe(writableStream);
