import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Add from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline';
import { themeStyles } from './customTheme';
import { useTheme } from '@material-ui/core/styles/index';

export const ChatDrawer = ({modelState, modelActions}) => {
  const classes = themeStyles();
  const theme = useTheme();

  const handleDrawerClose = () => {
    modelActions.drawerVisible(false);
  }

  const handleAddRoom = () => {

  }

  const handleSwitchRoom = (value) => {
    modelActions.currenRoomChange(value);
  }

  const handleRemoveRoomChat = (value) => {
    modelActions.removeRoom(value);
  }

  const handleRemoveDirectChat = () => {
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={modelState.drawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <Typography className={classes.roomDrawerLabel}>Chat Rooms</Typography>
      <List>
        {modelState.roomList.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} onClick={() => handleSwitchRoom(text)} />
            <ListItemIcon onClick={() => handleRemoveRoomChat(text)}><RemoveCircle /></ListItemIcon>
          </ListItem>
        ))}
      </List>
      <ListItem button key='add_room'>
        <IconButton onClick={handleAddRoom}><Add /></IconButton>
      </ListItem>
      <Divider />
      <Typography className={classes.roomDrawerLabel}>Direct messages</Typography>
      <List>
        {modelState.directList.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} onClick={() => handleSwitchRoom(text)} />
            <ListItemIcon onClick={() => handleRemoveDirectChat(text)}><RemoveCircle /></ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
