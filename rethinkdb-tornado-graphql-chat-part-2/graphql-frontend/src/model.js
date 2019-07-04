import React from 'react';
import useGlobalHook from 'use-global-hook';

const modelState = {
  drawerOpen: true,
  currentRoom: 'general',
  roomList: ['general', 'test'],
  myself: 'testUser',
  directList: ['testUser'],
  messageList: [],
}

const modelStateActions = {
  drawerVisible: (store, value) => {
    console.log(value);
    store.setState({drawerOpen: value});
  },
  currenRoomChange: (store, value) => {
    store.setState({currentRoom: value})
  },
  roomAdd: (store, value) => {
    store.state.roomList.push(value);
    store.setState({roomList: store.state.roomList, currentRoom: value});
  },
  removeRoom: (store, value) => {
    store.state.roomList = store.state.roomList.filter((val) => val !== value);
    store.setState({roomList: store.state.roomList});
  },
  addMessage: (store, value) => {
    store.state.messageList.push(value);
    store.setState({messageList: store.state.messageList});
  },
}

export const modelStateGlobal = useGlobalHook(React, modelState, modelStateActions);
