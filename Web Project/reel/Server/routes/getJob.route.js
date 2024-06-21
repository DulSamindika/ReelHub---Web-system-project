const router = require("express").Router();
const Job = require("../Database/models/jobs")

router.get("/", async(req, res) => {
    
    
    try {

        const { title, province , position, isPaid } = req.query;

        let query = {};

        if (title) query.title = new RegExp(title, 'i'); // case-insensitive search
        if (province) query.province = province;
        if (position) query.position = new RegExp(position, 'i');
        if (isPaid !== undefined) query.isPaid = isPaid === 'true';
        
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