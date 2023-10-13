import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const chartsParams = {
   height:200,
  };
const legendPlacement = {
    margin: {
      top: 10,
      right: 10,
    },
  };
  
export default function BasicLineChart() {
  return (
    <Box sx={{padding:2}}>
    <h4>Employee Info</h4>
    <LineChart
    {...chartsParams}
      series={[
        {
          data: [20,21,23,19,20,23,22,20,21,23,19,20],
          label:'available',
          color:'orange',
        },
      ]}
      {...legendPlacement}
      xAxis={[{scaleType:'point', data:xLabels}]}  
      yAxis={[{
        min: 0, // minimum value
        max: 30 // maximum value
      }]}
      sx={{'& .MuiLineElement-root': {
        strokeWidth: 6,
      },
      '& .MuiLineElement-series-Germany': {
        fill: "url('#myGradient')",
      },
    }}   
    />
    </Box>
  );
}