// src/models/fileModel.js
const csvParser = require('csv-parser');
const fs = require('fs');
const path = require('path');

const uploadedFiles = [];

const parseCSV = (fileBuffer, fileName, callback) => {
  const tempFilePath = path.join(__dirname, '..', 'temp', `${fileName}_temp.csv`);

  console.log("-------------")
  console.log(tempFilePath)
  // Save the file buffer to a temporary file
  fs.writeFileSync(tempFilePath, fileBuffer, 'utf-8');
  console.log("------writeFileSync done-------")
  const parsedData = [];
  const headers = [];

  csvParser({ headers: true })
    .on('headers', (csvHeaders) => {
        console.log("------headers-------")
        console.log(csvHeaders)
      headers.push(...csvHeaders);
    })
    .on('data', (row) => {
      parsedData.push(row);
    })
    .on('end', () => {
      // Remove the temporary file
      fs.unlinkSync(tempFilePath);

      callback(headers, parsedData);
    });

  // Pipe the temporary file to the csv parser
  fs.createReadStream(tempFilePath).pipe(csvParser()).on('headers', (csvHeaders) => {
    console.log("------headers-------")
    console.log(csvHeaders)
  headers.push(...csvHeaders);
})
.on('data', (row) => {
  parsedData.push(row);
})
.on('end', () => {
  // Remove the temporary file
  fs.unlinkSync(tempFilePath);

  callback(headers, parsedData);
});;
};

const uploadFile = (file) => {
    console.log("-------------")
    console.log(file)
};

const addFile = (file) => {
  uploadedFiles.push(file);
};

const getFiles = () => {
  return uploadedFiles;
};

module.exports = {
  parseCSV,
  addFile,
  getFiles,
  uploadFile
};
