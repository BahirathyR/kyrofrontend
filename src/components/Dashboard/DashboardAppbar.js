import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import dashboardStyle from "./DashboardStyle";

const DashboardAppbar = ({ mobileOpen, setMobileOpen }) => {
  const current = new Date('2022', '2', '28');
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date=current.toDateString().split(' ').slice(1).join(' ')
  const classes = dashboardStyle();
  return (
    <div style={{ display: 'flex' }}>
      <div style={{float:'right'}}>
    <AppBar position="absolute" elevation={0} className={classes.AppBar}>
      <Toolbar>

            <Typography style={{ color: 'black', marginTop: '-12%', marginLeft: '-5%', fontWeight: 'bold' }} variant="h7">Good morning, {localStorage.getItem('fname')}</Typography>
            <div style={{marginTop: '-4%', marginLeft: '-27%',opacity:0.4}}>
            <Typography style={{ color: 'black', fontWeight: 'normal' }} variant="h7">{date}</Typography>
            </div>
            <div style={{marginTop: '8%', marginLeft: '-12%'}}>
              <Typography style={{ fontSize: '5', color: 'black',  fontFamily: 'sans-serif', fontWeight: 'bold' }} variant="h8">My Profile</Typography>
              </div>
      </Toolbar>
        </AppBar>
        </div>
      </div>
  );
};

export default DashboardAppbar;
