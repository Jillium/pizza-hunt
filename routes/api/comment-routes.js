const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// add comment
// /api/comments/<pizzaID>
router
.route('/:pizzaId')
.post(addComment);

// delete comment
// /api/comments/<pizzaId>/<commentId>
router
.route('/:pizzaId/:commentId')
.delete(removeComment);

module.exports = router;