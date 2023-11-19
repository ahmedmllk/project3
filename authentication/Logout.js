const bcrypt = require('bcrypt');
const User = require('../model/UserSchema');

const logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.send('Logout successful!');
      }
    });
  };

  module.exports=logout