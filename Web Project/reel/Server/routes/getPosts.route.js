const router = require("express").Router();
const Post = require("../Database/models/posts")


router.get("/", async(req, res) => {
    
    
    try {
        const posts = await Post.find({}).populate('author', 'firstname secondname');
        const formattedPosts = posts.map(post => ({
            ...post._doc,
            user: {
                firstname: post.author.firstname,
                secondname: post.author.secondname,
                username: `${post.author.firstname} ${post.author.secondname}`
            }
        }));

        res.status(200).json({
            status: 'success',
            data: {
                posts: formattedPosts
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