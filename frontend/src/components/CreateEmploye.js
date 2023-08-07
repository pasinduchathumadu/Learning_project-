import React, { Component, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import Employeeservice from '../serivce/Employeeservice';
import { useNavigate } from 'react-router-dom';
const CreateEmploye = ()=>{
  const navigate = useNavigate("")
  const [emailId,setemail] = useState("")
  const [firstName,setfirstname] = useState("")
  const [lastName,setlastname] = useState("")

  let employee ={
    firstName,
    lastName,
    emailId
  }
  const submit = ()=>{
    Employeeservice.createEmployee(employee).then(res=>{
      navigate('/')
  
    })

  }
  const cancel = ()=>{
    navigate('/')
  }
 
    return (
      <Box
        sx={{
          margin: '10%',
          backgroundColor: 'white',
          padding: '2rem',
          border: '5px solid #ccc',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Create Employee</h1>
        <form style={{ width: '100%' }}>
          <div style={{ marginBottom: '1rem', marginLeft:'20%' }}>
            <TextField
              onChange={(e)=>setemail(e.target.value)}
              sx={{width:'80%'}}
              placeholder='Employee Email'
              variant="outlined"
              size="small"
            />
          </div>
          <div style={{ marginBottom: '1rem', marginLeft:'20%' }}>
            <TextField
                onChange={(e)=>setfirstname(e.target.value)}
                 sx={{width:'80%'}}
                 placeholder='First Name'
              variant="outlined"
              size="small"
            />
          </div>
          <div style={{ marginBottom: '1rem', marginLeft:'20%' }}>
            <TextField
              onChange={(e)=>setlastname(e.target.value)}
             sx={{width:'80%'}}
             placeholder='Last Name'
              variant="outlined"
              size="small"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button onClick={submit} variant="contained" color="primary" sx={{ width: '15%' }}>
              Save
            </Button>
            <Button
            onClick={cancel}
              variant="outlined"
              sx={{
                backgroundColor: 'red',
                color: 'black',
                marginLeft: '3%',
                width: '15%',
                ':hover': { backgroundColor: 'red' },
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Box>
    );
  }


export default CreateEmploye;
