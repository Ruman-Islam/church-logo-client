import React, { useState, useRef } from "react";
import { FiSmile, FiPaperclip, FiZap } from "react-icons/fi";
import {
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

export default function ChatBox({ user }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [file, setFile] = useState(null);
  //const hiddenFileInput = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // -- Send Message Function to store new message -- //
  const handleSendMessage = () => {
    const newMessage = {
      role: "user",
      message: input,
      time: "",
      file: file,
    };
    setMessages([...messages, newMessage]);
    setInput("");
    setFile(null);
  };

  // -- Key Press Event to send message by pressing enter -- //
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // -- Open Dropdown Menu -- //
  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // -- Close Dropdown Menu -- //
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
        <img src="" alt="" className="w-10 h-10 rounded-full" />
        <div className="text-md">
          <div className="">
            {isUserMessage ? user.firstName : "Admin"}
            <span className="text-gray-500 text-sm"> {message.time}</span>
          </div>
          <div className="text-gray-500">
            {message.message}
            {message.file && (
              <div>
                {/* Render the file preview or download link */}
                {message.file && message.file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(message.file)}
                    alt={message.file.name}
                    className="w-24 h-24"
                  />
                )}
                {message.file && !message.file.type.startsWith("image/") && (
                  <span>
                    {message.file.name}
                    {/* (Unsupported file type:{" "}
                    {message.file.type}) */}
                  </span>
                )}
                <a href={URL.createObjectURL(message.file)} download={message.file.name}>Download</a>
              </div>
            )}
          </div>
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
        <IconButton onClick={handleDropdownClick}>
          <span>...</span>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleDropdownClose}
        >
          <MenuItem onClick={handleDropdownClose}>Action</MenuItem>
          <MenuItem onClick={handleDropdownClose}>Another action</MenuItem>
          <MenuItem onClick={handleDropdownClose}>Something else</MenuItem>
        </Menu>
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
          onKeyDown={handleKeyPress}
          className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm"
        />
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <div className="flex space-x-2">
              <FiSmile className="text-gray-500 w-4 h-4 cursor-pointer" />
              <div>
                <FiPaperclip
                  type="file"
                  className="text-gray-500 w-4 h-4 cursor-pointer"
                  //onClick={handleFileClick}
                />
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm"
                  onChange={handleFileChange}
                  //ref={hiddenFileInput}
                  //style={{ display: "none" }}
                />
              </div>
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
