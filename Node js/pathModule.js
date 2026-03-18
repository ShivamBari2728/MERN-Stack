const path = require('path');
const fs = require('fs');

const currentFile = __filename;
const currentDir = __dirname;

console.log('=== Path Module Examples ===\n');

console.log('Current File:', currentFile);
console.log('Current Directory:', currentDir);

const filePath = '/workspaces/MERN-Stack/Express_Ex/pathModule.js';
const parsed = path.parse(filePath);
console.log('\nParsed Path:', parsed); // returns json object with root, dir, base, ext, name

const joinedPath = path.join(currentDir, '..', 'files', 'data.txt');
console.log('\nJoined Path:', joinedPath);

const resolvedPath = path.resolve(currentDir, 'test.js');
console.log('Resolved Path:', resolvedPath);

const extname = path.extname(filePath);
console.log('\nFile Extension:', extname);

const basename = path.basename(filePath);
console.log('File Basename:', basename);

console.log('\n=== Checking File Existence ===\n');

const filesToCheck = [
    path.join(currentDir, 'pathModule.js'),
    path.join(currentDir, 'test.js'),
    path.join(currentDir, '..', 'package.json'),
    path.join(currentDir, 'nonexistent.js')
];

filesToCheck.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(`${path.basename(file)}: ${exists ? '✓ Exists' : '✗ Does not exist'}`);
});