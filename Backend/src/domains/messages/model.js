const mongoose = require("mongoose");

const { Schema } = mongoose;

const messageSchema = new Schema({
  chatBetween: { type: Array, required: true },
  allMessages: [],
  message: { type: Object },
});

const Chat = mongoose.model("Messages", messageSchema);

module.exports = Chat;
