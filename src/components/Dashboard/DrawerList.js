import { List, ListItem, ListItemIcon, ListItemText, } from "@material-ui/core";
import {
  Dashboard,
  HouseTwoTone,
  StarHalf,
  SupervisedUserCircle,
  VerifiedUser,
  VerticalSplit,
  ExitToApp
} from "@material-ui/icons";
import { styles } from "../styles";

const navList = [

    { id: 6, linkName: "Hostel", icon: <HouseTwoTone /> },
    { id: 1, linkName: "Dashboard", icon: <Dashboard /> },
    { id: 2, linkName: "Students", icon: <SupervisedUserCircle /> },
    { id: 3, linkName: "Teachers", icon: <VerifiedUser /> },
    { id: 4, linkName: "Staff", icon: <StarHalf /> },
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
