import { Grid,Paper } from '@mui/material';
import React from 'react';
import EmployeeInfo from './EmployeeInfo';
import { styled } from '@mui/material/styles';
import TopHiringSources from './TopHiringSources';
import EmployeesAvailability from './EmployeesAvailability';
import TotalEmployees from './TotalEmployees';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Left = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Item><EmployeeInfo/></Item>
        </Grid>
        <Grid item xs={6} sx={{flexGrow:1}}>
            <Item><EmployeesAvailability/></Item>
        </Grid>
        <Grid item xs={6} >
            <Item sx={{flexGrow:1, minHeight:385, display:'flex', justifyContent:'center', alignContent:'center'}}>HIII<TotalEmployees/></Item>
        </Grid>
        <Grid item xs={12} >
            <Item><TopHiringSources/></Item>
        </Grid>

    </Grid>
  )
}

export default Left
