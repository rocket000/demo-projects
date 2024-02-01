// src/controllers/uploadController.js
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const fileModel = require('../models/fileModel');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFile = (req, res) => {
  console.log("----herehhhhhhh-----")
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // fileModel.uploadFile(req.file);
  // res.redirect('/');
  const fileBuffer = req.file.buffer.toString('utf-8');


  fileModel.parseCSV(fileBuffer, req.file.originalname, (headers, data) => {
    fileModel.addFile({ name: req.file.originalname, headers, data });
    res.redirect('/');
  });
};

module.exports = {
  uploadFile,
};
