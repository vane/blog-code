import { createMuiTheme, makeStyles } from '@material-ui/core/styles/index'

export const drawerWidth = 240;
export const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000'
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    error: {
      main: '#000',
      light: '#000',
      dark: '#000',
      contrastText: '#000',
    },
    divider: '#000',
    action: {
      active: '#000',
      hover: '#000',
      selected: '#000',
      disabled: '#000',
      disabledBackground: '#000',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: '#fff',
      hint: '#fff',
      icon: '#fff',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      default: '#000',
      paper: '#000',
    },
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        color: '#fff',
        backgroundColor: '#000',
      }
    },
    MuiIconButton: {
      root: {
        color: '#fff',
      }
    },
    MuiSvgIcon: {
      root: {
        fill: '#fff',
      }
    },
    MuiFormLabel: {
      root: {
        color: '#fff',
      }
    },
  }
});

export const themeStyles = makeStyles(theme => ({
  roomDrawerLabel: {
    paddingLeft: '10px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBarFull: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));
