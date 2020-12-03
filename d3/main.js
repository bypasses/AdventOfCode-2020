const fs = require("fs");
let input = fs.readFileSync("./p1-input.txt", "utf8")
input = input.replace(/\r/g, "")
const rows = input.split("\n")

const position = {
    x: 0,
    y: 0
}
let trees = 0

const routes = [{r: 1, d: 1}, {r: 3, d: 1}, {r: 5, d: 1}, {r: 7, d: 1}, {r: 1, d: 2}]
let total = 1

for (var r = 0; r < routes.length; r++) {
    console.log(routes[r])
    position.x = 0
    position.y = 0
    trees = 0
    for (var l = 0; l < rows.length; l++) {
        if (rows[l][position.x % rows[l].length] == "#") trees += 1
        position.x += routes[r].r
        if (routes[r].d == 2) l += 1
    }
    console.log(trees)
    total = total * trees
}
console.log(total)