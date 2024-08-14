import React, { useState } from "react";
import { FiSmile, FiPaperclip, FiZap } from "react-icons/fi";

export default function ChatBox({ user }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // -- Send Message Function to store new message -- //
  const handleSendMessage = () => {
    const newMessage = {
      role: "user",
      message: input,
      time: "",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  // -- Key Press Event to send message by pressing enter -- //
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // -- Render Message Function -- //
  const renderMessage = (message, index) => {
    const isUserMessage = message.role === "user";

    return (
      <div
        key={index}
        className={`flex ${
          isUserMessage
            ? "items-start space-x-3"
            : "justify-end items-start space-x-3"
        }`}
      >
        <img src="" alt="" className="w-10 h-10 rounded-full"/>
        <div className="text-md">
          <div className="">
            {isUserMessage ? user.firstName : "Admin"}
            <span className="text-gray-500 text-sm"> {message.time}</span>
          </div>
          <div className="text-gray-500">{message.message}</div>
        </div>
      </div>
    );
  };

  //---- Chat messages ----//
  const chat = {
    chatId: "1234",
    chatHolder: "32873",
    messages: [
      { role: "user", time: "08 Aug 2024, 19:29", message: "Hi there!" },
      { role: "admin", time: "09 Aug 2024, 13:20", message: "Hi mathilde!" },
      { role: "user", time: "09 Aug 2024, 22:04", message: "I need help" },
      {
        role: "admin",
        time: "09 Aug 2024, 22:04",
        message: "How may I help you?",
      },
      {
        role: "user",
        time: "10 Aug 2024, 21:31",
        message: "How many products are available at the moment?",
      },
      { role: "admin", time: "10 Aug 2024, 21:37", message: "Ten." },
      {
        role: "user",
        time: "11 Aug 2024, 12:13",
        message: "Is there any offer available?",
      },
      {
        role: "admin",
        time: "12 Aug 2024, 09:24",
        message: "You can enjoy 10% discount on every product.",
      },
      {
        role: "user",
        time: "13 Aug 2024, 22:31",
        message: "What if I order more than one?",
      },
      {
        role: "admin",
        time: "13 Aug 2024, 22:43",
        message: "In that case we can increase our discount to 15%.",
      },
    ],
  };

  // -- useEffect hook to fetch messages from chat object -- //
  React.useEffect(() => {
    setMessages(chat.messages);
  }, []);

  return (
    <div className="w-full mx-1 my-1 bg-white border-2 shadow-md rounded-lg p-6">
      {/*---- ChatBox Top ----*/}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div>
          <div className="text-md font-semibold text-gray-400 ">
            <span className="text-gray-600 underline">{user.firstName}</span>{" "}
            @mbelenga
          </div>
          <div className="text-sm text-gray-500">
            Last seen: 1 day ago | Local time: 13 Aug 2024, 21:25
          </div>
        </div>
        <div>...</div>
      </div>

      {/*---- ChatBox main section ----*/}
      <div className="space-y-8 overflow-y-scroll h-96 px-2">
        {messages.map(renderMessage)}
      </div>

      {/*---- ChatBox Input section ----*/}
      <div className="pt-4 mt-4">
        <input
          type="text"
          placeholder="Send message..."
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm"
        />
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <div className="flex space-x-2">
              <FiSmile className="text-gray-500 w-4 h-4 cursor-pointer" />
              <FiPaperclip className="text-gray-500 w-4 h-4 cursor-pointer" />
              <FiZap className="text-gray-500 w-4 h-4 cursor-pointer" />
            </div>
            <div className="border-l-2 border-gray-300 mx-4"></div>
            <button className="px-4 py-1 bg-black text-white rounded-lg text-sm">
              Create an Offer
            </button>
          </div>
          <button
            className="ml-2 text-sm text-gray-800 cursor-pointer"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
      {/*---- Chatbox Input section ends ----*/}
    </div>
  );
}
