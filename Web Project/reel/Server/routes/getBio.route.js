const router = require("express").Router();
const Bio = require("../Database/models/bio");


router.get('/', async (req, res) => {
    try {
        const bio = await Bio.findOne({ userId: req.user.id });
        res.json(bio);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;