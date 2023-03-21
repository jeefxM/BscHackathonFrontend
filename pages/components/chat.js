import React from "react";
import { useEffect, useState, useReducer } from "react";
import Gun from "gun";
import { Modal, Input } from "@geist-ui/core";

const gun = Gun({
  peers: ["http://localhost:5050"],
});

const currentState = {
  messages: [],
};

const reducer = (state, message) => {
  return {
    messages: [message, ...state.messages],
  };
};
const Chat = () => {
  const [messageText, setMessageText] = useState("");
  const [state, dispatch] = useReducer(reducer, currentState);
  const [name, setName] = useState("");

  // fires immediately the page loads
  useEffect(() => {
    const messagesRef = gun.get("MESSAGES");
    messagesRef.map().on((m) => {
      dispatch({
        sender: m.sender,
        avatar: m.avatar,
        content: m.content,
        timestamp: m.timestamp,
      });
    });
  }, []);

  // remove duplicate messages
  const newMessagesArray = () => {
    const formattedMessages = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value);
      return (
        index ===
        state.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });

    return formattedMessages;
  };
  // save message to gun / send message
  const sendMessage = () => {
    const storedName = localStorage.getItem("name");
    if (!storedName) {
      secondHandler();
      if (name) {
        localStorage.setItem("name", name);
        setName(name);
      } else {
        return;
      }
    } else {
      setName(storedName);
    }

    const messagesRef = gun.get("MESSAGES");

    const firstLetter = name.charAt(0).toUpperCase();

    const messageObject = {
      sender: name,
      avatar: `https://eu.ui-avatars.com/api/?name=${firstLetter}&background=&color=fff`,
      content: messageText,
      timestamp: Date().substring(16, 21),
    };

    messagesRef.set(messageObject);
    setMessageText("");
  };

  const [secondModal, setSecondModal] = useState(false);
  const secondHandler = () => setSecondModal(true);
  const closeSecondHandler = (event) => {
    setSecondModal(false);
    console.log("closed");
  };

  return (
    <div
      className="relative h-full w-full bg-white ml-3 rounded-2xl sm:h-96"
      style={{ overflow: "hidden", overflowX: "hidden" }}
    >
      <div className="absolute top-0 max-h-full overflow-y-scroll w-96 bg-white rounded-2xl">
        <ul className="space-y-6">
          {newMessagesArray().map((msg, index) => (
            <li
              key={index}
              className="flex items-center"
              style={{ "--tw-before": "none" }}
            >
              <img
                alt="avatar"
                src={msg.avatar}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <span className="text-gray-600">{msg.sender}</span>
                <span className="bg-gray-100 rounded-lg px-4 py-2">
                  {msg.content}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 w-80 ml-1 bg-white pb-2">
        <input
          placeholder="Type a message..."
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          className="w-full border-2 border-gray-200 rounded-lg py-2 px-4 bg-gray-100 focus:outline-none focus:border-blue-500 sm:w-56"
        />
        <button
          onClick={sendMessage}
          className="mt-1 bg-blue-500 hover:opacity-75 text-white py-2 px-10 rounded-lg "
        >
          Send
        </button>
        <Modal
          visible={secondModal}
          onClose={closeSecondHandler}
          key="secondmodal"
        >
          <Modal.Content>
            <p>Write your Name:</p>
          </Modal.Content>
          <Input width="100%" onChange={(e) => setName(e.target.value)}></Input>
          <Modal.Action passive onClick={() => closeSecondHandler(false)}>
            Submit
          </Modal.Action>
        </Modal>
      </div>
    </div>
  );
};

export default Chat;
