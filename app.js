// const fs = require('fs');

const filepath = "vocabs";

readTextFile();
function readTextFile() {
  // let fileData = fs.readFileSync("sources/"+filepath+".txt", 'utf8').split(' EN ');
  console.log("ok");

  lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("sources/" + filepath + ".txt"),
  });

  lineReader.on("line", function (plainTextLine) {
    console.log("Line from file:", plainTextLine);
    textLineContainsDoubleBatchim(plainTextLine);
  });

  return 0;
}

function textLineContainsDoubleBatchim(plainTextLine) {
  stringToChararray(plainTextLine).forEach((element) => {
    console.log(element, isCharDoubleBatchim(element));
  });

  // return false;
}

// https://en.wikipedia.org/wiki/Hangul_Syllables
function isCharDoubleBatchim(char) {
  return /[^\uAC02-\uCA41]/.test(char);
}

function stringToChararray(myString) {
  return myString.split("");
}
