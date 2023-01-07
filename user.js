const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = new mongoose.Schema({
name: {
required: true,
type: String,
},
nickname: {
required: true,
type: String,
},
email: {
type: String,
required: [true, 'Please provide your email'],
unique: true,
lowercase: true,
validate: [validator.isEmail, 'Please provide a valid email']
},
password: {
required: true,
type: String
  },
favorites: {
required: true,
type: [String],
},
});

module.exports = mongoose.model("User", userSchema);

async function saveUser(email) {
if (!validator.isEmail(email)) {
console.error('Please provide a valid email');
return;
}

try {
const user = new User({ email });
await user.save();
} catch (error) {
console.error(error.message);
}
}