const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Shortfilm = require('../Database/models/shortFilm');
const Portfolio = require('../Database/models/portfolio');

// Ensure the uploads directories exist
const videoUploadsDir = path.join(__dirname, '..', '..', 'public', 'uploads', 'videos');
const imageUploadsDir = path.join(__dirname, '..', '..', 'public', 'uploads');

if (!fs.existsSync(videoUploadsDir)) {
  fs.mkdirSync(videoUploadsDir, { recursive: true });
}

if (!fs.existsSync(imageUploadsDir)) {
  fs.mkdirSync(imageUploadsDir, { recursive: true });
}

// Set storage engine for video files
const storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, videoUploadsDir); // directory to save video files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // save files with unique names
  }
});

// Set storage engine for cover images
const storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadsDir); // directory to save image files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // save files with unique names
  }
});

// Initialize upload for video files
const uploadVideo = multer({
  storage: storageVideo,
  limits: { fileSize: 100000000 }, // Limit file size to 100MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('videoFile');

// Initialize upload for cover images
const uploadImage = multer({
  storage: storageImage,
  limits: { fileSize: 10000000 }, // Limit file size to 10MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('coverImage');

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|mp4/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images and Videos Only!');
  }
}

// Add a new shortfilm
router.post("/", (req, res) => {
  uploadVideo(req, res, (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    if (!req.file) {
      return res.status(400).json({ msg: 'No video file uploaded' });
    }

    const videoFilePath = req.file.path.replace(/\\/g, '/');
    const videoUrl = `./uploads/videos/${path.basename(videoFilePath)}`;

    uploadImage(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      if (!req.file) {
        return res.status(400).json({ msg: 'No cover image uploaded' });
      }

      const imageFilePath = req.file.path.replace(/\\/g, '/');
      const coverImageUrl = `./uploads/${path.basename(imageFilePath)}`;

      const { title, summary, genre, portfolioId } = req.body;

      try {
        const newShortfilm = new Shortfilm({
          title,
          summary,
          genre,
          videoUrl,
          coverImageUrl,
        });

        await newShortfilm.save();

        // Add the shortfilm to the portfolio
        const portfolio = await Portfolio.findById(portfolioId);
        portfolio.shortfilms.push(newShortfilm._id);
        await portfolio.save();

        res.json(newShortfilm);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
      }
    });
  });
});

module.exports = router;