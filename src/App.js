import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Welcome from './welcome';
import ForWhat from './forwhat';
import SDS from './sds';
import ContactMe from './contactme';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDataFromChild = (newValue) => {
    setValue(newValue);
  };

  return (
    <div class="h-screen bg-grey-200">
      <Box sx={{ width: '100%' }} class="h-screen">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Welcome" {...a11yProps(0)} />
            <Tab label="What For" {...a11yProps(1)} />
            <Tab label="Why SDS" {...a11yProps(2)} />
            <Tab label="Contact Me" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Welcome sendDataToParent={handleDataFromChild}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ForWhat sendDataToParent={handleDataFromChild}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SDS sendDataToParent={handleDataFromChild}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ContactMe />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default App;
