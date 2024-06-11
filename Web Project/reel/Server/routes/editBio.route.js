const router = require("express").Router();
const Bio = require("../Database/models/bio");
const { authenticate } = require('../middleware/auth');

router.post('/', async (req, res) => {
    try {
        const { profession, city, education, experience, awards } = req.body;
        
        let bio = await Bio.findOne({ userId: req.user.id });
        


        if (bio) {
            bio.profession = profession.split(',').map(item => item.trim());
            bio.city = city;
            bio.education = education.split(',').map(item => item.trim());
            bio.experience = experience.split(',').map(item => item.trim());
            bio.awards = awards.split(',').map(item => item.trim());
            await bio.save();
        } else {
            bio = new Bio({
                userId: req.user.id,
                profession: profession.split(',').map(item => item.trim()),
                city,
                education: education.split(',').map(item => item.trim()),
                experience: experience.split(',').map(item => item.trim()),
                awards: awards.split(',').map(item => item.trim()),
            });
            await bio.save();
        }
        res.json(bio);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', authenticate, async (req, res) => {
    try {
        const bio = await Bio.findOne({ userId: req.user.id });
        res.json(bio);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;