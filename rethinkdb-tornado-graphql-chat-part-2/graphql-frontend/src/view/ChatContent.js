import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { themeStyles } from './customTheme';

export const ChatContent = ({modelState, modelActions}) => {
  const classes = themeStyles();

  return (<div className={clsx(classes.content, { [classes.contentShift]: modelState.drawerOpen })}>
  <Container>
    <div className={classes.drawerHeader} />
    <div className={classes.chatContent}>
      <div>
        {}
      </div>
      <div className={classes.chatInputContainer}>
        <TextField className={classes.chatInput} variant="outlined" label="Write message" />
      </div>
    </div>
  </Container>
  </div>);
}