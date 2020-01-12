const router = require('express').Router();
const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = Bcrypt.hashSync(req.body.password, 10);

    const newUser = new User({email, password});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

function isCorrectPassword(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
          callback(err);
        } else {
          callback(err, same);
        }
    });
}

router.route('/login').post(function(req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
        isCorrectPassword(password, function(err, same) {
            console.log('test')
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '2h'
            });
            res.cookie('token', token, { httpOnly: true })
              .sendStatus(200);
          }
        });
      }
    });
  });

module.exports = router;