const router = require('express').Router();

let QaLive = require('../models/qalive.model');

router.route('/').get((req, res) => {
    QaLive.find()
        .then(qa => res.json(qa))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:code').get((req, res) => {
    let code = req.params.code;

    QaLive.findOne({ code })
        .then(qa => res.json(qa))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { title, code, persistence, logToStudent } = req.body;

    const newQaLive = new QaLive({ title, code, persistence, logToStudent });

    newQaLive.save()
        .then(() => res.json('QA added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(async (req, res) => {
    const id = req.params.id;
    const { title, code, persistence, logToStudent } = req.body;

    QaLive.findById(id)
        .then(qa => {
            qa.title = title;
            qa.code = code;
            qa.persistence = persistence;
            qa.logToStudent = logToStudent;

            qa.save()
                .then(() => res.json('QA Live updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    QaLive.findByIdAndDelete(req.params.id)
        .then(() => res.json('QA Live deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;