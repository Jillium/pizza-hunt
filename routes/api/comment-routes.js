const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// add comment
// /api/comments/<pizzaID>
router
.route('/:pizzaId')
.post(addComment);

// delete comment
// /api/comments/<pizzaId>/<commentId>
router
.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

router
.route('/:pizzaId/:commentId/:replyId')
.delete(removeReply);

module.exports = router;