import ReactDOM from 'react-dom';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {themeStyles, customTheme} from './view/customTheme';
import { modelStateGlobal } from './model';
import { ChatContent } from './view/ChatContent';
import { ChatBar } from './view/ChatBar';
import { ChatDrawer } from './view/ChatDrawer';
import { MessageBar } from './view/MessageBar';

const ChatApplication = () => {
  const [modelState, modelActions] = modelStateGlobal();
  const classes = themeStyles();
  return (
    <MuiThemeProvider theme={customTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <ChatBar modelState={modelState} modelActions={modelActions} />
        <ChatDrawer modelState={modelState} modelActions={modelActions} />
        <ChatContent modelState={modelState} modelActions={modelActions} />
        <MessageBar modelState={modelState} modelActions={modelActions} />
      </div>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<ChatApplication />, document.getElementById('app'));