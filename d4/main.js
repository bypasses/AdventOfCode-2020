const fs = require("fs");
const { compileFunction } = require("vm");
let input = fs.readFileSync("./p1-input.txt", "utf8")
const passports = input.split("\r\n\r\n")

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
const regex = [
    /byr:(192[0-9]|19[3-9]\d|200[0-2])\b/g,
    /iyr:(201[0-9]|2020)\b/g,
    /eyr:(202[0-9]|2030)\b/g,
    /hgt:(15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in\b/g,
    /hcl:#[0-9|a-f]{6}\b/g,
    /ecl:((amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth))\b/g,
    /pid:[0-9]{9}\b/g
]

//-----PART 1---------------------

// let goodCount = 0
// for (var p = 0; p < passports.length; p++) {
//     var goodPassport = fields.every(field => passports[p].includes(field));
//     if (goodPassport) goodCount += 1
// }
// console.log(goodCount)

//--------------------------------

//-----PART 2---------------------

let goodData = 0
for (var p = 0; p < passports.length; p++) {
    data = passports[p].replace(/\r\n/g, " ")
    var goodPassport = regex.every(reg => data.match(reg));
    if (goodPassport) goodData += 1
}
console.log(goodData)

//--------------------------------