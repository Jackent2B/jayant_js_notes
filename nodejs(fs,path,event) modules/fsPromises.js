const fs = require("fs/promises");

// method 1
fs.readFile("./file1.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// method 2
async function readFileContent() {
  try {
    const fileContent = await fs.readFile("./file1.txt", "utf-8");
    console.log(fileContent);
  } catch (err) {
    console.log(err);
  }
}
readFileContent();
