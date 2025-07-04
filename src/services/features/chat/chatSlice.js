import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    conversationId: null,

    conversations: [],
    messages: [],
    adminsAndClientsOnlineList: [],
    unreadMessages: [],
    currentConversationId: null,

    orderMessages: [],
    orderUnreadMessages: [],
    currentOrderConversationId: null,
    orderInfo: null,

    inboxConversationId: null,
  },
  reducers: {
    setInboxConversationId: (state, action) =>
      (state = { ...state, inboxConversationId: action.payload }),

    setOrderInfo: (state, action) =>
      (state = { ...state, orderInfo: { ...action.payload } }),

    setConversationId: (state, action) =>
      (state = { ...state, conversationId: action.payload }),

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

    setOrderMessages: (state, action) => {
      const orderMessages = [...action.payload];
      orderMessages.sort(
        (a, b) => new Date(a?.dateTime) - new Date(b?.dateTime)
      );

      return (state = { ...state, orderMessages });
    },

    updateOrderMsgAction: (state, action) => {
      const message = action.payload;

      // Find the index of the existing message (if it exists)
      const isExist = state.orderMessages.findIndex(
        (item) => item?._id === message?._id
      );

      // Create a copy of the current messages
      const updatedMessages = [...state.orderMessages];

      if (isExist !== -1) {
        // Replace the existing message
        updatedMessages[isExist] = message;
      } else {
        // Add the new message at the end
        updatedMessages.push(message);
      }

      // Return the updated state with the modified messages array
      return {
        ...state,
        orderMessages: updatedMessages,
      };
    },

    setOrderMessage: (state, action) => {
      const message = action.payload;

      const isExist = state.orderMessages.some(
        (item) => item?._id === message?._id
      );

      if (!message.isDelivered && !message.action) {
        if (isExist) return state;

        const updatedState = {
          ...state,
          orderMessages: [...state.orderMessages, message],
        };

        if (
          state.currentOrderConversationId !==
          (message.order._id || message.order)
        ) {
          updatedState.orderUnreadMessages = [
            ...state.orderUnreadMessages,
            message,
          ];
        }

        return updatedState;
      } else if (message.isDelivered && !message.action) {
        if (isExist) return state;

        const updatedState = {
          ...state,
          orderMessages: [...state.orderMessages, message],
        };

        if (
          state.currentOrderConversationId !==
          (message.order._id || message.order)
        ) {
          updatedState.orderUnreadMessages = [
            ...state.orderUnreadMessages,
            message,
          ];
        }

        if (state.orderInfo) {
          updatedState.orderInfo = {
            ...state.orderInfo,
            orderStatus: message.order.orderStatus,
          };
        }

        return updatedState;
      } else if (message.isDelivered && message.action && state.orderInfo) {
        const isExist = state.orderMessages.findIndex(
          (item) => item?._id === message?._id
        );

        const updatedState = {
          ...state,
          orderMessages: [...state.orderMessages],
        };

        if (isExist !== -1) {
          updatedState.orderMessages[isExist] = message;
        } else {
          updatedState.orderMessages.push(message);
        }

        updatedState.orderInfo = {
          ...state.orderInfo,
          orderStatus: message.order.orderStatus,
          usedRevision: message.order.usedRevision,
        };

        return updatedState;
      }
    },

    setOrderUnreadMessage: (state, action) => {
      const message = action.payload;
      const isExist = state.orderUnreadMessages.some(
        (item) => item?._id === message?._id
      );

      if (isExist) return state;

      const updatedState = {
        ...state,
        orderUnreadMessages: [...state.orderUnreadMessages, message],
      };

      return updatedState;
    },

    setOrderUnreadMessages: (state, action) => {
      const orderUnreadMessages = [...action.payload];
      orderUnreadMessages.sort(
        (a, b) => new Date(a?.dateTime) - new Date(b?.dateTime)
      );

      return (state = { ...state, orderUnreadMessages });
    },

    setCurrentOrderConversationId: (state, action) => {
      return (state = { ...state, currentOrderConversationId: action.payload });
    },
  },
});

export const {
  setInboxConversationId,
  setOrderInfo,
  setConversationId,
  setConversations,
  setCurrentConversationId,
  setUnreadMessages,
  addMessage,
  setMessages,
  setAdminsAndClientsOnlineList,
  setOrderMessages,
  setOrderMessage,
  setOrderUnreadMessages,
  setOrderUnreadMessage,
  setCurrentOrderConversationId,
  updateOrderMsgAction,
} = chatSlice.actions;

export default chatSlice.reducer;
