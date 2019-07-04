import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { themeStyles } from './customTheme';

export const ChatBar = ({modelState, modelActions}) => {
  const classes = themeStyles();
  
  const handleDrawerOpen = () => {
    modelActions.drawerVisible(true);
  }
  return (
    <AppBar
      position="fixed"
      color="default">
      <Toolbar
        className={clsx(classes.appBarFull, {
          [classes.appBarShift]: modelState.drawerOpen,
        })}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, modelState.drawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {`#${modelState.currentRoom}`}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
