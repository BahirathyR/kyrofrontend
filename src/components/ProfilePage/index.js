import React, { useEffect, useState } from 'react'
import { InputAdornment, TextField, Grid, Button } from "@material-ui/core";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa"
import { RiFileUserLine } from "react-icons/ri"
import { BsTelephone } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"
import { useFormik } from 'formik';
import { validationSchema } from '../Validation'
import service, { getProfile, updateProfileById } from '../../service/service';
import { toast } from 'react-toastify';
import { styles } from '../styles';

const ProfilePage = () => {
  const [data, setData] = useState()
  const [item, setItem] = useState('')
  useEffect(() => {
    getProfile();
  }, [])
  const getProfile = async () => {
    const response = await service.getProfile()
    console.log("res", response.data)
    const result = response.data.map((list) => {
      return (
        setItem(list),
        localStorage.setItem("fname", list.firstname),
        localStorage.setItem("dname", list.displayname),
        localStorage.setItem("email", list.email),
        console.log("list", list)
      )
    })
  }
  const formik = useFormik({
    initialValues: {
      firstName: item.firstname,
      lastName: item.lastname,
      displayName: item.displayname,
      email: item.email,
      phoneNo1: item.phoneno1,
      phoneNo2: item.phoneno2,
      location: item.location,
      imagefile: 'userAcess.imagefile'
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async values => {
      console.log('values', values);
      const sendValue = {
        firstName: values.firstName,
        lastName: values.lastName,
        displayName: values.displayName,
        email: values.email,
        phoneNo1: values.phoneNumber,
        phoneNo1: values.phoneNumber,
        location: values.location
      };
      console.log('values', sendValue);
      try {
        const Updatedetails = await updateProfileById({
          firstname: values.firstName,
          lastname: values.lastName,
          displayname: values.displayName,
          email: values.email,
          phoneno1: values.phoneNumber,
          phoneno1: values.phoneNumber,
          location: values.location
        });
        console.log('updated', Updatedetails);
        if (Updatedetails.status == 200) {
          toast.success('successfully Updated');
        }
        else if (Updatedetails.status == 202) {
          toast.error('Failed to send');
        }
      }
      catch (e) {
        throw e;
      }
    }
  });
  return (
    <div class="row">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4} style={styles.container}>
          <Grid item md={6}>
            <div style={styles.dname}>
              <TextField
                variant='outlined'
                id="full-width-text-field"
                style={styles.textField}
                name='firstName'
                label='First Name'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <FaUserAlt />
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div style={styles.phone2}>
              <TextField
                variant='outlined'
                name='lastName'
                label='Last Name'
                style={styles.textField}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <FaUserAlt />
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4} style={styles.dcontainer}>
          <Grid item md={6}>
            <div style={styles.dname}>
              <TextField
                variant='outlined'
                id="full-width-text-field"
                style={styles.textField}
                name='displayName'
                label='Display Name'
                value={formik.values.displayName}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <RiFileUserLine size={20} />
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.displayName && Boolean(formik.errors.displayName)}
                helperText={formik.touched.displayName && formik.errors.displayName}
              />
            </div>
          </Grid>
          <Grid item md={6} style={{}}>
            <div style={{ marginLeft: '-30%' }}>
              <TextField
                variant='outlined'
                name='email'
                label='Email'
                style={styles.textField}
                value={formik.values.email}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AiOutlineMail size={20} />
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4} style={styles.phone1}>
          <Grid item md={6}>
            <div style={styles.dname}>
              <TextField
                variant='outlined'
                id="full-width-text-field"
                style={styles.textField}
                name='phoneNo1'
                label='Phone No(Work)'
                multiline
                value={formik.values.phoneNo1}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <BsTelephone size={20} />
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.phoneNo1 && Boolean(formik.errors.phoneNo1)}
                helperText={formik.touched.phoneNo1 && formik.errors.phoneNo1}
              />
            </div>
          </Grid>
          <Grid item md={6} >
            <div style={styles.phone2}>
              <TextField
                variant='outlined'
                id="full-width-text-field"
                style={styles.textField}
                name='phoneNo2'
                label='Phone No(Work)'
                value={formik.values.phoneNo2}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <BsTelephone size={20} />
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.phoneNo2 && Boolean(formik.errors.phoneNo2)}
                helperText={formik.touched.phoneNo2 && formik.errors.phoneNo2}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4} style={styles.location}>
          <Grid item md={6}>
            <div style={styles.dname}>
              <TextField
                variant='outlined'
                id="full-width-text-field"
                style={styles.textField}
                name='location'
                label='Location'
                multiline
                value={formik.values.location}
                onChange={formik.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <GrLocation size={20} />
                    </InputAdornment>
                  ),
                }}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} >
          <Grid item md={6}>
            <Button
              type='submit'
              variant='contained'
              py={2}
              px={4}
              my={1}
              style={styles.saveButton}
            >
              Save Changes
            </Button>
          </Grid>
          <Grid item md={6} >
            <Button
              type='reset'
              variant='contained'
              onClick={formik.resetForm}
              py={2}
              px={4}
              my={1}
              style={styles.saveButton}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
export default ProfilePage;
