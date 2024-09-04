import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    onlineUsers: [],
    messageNotification: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const message = action.payload;

      const isExist = state.messages.find((item) => item?._id === message?._id);

      if (!isExist) {
        return (state = {
          ...state,
          messages: [...state.messages, message],
        });
      }

      return (state = [...state.messages]);
    },

    setMessages: (state, action) => {
      const messages = [...action.payload];
      messages.sort((a, b) => new Date(a?.dateTime) - new Date(b?.dateTime));

      return (state = { ...state, messages });
    },

    setOnlineUsers: (state, action) => {
      return (state = { ...state, onlineUsers: action.payload });
    },
  },
});

export const { addMessage, setMessages, setOnlineUsers } = chatSlice.actions;

export default chatSlice.reducer;
