// src/routes/indexRoute.js
const express = require('express');
const router = express.Router();
const fileModel = require('../models/fileModel');
const uploadController = require('../controllers/uploadController');

router.get('/', (req, res) => {
  res.render('index', { files: fileModel.getFiles(),selectedFile: null });
});

router.post('/upload', uploadController.uploadFile);

router.get('/data/:index', (req, res) => {
  const index = req.params.index;
  const file = fileModel.getFiles()[index];
  res.render('index', { files: fileModel.getFiles(), selectedFile: file });
});

module.exports = router;
