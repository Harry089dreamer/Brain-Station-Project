import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
import Styles from "./Dashboardstyle.module.css";

const TotalEmployees = () => {
  return (
    <div padding={10}>
      <PieChart 
      series={[
        {
          data: [
            { id: 0, value: 60, label: 'Men' },
            { id: 1, value: 45, label: 'Women' },
          ],
        },
      ]}
      width={300}
      height={200}
    />
    </div>
  );
};

export default TotalEmployees;
