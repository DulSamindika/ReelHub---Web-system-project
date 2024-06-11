const router = require("express").Router();
const Job = require("../Database/models/jobs")

router.get("/", async(req, res) => {
    
    
    try {
        const jobs = await Job.find({});
        res.status(200).json({
            status: 'success',
            data: {
                jobs
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

module.exports = router;