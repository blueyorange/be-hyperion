const User = require("../../models/users.model.js");
const Presentation = require("../../models/presentations.models.js");

const seed = async ({ users, presentations }) => {
  for (const user of users) {
    const newUser = new User(user);
    await newUser.save();
  }
  for (const presentation of presentations) {
    const newPresentation = new Presentation(presentation);
    await newPresentation.save();
  }
};

module.exports = seed;
