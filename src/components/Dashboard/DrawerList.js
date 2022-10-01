import { List, ListItem, ListItemIcon, ListItemText, } from "@material-ui/core";
import {
  Dashboard,
  HouseTwoTone,
  VerifiedUser,
  ExitToApp
} from "@material-ui/icons";
import { styles } from "../styles";
import  ForumOutlinedIcon  from '@material-ui/icons/ForumOutlined';
import  DescriptionOutlinedIcon  from '@material-ui/icons/DescriptionOutlined';
import  BusinessOutlinedIcon  from '@material-ui/icons/BusinessOutlined';
import SettingsOutlinedIcon  from '@material-ui/icons/SettingsOutlined';

const navList = [

  { id: 6, linkName: "Home", icon: <HouseTwoTone /> },
  { id: 3, linkName: "Projects", icon: <VerifiedUser /> },
  { id: 1, linkName: "Dashboard", icon: <Dashboard /> },
  { id: 4, linkName: "Messages", icon: <ForumOutlinedIcon /> },
  { id: 2, linkName: "Documents", icon: <DescriptionOutlinedIcon /> },
  { id: 7, linkName: "Organizations", icon: <BusinessOutlinedIcon /> },
  { id: 8, linkName: "Settings", icon: <SettingsOutlinedIcon /> },

];
const listdata=[    { id: 5, linkName: "Logout", icon: <ExitToApp /> },
]

const DrawerList = () => {
  return (
    <List>
      {navList.map((items) => (
        <ListItem key={items.id} button>
          <ListItemIcon>{items.icon}</ListItemIcon>
          <ListItemText>{items.linkName}</ListItemText>
        </ListItem>
      ))}

      {listdata.map((items) => (
        <ListItem key={items.id} button>
          <ListItemIcon style={styles.listItem}>{items.icon}</ListItemIcon>
            <ListItemText style={styles.listItem}>{items.linkName}</ListItemText>
          </ListItem>
      ))}
    </List>
  );
};

export default DrawerList;
