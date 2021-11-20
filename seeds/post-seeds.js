const { Post } = require('../models');

const postData = [
    {
        title: "First post",
        post:"What's up.",
        user_id: 1
    },
    {
        title: "All things Lord of the Rings",
        post:"Only LOTR comments allowed!",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;