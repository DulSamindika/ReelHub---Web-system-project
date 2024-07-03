const router = require("express").Router();
const Post = require("../Database/models/posts")

router.get("/", async(req, res) => {
    
    
    try {
        const posts = await Post.find({}).populate('user', 'username');
        res.status(200).json({
            status: 'success',
            data: {
                posts
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