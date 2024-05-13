const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Good point. Very nice explanation."
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Great! Awesome comparison."
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "I agree. It's a great way to simplify SQL queries."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
