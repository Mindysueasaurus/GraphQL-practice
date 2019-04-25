//named export - have as many as needed
//default export has no name and you can only have one
const message = 'Some message from module.js';
const name = "Mindy";
const location = "Texas";

export { message, name, location as default }