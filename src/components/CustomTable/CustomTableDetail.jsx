import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import variable from "../../variables/Variables";
import { connect, useDispatch, useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 333,
    fontSize: 14,
    "& .MuiTypography-body1": {
      fontSize: 14,
    },
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    "& .PrivateTabIndicator-colorSecondary-37": {
      backgroundColor: variable.primaryColor,
    },
    "& .MuiTab-wrapper": {
      fontSize: 12,
      alignItems: "baseline",
    },
  },
}));
export default function VerticalTabs() {
  const classes = useStyles();
  let tabPanelChildren = "";
  const [value, setValue] = React.useState(0);
  const tripTabHeader = useSelector(
    (state) => state.trip.tripDetail.tabsHeader
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("header", tripTabHeader);
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tripTabHeader.map((header) => {
          return (
            <Tab label={header.value} {...a11yProps(header[variable.id])} />
          );
        })}
      </Tabs>
      {tripTabHeader.map((header) => {
        switch (header.value) {
          case variable.location:
            tabPanelChildren = header.value;
            break;
          case variable.trucks:
            tabPanelChildren = header.value;
            break;
          case variable.contracts:
            tabPanelChildren = header.value;
            break;
        }
        return <TabPanel value={value} index={header[variable.id]}>
            {tabPanelChildren}
        </TabPanel>;
      })}
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
