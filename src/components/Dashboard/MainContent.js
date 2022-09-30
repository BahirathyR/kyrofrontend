import { Avatar, Box, Button, Card, Grid, IconButton, InputAdornment, Paper, TextField } from "@material-ui/core";
import ProfilePage from "../ProfilePage";
import dashboardStyle from "./DashboardStyle";
import { AiFillCamera } from "react-icons/ai";

const MainContent = () => {
  const classes = dashboardStyle();
  return (
    <div className="main" style={{ overflow: 'hidden' }}>
      <main className={classes.content}>
       <ProfilePage/>
      </main>
      <div style={{ display: 'flex' }}>
        <Button
          type='submit'
          variant='contained'
          style={{ color: 'white', background: '#800000', position: 'absolute', top: '5%', marginLeft: '-18%', width: '9%', fontSize: 10 }}
        >
          + Add Project
        </Button>
        <div >
          <Avatar
            id='avatar'
            // src={dashboardimage}
            style={{
              top: '3%',
              marginLeft: '-260%',
              width: '45px',
              height: '45px',
              color: 'black'
            }}
          // onClick={() => setProfileModal(true)}
          />
        </div>
        <div style={{ flex: 1, flexDirection: 'column' }}>
          <div>
            <div style={{
              marginTop: '20%'
            }}>
              <p style={{ marginLeft: '-150%',fontWeight:'bold' }}>{localStorage.getItem('fname')}</p>
              </div>
            <div style={{marginTop:'-18%'}}>
              <p style={{ marginLeft: '-150%', fontSize: 10 }}>Developer</p>
              </div>
          </div>
        </div>
      </div>
      <div className="column1">

        <label htmlFor='upload'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '220px' }}>
            <IconButton color='primary' aria-label='upload picture' component='span'>
              <Avatar
                id='avatar'
                variant="square"
                // src={dashboardimage}
                elevation={0}
                style={{

                  width: '100px',
                  height: '100px',
                  borderRadius: '10px'
                }}
              />
            </IconButton>
            <Avatar id='avatar'
              variant="square" style={{
                marginLeft: "-22px",
                borderRadius: '10px',
                background: 'white',
                width: '10%',
                height: '16%',
                marginTop: '10%'
              }}>
              <AiFillCamera fill="black" opacity={0.4} size={18} />
            </Avatar>
          </div>
        </label>
        <label htmlFor='avatar' />
        <input
          type='file'
          // onChange={(e)=>handleChange(e)}
          id='upload'
          accept='image/*'
          // value={formik.values.imagefile}
          style={{ display: 'none' }}

        />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-52px' }}><h4>{localStorage.getItem('dname')}</h4></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-38px' }}><p>{localStorage.getItem('email')}</p></div>
      </div>
    </div>


  );
};
export default MainContent;
