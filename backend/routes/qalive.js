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
    const { title, code, persistence, logToParent } = req.body;

    const newQaLive = new QaLive({ title, code, persistence, logToParent });

    newQaLive.save()
        .then(() => res.json('QA added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:code').post(async (req, res) => {
    const reqCode = req.params.code;
    const { title, code, persistence, logToParent } = req.body;

    QaLive.findById(reqCode)
        .then(qa => {
            qa.title = title;
            qa.code = code;
            qa.persistence = persistence;
            qa.logToParent = logToParent;

            qa.save()
                .then(() => res.json('QA Live updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:code').delete(async (req, res) => {
    const result = await QaLive.findOneAndDelete(req.body.code);

    res.json(result);
});

module.exports = router;