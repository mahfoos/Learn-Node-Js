// Global object

//console.log(global);

/*
    global
    clearIntervel
    setIntervel
    setTimeout
    queueMicrotask
    clearimmediate
    setImmediate
*/

// Run after 3 seconds
global.setTimeout(() => {
    console.log('in the timeout')
}, 3000)

setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int);
}, 3000)

// Run every 1 seconds
const int = setInterval(() => {
    console.log('in the intervel')
},1000)

console.log(__dirname);  // getting the directory  path
console.log(__filename);  // grtting the file path





