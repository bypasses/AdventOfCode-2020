const fs = require("fs");


//------PART 1-----------------------------------------
// let input = fs.readFileSync("./p1-input.txt", "utf8")
// input = input.replace(/\r/g, "")
// const inputArr = input.split("\n")

// for (var i = 0; i < inputArr.length; i++) {
//     const num = inputArr[i]
//     const needed = 2020 - num
//     if (inputArr.indexOf(String(needed)) > -1) {
//         i = inputArr.length
//         console.log(num * needed)
//     }
// }
//------------------------------------------------------

let input = fs.readFileSync("./p2-input.txt", "utf8")
input = input.replace(/\r/g, "")
const inputArr = input.split("\n")

for (var i = 0; i < inputArr.length; i++) {
    const num = inputArr[i]
    const needed = 2020 - num
    let filteredInput = inputArr.filter(x => x < needed)
    for (var f = 0; f < filteredInput.length; f++) {
        const num2 = filteredInput[f]
        const remainder = needed - num2
        loopcount += 1
        if (inputArr.indexOf(String(remainder)) > -1) {
            f = filteredInput.length
            i = inputArr.length
            console.log(num * num2 * remainder)
        }
    }
}