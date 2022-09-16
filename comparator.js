const path = require('path');
const fs = require('fs');

/* note: 
* - 'current' refers to current theme being used for store
* - 'updated' refers to the updated version of the current theme, where our changes are made
*/
const currentThemeFolder = ''; // update with folder's name
const updatedThemeFolder = ''; // update with folder's name

// store files that are either not equal to each other or non-existent in the new theme
var filesUnchanged = [];
var newFiles = [];

// loop through folders
fs.readdirSync(path.join(__dirname + currentThemeFolder)).forEach(folder => {
  let currentThemeFolderPath = path.join(__dirname + currentThemeFolder + folder);
  let updatedThemeFolderPath = path.join(__dirname + updatedThemeFolder + folder);
  // loop through files in old theme folder
  fs.readdirSync(currentThemeFolderPath).forEach(file => {
    let fileExists = false;
    let oldFilePath = path.join(__dirname + currentThemeFolder + folder + '/' + file);
    // loop through files in new theme folder
    fs.readdirSync(updatedThemeFolderPath).forEach(newFile => {
      // check if file from old and new theme is the same
      // if yes, compare them to see if any changes were made
      if (file == newFile) {
        fileExists = true;
        let newFilePath = path.join(__dirname + updatedThemeFolder + folder + '/' + newFile);
        fs.stat(newFilePath, (err, newStats) => {
          fs.stat(oldFilePath, (oldErr, oldStats) => {
            // check if files are 'the same' by using their size (in bytes)
            if (newStats.size == oldStats.size) {
              filesUnchanged.push(file);
            }
          })
        })
      }
    })
    // if file from the old theme doesn't exist in new theme, append to array
    if (!fileExists) {
      newFiles.push(file);
    } 
  })
})
// let it do its thing before checking the result
setTimeout(() => {
  console.log(filesUnchanged);
  console.log("😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️");
  console.dir(newFiles, {maxArrayLength: null});
}, 2500)
console.log("🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁");