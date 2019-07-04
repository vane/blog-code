import React, {useRef, useEffect} from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { drawerWidth, themeStyles } from './customTheme'
import { makeStyles } from '@material-ui/core/styles/index'


const styles = makeStyles(theme => ({
  chatMessage: {
    whiteSpace: 'pre',
  },
  marginHeader: {
    paddingTop: '40px',
  },
  content: {
    flexGrow: 1,
    padding: '80px 0 0 15px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowY: 'auto',
    marginLeft: 0,
    marginBottom: '100px',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    marginBottom: '100px',
    overflowY: 'auto',
    padding: '80px 0 0 15px',
  },
}));


export const ChatContent = ({modelState, modelActions}) => {
  const classes = styles();
  
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  }
  if(messagesEndRef != null && messagesEndRef.current != null) scrollToBottom();
  
  return (<div className={clsx(classes.content, { [classes.contentShift]: modelState.drawerOpen })}>
    {modelState.messageList.map((text, i) => {
      return <Typography className={classes.chatMessage} key={`msg_${i}`}>{text}</Typography>
    })}
    <div ref={messagesEndRef} style={{marginBottom:'25px'}}/>
  </div>);
}