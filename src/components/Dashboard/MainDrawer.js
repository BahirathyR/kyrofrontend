import { Box, Divider, Drawer, IconButton, Hidden, Typography } from "@material-ui/core";
import dashboardStyle from "./DashboardStyle";
import { Menu } from "@material-ui/icons";
import DrawerList from "./DrawerList";
import { styles } from "../styles";

const MainDrawer = ({ mobileOpen, setMobileOpen }) => {
  const classes = dashboardStyle();
  return (

    <nav className={classes.drawer}>
      <Hidden>
        <Drawer
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper
          }}
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
        >

          <Box p={2} component="span" style={styles.div}>
          <div style={{float:'left'}}>
              <img src='assets/images/kyro-logo.png' style={styles.image} />
            </div>
            <div style={styles.icon}>
            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              color="inherit"
               >
              <Menu />
              </IconButton>
            </div>
          </Box>
          <DrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default MainDrawer;
