import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    conversations: [],
    messages: [],
    adminsAndClientsOnlineList: [],
    unreadMessages: [],
    currentConversationId: null,
  },
  reducers: {
    setCurrentConversationId: (state, action) => {
      return (state = { ...state, currentConversationId: action.payload });
    },

    setUnreadMessages: (state, action) => {
      const unreadMessages = [...action.payload];
      unreadMessages.sort(
        (a, b) => new Date(a?.dateTime) - new Date(b?.dateTime)
      );

      return (state = { ...state, unreadMessages });
    },

    addMessage: (state, action) => {
      const message = action.payload;
      const isExist = state.messages.some((item) => item?._id === message?._id);

      if (isExist) return state;

      const updatedState = {
        ...state,
        messages: [...state.messages, message],
      };

      if (state.currentConversationId !== message.conversationId.id) {
        updatedState.unreadMessages = [...state.unreadMessages, message];
      }

      return updatedState;
    },

    setMessages: (state, action) => {
      const messages = [...action.payload];
      messages.sort((a, b) => new Date(a?.dateTime) - new Date(b?.dateTime));

      return (state = { ...state, messages });
    },

    setConversations: (state, action) => {
      const conversations = [...action.payload];
      conversations.sort(
        (a, b) => new Date(a?.createdAt) - new Date(b?.createdAt)
      );

      return (state = { ...state, conversations });
    },

    setAdminsAndClientsOnlineList: (state, action) => {
      return (state = { ...state, adminsAndClientsOnlineList: action.payload });
    },
  },
});

export const {
  setConversations,
  setCurrentConversationId,
  setUnreadMessages,
  addMessage,
  setMessages,
  setAdminsAndClientsOnlineList,
} = chatSlice.actions;

export default chatSlice.reducer;
