const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('-------NEW CHUNK--------');
    console.log(chunk.toString());
    writeStream.write('New Chunkdsdsad');
    writeStream.write(chunk);
});
