import { Box, Divider, Drawer, IconButton, Hidden, Typography } from "@material-ui/core";
import dashboardStyle from "./DashboardStyle";
import { Menu } from "@material-ui/icons";

import DrawerList from "./DrawerList";

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

          <Box p={2} component="span" style={{ display: 'flex' }}>
          <div style={{float:'left'}}>
              <img src='assets/images/kyro-logo.png' style={{width: '220%',marginTop:'10%' }} />
            </div>
            <div style={{float:'right',marginLeft:'50%'}}>
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
