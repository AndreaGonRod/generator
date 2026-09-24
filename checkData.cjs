const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, 'src', 'nameGenerator.js'), 'utf8');

// Find the keys of DATA
const match = content.match(/const DATA = \{([\s\S]+?)\};\n\nconst /);
if (match) {
  console.log("Found DATA");
} else {
  console.log("DATA regex not matched");
}
