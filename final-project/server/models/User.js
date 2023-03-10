const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, 'First name should be at least 3 characters long!'],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, 'Last name should be at least 3 characters long!'],
    },
    email: {
      type: String,
      required: true,
      match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
    },
    imageUrl: {
      type: String,
      required: true,
      match: [/^https?:\/\/.+/, 'ImageUrl is not valid!'],
    },
    //isDeleted: {
    //  type: Boolean,
    //  default: false,
    //},
  },
  //{ timestamps: true }
);

const userModel = model('User', userSchema);
module.exports = {
  userModel,
};
