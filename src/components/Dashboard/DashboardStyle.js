import { makeStyles } from "@material-ui/core";

const drawerWidth = 220;
const
  dashboardStyle = makeStyles((theme) => ({
    menuButton: {
      root: {
        display: "flex"
      },
      marginLeft: theme.spacing(16),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      color: 'black',
    },
    typo: {
       marginTop: '-10%'
    },
    AppBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(75% - ${drawerWidth}px)`,
      },
      background: 'white',
      padding: '2%',
      marginLeft: '5%',
      marginRight: '23%',
      boxShadow: '0 0 0px 0.1px #ccc',
      border: '1px solid #FFF',

    },

    content: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1,
      padding: theme.spacing(20),
      width: '70%',
      height: '100px',
    boxShadow: '0 0 5px 5px #ccc',
borderRadius: '5px',
      border: '1px solid #FFF',
      background: 'white',
      marginTop: '12%',
      marginRight: '30%',
      marginLeft: '18%'

    },

    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      },
      "& ::-webkit-scrollbar": {
        display: "none"
      }
    },
    TemporaryDrawer: {
      "& ::-webkit-scrollbar": {
        display: "none"
      }
    },

    drawerPaper: {
      width: drawerWidth
    },

    toolbar: theme.mixins.toolbar
  }));

export default dashboardStyle;
