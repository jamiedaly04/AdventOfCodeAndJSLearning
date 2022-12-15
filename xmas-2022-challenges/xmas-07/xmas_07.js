// PART 1
//---------------------------------
//Note will need to run this in node.js, won't work in browser as it uses node
import { readFile } from 'fs';
readFile('xmas-2022-challenges/xmas-07/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    parseInput(data);
});

class Tree {
    constructor() {
        this.view = {};
        this.pwd = [];
    }

    addItem(item) {
        let curDir = this.pwd.reduce((curDir, d) => curDir[d], this.view);
        // we either add a number to represent a file or an obj to represent a directory
        curDir[item[1]] = !isNaN(item[0]) ? parseInt(item[0]) : {};
    }

    changeDir(name) {
        if (name === "/") {
            this.pwd = [];
        } else if (name === "..") {
            this.pwd.pop();
        } else {
            this.pwd.push(name);
        }
    }
}

function parseInput(data) {
    let commands = data.split('\n');
    let tree = new Tree();

    // Build tree
    for (let i = 0; i < commands.length; i++) {
        let instr = commands[i].split(" ");
        if (instr[0] === "$") {
            if (instr[1] === "cd") tree.changeDir(instr[2]);
        } else {
            tree.addItem(instr);
        }
    }

    let dirs = {};
    crawl("", tree.view, dirs);

    dirs = Object.fromEntries(Object.entries(dirs).sort((a, b) => a[1] - b[1]));
    // Part 1
    console.log(Object.values(dirs));
    console.log(
        `Small directory sizes: ${Object.values(dirs)
            .filter((n) => n < 100000)
            .reduce((a, n) => a + n, 0)}`
    );

    let spaceNeeded = 30000000 - (70000000 - dirs["/"]),
        deleteDir = Object.keys(dirs).filter((dir) => dirs[dir] >= spaceNeeded)[0];

    console.log(`Directory to delete: "${deleteDir}", Size: ${dirs[deleteDir]}`)
}

// PART 2
//---------------------------------
// Get sizes of directories
function crawl(directory, node, directories) {
    let size = 0;
    for (let [k, v] of Object.entries(node)) {
        if (!isNaN(v)) size += v;
        else size += crawl(`${directory}/${k}`, node[k], directories);
    }
    directories[directory ? directory : "/"] = size;
    return size;
};