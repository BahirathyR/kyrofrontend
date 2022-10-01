import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from "@material-ui/core";
import dashboardStyle from "./DashboardStyle";
import { styles }  from '../styles'

const DashboardAppbar = ({ mobileOpen, setMobileOpen }) => {
  const current = new Date('2022', '2', '28');
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date=current.toDateString().split(' ').slice(1).join(' ')
  const classes = dashboardStyle();
  return (
    <div style={styles.div}>
      <div style={styles.div1}>
    <AppBar position="absolute" elevation={0} className={classes.AppBar}>
      <Toolbar>
            <Typography style={styles.heading} variant="h7">Good morning, {localStorage.getItem('fname')}</Typography>
            <div style={styles.headdate}>
            <Typography style={styles.date} variant="h7">{date}</Typography>
            </div>
            <div style={styles.profile}>
              <Typography style={styles.profhead} variant="h8">My Profile</Typography>
              </div>
      </Toolbar>
        </AppBar>
        </div>
      </div>
  );
};

export default DashboardAppbar;
