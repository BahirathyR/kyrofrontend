import { Avatar,Button, IconButton } from "@material-ui/core";
import ProfilePage from "../ProfilePage";
import dashboardStyle from "./DashboardStyle";
import { AiFillCamera } from "react-icons/ai";
import { styles } from "../styles";

const MainContent = () => {
  const classes = dashboardStyle();
  return (
    <div className="main" style={{ overflow: 'hidden' }}>
      <main className={classes.content}>
       <ProfilePage/>
      </main>
      <div style={styles.div}>
        <Button
          type='submit'
          variant='contained'
          style={styles.topButton}
        >
          + Add Project
        </Button>
        <div >
          <Avatar
            id='avatar'
            // src={dashboardimage}
            style={styles.avatar}
          // onClick={() => setProfileModal(true)}
          />
        </div>
        <div style={styles.sideHead}>
          <div>
            <div style={styles.headTop}>
              <p style={styles.headname}>{localStorage.getItem('fname')}</p>
              </div>
            <div style={styles.devhead}>
              <p style={styles.dev}>Developer</p>
              </div>
          </div>
        </div>
      </div>
      <div className="column1">
        <label htmlFor='upload'>
          <div style={styles.avatarhead}>
            <IconButton color='primary' aria-label='upload picture' component='span'>
              <Avatar
                id='avatar'
                variant="square"
                // src={dashboardimage}
                elevation={0}
                style={styles.avatarinside}
              />
            </IconButton>
            <Avatar id='avatar'
              variant="square" style={styles.ava}>
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
        <div style={styles.displayname}><h4>{localStorage.getItem('dname')}</h4></div>
        <div style={styles.displayemail}><p>{localStorage.getItem('email')}</p></div>
      </div>
    </div>
  );
};
export default MainContent;
