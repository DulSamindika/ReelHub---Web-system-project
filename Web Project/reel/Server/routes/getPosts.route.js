const router = require("express").Router();
const Post = require("../Database/models/posts")


router.get("/", async(req, res) => {
    
    
    try {
        const posts = await Post.find({}).populate('author', 'firstname secondname');
        console.log('Posts fetched from DB:', posts);
        const formattedPosts = posts.map(post => ({
            ...post._doc,
            user: {
                firstname: post.author.firstname,
                secondname: post.author.secondname,
                username: `${post.author.firstname} ${post.author.secondname}`
            }
        }));
        console.log('Formatted posts:', formattedPosts);
        res.status(200).json({
            status: 'success',
            data: {
                posts: formattedPosts
            }
        });
    } catch (err) {
        console.errpr('Error fetching posts:', err);
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

module.exports = router;