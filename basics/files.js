const fs = require('fs');  // fs - file system

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());  // data return the buffer thats why convert to toString
// });

// console.log('last line'); // its display first becoz file read take some time


// writing files
// fs.writeFile('./docs/blog1.txt', 'Helloo Mahfoos', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt', 'Helloo Mahfoos', () => {
//     console.log('file was written');
// })

// // directories
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Folder Created');
// })

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}

