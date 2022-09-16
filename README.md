## PURPOSE
- **Compare two different versions of the same Shopify theme (may be used to compare non-Shopify files by changing paths and directory tree)**

## Why did I make this?
- My company's previous theme did not run on Shopify 2.0 (released June 29th 2021), so we had to update it. This new Shopify update updated the majority of files, switching them from Liquid to JSON (to give store owners more options with code-free theme customization). However, we had too much custom code to automatically update it without breaking everything. I had to do it manually. SO! Staying true to my coder nature, I found an efficient way to only look at the files that needs updating.

## How does it work?
1. on Shopify theme store, search your theme, and update the one you want to its latest version
2. download both the current and updated theme on your device
![Screenshot 2022-09-16 at 13 43 54](https://user-images.githubusercontent.com/35432060/190632154-72d47ade-93d0-44ad-bccd-3dc9af65b68e.png)
3. place both themes and this script in the same directory
  
```bash
    ├── current_theme
    │   └── ...
    ├── updated_theme  
    │   └── ...                
    └── script.js
```
4. update `currentThemeFolder` and `updatedThemeFolder` variables with the folder name associated with your directory path (such as `current_theme` and `updated_theme` in the tree above)
5. make sure you have `Node` installed in your device ([download here](https://nodejs.org/en/download/))
6. run script with `node comparator.js`
7. enjoy :)
