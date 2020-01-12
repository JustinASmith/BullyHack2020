const router = require('express').Router();

let Discussion = require('../models/discussion.model');

router.route('/').get((req, res) => {
    Discussion.find()
        .then(qa => res.json(qa))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:code').get((req, res) => {
    let code = req.params.code;

    Discussion.findOne({ code })
        .then(qa => res.json(qa))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { title, code, body } = req.body;

    const newDiscussion = new Discussion({ title, code, body });

    newDiscussion.save()
        .then(() => res.json('Discussion added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(async (req, res) => {
    const id = req.params.id;
    const { title, code, body } = req.body;

    Discussion.findById(id)
        .then(dis => {
            dis.title = title;
            dis.code = code;
            dis.body = body;

            dis.save()
                .then(() => res.json('Discussion updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete(async (req, res) => {
    const result = await Discussion.findOneAndDelete(req.body.id);

    res.json(result);
});

module.exports = router;