const express = require('express');
const router = express.Router();

// IMPORTING MODEL
const Post = require('../models/Post');



// ************** CRUD ROUTES **************




// GET ALL POSTS ON THE DATABASE
router.get('/', async (req, res) => {
// res.send('Alll clear')

     try {
         const posts = await Post.find();
         res.json(posts)
     }catch(err) {
         res.json({
             message: err
         });
     }
});


// GET A SPECIFIC POSTS
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try{

        const post = await Post.findById(req.params.postId)
    res.json(post)

    }  catch(err) {
        res.json({
            message: err
        })
    }
    
});



// SUBMIT POSTS TO THE DATABASE
router.post('/', (req, res) => {
    // console.log(req.body)
    // Creating new post
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // saving our posts
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        })

})



// UPDATING POST
router.patch('/:postId', async (req, res) => {
    try{
const updatePost = await Post.updateOne(
    {_id: req.params.postId},
    { $set: {title: req.body.title, description: req.body.description}}
    )
res.json(updatePost)


    }catch(err) {
        res.json({
            message: err
        })
    }
})



// DELETING POSTS
router.delete('/:postId', async (req, res) => {
    try{

        const deletePost = await Post.remove({_id: req.params.postId})
        res.json(deletePost);

    } catch(err) {
        res.json({
            message: err
        })
    }
})


module.exports = router;        