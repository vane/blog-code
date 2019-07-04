import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { themeStyles } from './customTheme';

export const ChatContent = ({modelState, modelActions}) => {
  const classes = themeStyles();
  const [message, setMessage] = React.useState('');
  const [messageList, setMessageList] = React.useState([]);
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      messageList.push(message);
      setMessageList(messageList);
      setMessage('');
    }
  }
  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  return (<div className={clsx(classes.content, { [classes.contentShift]: modelState.drawerOpen })}>
  <Container>
    <div className={classes.drawerHeader} />
    <div className={classes.chatContent}>
      <div>
        {messageList.map((text, i) => {
          return <Typography key={`msg_${i}`}>{text}</Typography>
        })}
      </div>
      <div className={classes.chatInputContainer}>
        <TextField className={classes.chatInput}
                   value={message}
                   onChange={handleChange}
                   onKeyPress={handleKeyPress}
                   variant="outlined" label="Write message" />
      </div>
    </div>
  </Container>
  </div>);
}