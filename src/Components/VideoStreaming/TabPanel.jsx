/* eslint-disable react/prop-types */
// TabPanel.js

import { Box } from "@mui/material";

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
