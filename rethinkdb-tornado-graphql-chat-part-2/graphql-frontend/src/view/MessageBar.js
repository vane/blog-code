import React from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { drawerWidth } from './customTheme';
import { makeStyles } from '@material-ui/core/styles/index'


const styles = makeStyles(theme => ({
  content: {
    flexShrink: 0,
    backgroundColor: 'black',
    bottom: 0,
    position: 'fixed',
    width: '100%',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    paddingLeft: '20px',
  },
  contentShift: {
    bottom: 0,
    position: 'fixed',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    paddingLeft: drawerWidth,
  },
  input: {
    width: '100%',
  }
}))


export const MessageBar = ({modelState, modelActions}) => {
  const classes = styles();

  const [message, setMessage] = React.useState('');
  const [messageRows, setMessageRows] = React.useState(1);

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if(e.shiftKey) {
        setMessageRows(messageRows+1);
      } else {
        // for not adding last \n to message
        e.preventDefault();
        modelActions.addMessage(message);
        setMessage('');
        setMessageRows(1);
      }
    }
  }
  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  return (
    <div className={clsx(classes.content, { [classes.contentShift]: modelState.drawerOpen })} >
      <div >
        <TextField value={message} onChange={handleChange}
                   className={classes.input}
                   onKeyPress={handleKeyPress} multiline rows={messageRows}
                   variant="outlined" label="Write message" />
      </div>
    </div>
  )
}
