import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Employeeservice from "../serivce/Employeeservice";
import { useParams } from "react-router-dom";
import {Box,TextField,Button} from '@mui/material'
import axios from "axios";
const UpdateEmployee = ()=>{
    const navigate = useNavigate("")
    const {id} = useParams()
    const [emailId,setemail] = useState("")
    const [firstName,setfirstname] = useState("")
    const [lastName,setlastname] = useState("")

    let employeedetails ={
      firstName,
      lastName,
      emailId
    }
    const submit = ()=>{
      Employeeservice.updateEmployee(id,employeedetails).then(res=>{
        navigate('/')
    
      }).catch((err)=>console.log(err))
  
    }
    const Cancel = ()=>{
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
          <h1>Update Employee</h1>
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
                Update
              </Button>
              <Button
              onClick={Cancel}
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
      )
  
}

export default UpdateEmployee