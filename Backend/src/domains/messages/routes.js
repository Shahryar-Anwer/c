const express = require("express");

const User = require("../authentication/model");

const Chat = require("./model");

const router = express.Router();

router.post("/send-message", async (req, res) => {
  try {
    /* Check if a chat between 2 users exists or not */
    const chatExists = await Chat.findOne({
      chatBetween: { $all: [req.body.userOne, req.body.userTwo] },
    });

    /* If a chat does not exist, then start a new chat. */
    if (!chatExists) {
      const updateChatListOfBothUsers = await User.find({
        email: { $in: [req.body.userOne, req.body.userTwo] },
      });

      updateChatListOfBothUsers[0].chats.push({
        name: updateChatListOfBothUsers[1].name,
        email: updateChatListOfBothUsers[1].email,
      });

      updateChatListOfBothUsers[0].save();

      updateChatListOfBothUsers[1].chats.push({
        name: updateChatListOfBothUsers[0].name,
        email: updateChatListOfBothUsers[0].email,
      });

      await updateChatListOfBothUsers[1].save();

      const newChat = await Chat.create({
        chatBetween: [req.body.userOne, req.body.userTwo],
        allMessages: [req.body.message],
      });

      return res.json({
        newChat,
      });
    }

    /* else push the messages to the existing chat. */
    chatExists.allMessages.push(req.body.message);

    const updatedChat = await chatExists.save();

    return res.json({
      updatedChat,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
});

router.post("/get-chat-with-a-user", async (req, res) => {

  try {

    /* Check if a chat between 2 users exists or not */
    const chat = await Chat.findOne({
      chatBetween: { $all: [req.body.userOne, req.body.userTwo] },
    });

    if (chat) {

      return res.json({
        chat,
      }); 

    }

    return res.json({
      chat,
      message : "No message exist between both users"
    })

  } catch (error) {}
});

router.post('/send-image' , (req , res) => {

});

module.exports = router;
