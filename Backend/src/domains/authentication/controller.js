const bcrypt = require("bcryptjs");

const hashPassword = (simplePassword) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(simplePassword , salt);
  return(hash)

};

/* Sign-in functions */
const validatePassword = (simplePassword , hashedPassword) => {

    const passwordCorrect = bcrypt.compareSync(simplePassword , hashedPassword)

    return passwordCorrect

}

module.exports = {hashPassword , validatePassword}