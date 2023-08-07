import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Typography } from "@mui/material";
import Employeeservice from "../serivce/Employeeservice";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Listemp = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    Employeeservice.getEmployee().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const addEmployee = (event) => {
   navigate('/add')
  };

  const DeleteEmp = (id)=>{
    Employeeservice.deleteEmployee(id).then((res)=>{
      Employeeservice.getEmployee().then((res)=>{
        setEmployees(res.data)
      })
    }).catch((err)=>console.log(err))

  }

  const UpdateEmp = (id)=>{
    navigate(`/update/${id}`)
  }

  return (
    <div style={{ margin: '2%' }}>
      <div style={{ marginLeft: '40%', marginTop: '5%' }}>
        <Typography sx={{ fontSize: '44px', color: 'black' }}>List Of Employee</Typography>
      </div>

      <TableContainer>
        <Button onClick={addEmployee} sx={{ backgroundColor: 'blue', color: 'black', width: '10%', marginLeft: '5%', ':hover': { backgroundColor: 'blue' } }}>Add Employee</Button>
        <Table sx={{ width: '90%', marginTop: '1%', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Employee ID</StyledTableCell>
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="left">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.firstName}</StyledTableCell>
                <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                <StyledTableCell align="left">{row.emailId}</StyledTableCell>
                <StyledTableCell align="left">
                  {/* Display any action here */}
                  <Button onClick={()=>UpdateEmp(row.id)} variant="contained" sx={{backgroundColor:'green',marginLeft:'8%',':hover':{backgroundColor:'green'}}}>Update</Button>
                  <Button onClick={()=>DeleteEmp(row.id)} variant="contained" sx={{marginLeft:'5%',backgroundColor:'red',':hover':{backgroundColor:'red'}}}>Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Listemp;
