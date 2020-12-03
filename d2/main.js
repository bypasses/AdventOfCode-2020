const fs = require("fs");
let input = fs.readFileSync("./p2-input.txt", "utf8")
input = input.replace(/\r/g, "")
const inputArr = input.split("\n")

//// PART 1
// let validPassCount = 0
// for (var i = 0; i < inputArr.length; i++) {
//     const split = inputArr[i].split(" ")
//     const reg = new RegExp(`[${split[1].replace(":", "")}]`, "g")
//     const count = (split[2].match(reg) || []).length;
//     if (count <= split[0].split("-")[1] && count >= split[0].split("-")[0]) {
//         validPassCount += 1
//     }
// }
// console.log(validPassCount)

//PART 2
let validPassCount = 0
for (var i = 0; i < inputArr.length; i++) {
    const split = inputArr[i].split(" ")
    const letter = split[1].replace(":", "")
    const pos1 = split[0].split("-")[0] -1
    const pos2 = split[0].split("-")[1] -1

    if (split[2][pos1] == letter ^ split[2][pos2] == letter) {
        validPassCount += 1
    }
}
console.log(validPassCount)