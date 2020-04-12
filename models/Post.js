const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }
});


const posts = mongoose.model('Posts', PostSchema);

module.exports = posts;


// NB: The Posts will be the name that will appear in our database collection
