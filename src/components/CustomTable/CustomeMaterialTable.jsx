import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import clsx from "clsx";
import React from "react";
import DatePicker from "react-datepicker";
import { Helper } from "../../helper";
import { primaryColor } from "../../variables/Variables";
import { MyButton } from "../CustomButton/CustomButton";
import CustomFilter from "../CustomFilter/FilterItem.jsx";
import "../CustomTable/CustomeTable.css"
const StyledTablePagination = withStyles((theme) => ({
  root: {
    fontSize: 14,
  },
  menuItem: {
    fontSize: 14,
  },
  caption: {
    fontSize: 14,
  },
  toolbar: {
    border: "none",
    minHeight: 35,
  },
}))(TablePagination);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: primaryColor,
    color: theme.palette.common.white,
    fontSize: "14px",
    // border: "none",
  },
  body: {
    // backgroundColor: "white",
    fontSize: 14,
    borderTop: "1px grey",
    borderLeft: "none",
    borderRight: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-child(even)": {
      backgroundColor: "whitesmoke",
    },
    border: "none",
  },
  hover: {
    backgroundColor: "red",
    background: "red",
  },
}))(TableRow);

// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

const useStyles = makeStyles({
  root: {
    padding: 10,
    // borderRadius: 5,
  },
  table: {
    minWidth: "100%",
    border: "none",
    borderRadius: 5,
  },
  container: {
    maxHeight: 500,
  },
  tableFooter: {
    display: "flex",
    // textAlign: "-webkit-right",
    marginTop: 10,
    justifyContent: "space-between",
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
  },
  bsClass: {
    height: 30,
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto #ff4a55",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#ff4a55",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#ff4a55",
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const array = [];

  //loop an object
  for (let key in row) {
    if (key != "checked") {
      array.push({
        key: key,
        content: row[key],
      });
    }
  }

  return (
    <React.Fragment>
      <StyledTableRow hover={true} key={"body" + row.id}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell>
          <StyledCheckbox
            checked={row.checked}
            onChange={props.action}
            // inputProps={{ "aria-labelledby": labelId }}
          />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.destination}
        </StyledTableCell>
        <StyledTableCell>{row.dateCreated}</StyledTableCell>
        <StyledTableCell>{row.status}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <div>
                <p style={{ fontSize: 14 }}>
                  <b>Starting:</b> {row.destination}
                </p>
                <p style={{ fontSize: 14 }}>
                  <b>Destination:</b> {row.destination}
                </p>
              </div>
              <Box style={{ height: 10 }} />
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <StyledTableRow>
                    {array.map((obj) => {
                      return (
                        <StyledTableCell>
                          <b>{obj.key}</b>
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                  <StyledTableRow
                    key={"span" + row.id}
                    style={{ backgroundColor: "white" }}
                  >
                    {array.map((obj) => {
                      return <StyledTableCell>{obj.content}</StyledTableCell>;
                    })}
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

// class TripNotification extends React.Component
export const CustomMaterialTable = (argument) => {
  const buttonHeight = 30;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  var columns = [...argument.tableHeader];
  const [rows, setRows] = React.useState(argument.tableBody.record);
  const [time, setTime] = React.useState(new Date());
  // const [open, setOpen] = React.useState(false);

  const handleRow = (id) => {
    rows.map((row) => {
      if (row.id == id) {
        row.checked = !row.checked;
      } else {
        console.log("Nope");
      }
    });
    setRows([...rows]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleTime = (event) => {
    let time = new Helper();
    console.log(time.formatTime(event));
    setTime(event);
  };

  const CustomInput = ({ value, onClick }) => (
    <input
      className="form-control"
      onClick={onClick}
      value={value}
      style={{ width: 100, height: 30, borderRadius: 0 }}
    />
  );

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <CustomFilter label="Date time">
          {/* <div style={{display:"flex",alignItems:"baseline"}}> */}
          <div style={{ display: "flex" }}>
            <DatePicker
              selected={time}
              // showTimeInput
              customInput={<CustomInput />}
              onChange={(event) => {
                handleTime(event);
              }}
              // dateFormat="MM/dd/yyyy h:mm aa"
              dateFormat="MM/dd/yyyy"
            />
            <Box
              height={30}
              width={20}
              className="perfectCenter"
              textAlign={"center"}
              style={{ backgroundColor: "#98e6d4" }}
            >
              To
            </Box>
          </div>
        </CustomFilter>
      </div>
      <Box height={20} />
      <Paper className={classes.root} variant="outlined" square>
        <TableContainer stickyHeader className={classes.container}>
          <Table aria-label="customized table" size="small">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Select</StyledTableCell>
                {columns.map((column) => (
                  <StyledTableCell
                    key={"header" + column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <Row
                      row={row}
                      action={(event) => {
                        handleRow(row.id);
                      }}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <TableFooter> */}
        <div className={classes.tableFooter}>
          <div className={classes.flexRow}>
            <MyButton
              bsStyle="info"
              text="New trip"
              style={{
                height: buttonHeight,
                borderRadius: 0,
                padding: "0px 16px",
              }}
            />
            <MyButton
              bsStyle="danger"
              text="Delete"
              style={{
                height: buttonHeight,
                borderRadius: 0,
                padding: "0px 16px",
                marginLeft: 5,
              }}
            />
          </div>

          {/* <StyledTablePagination
          // style={{ margin: 0,marginLeft }}
          rowsPerPageOptions={[10, 25, 100]}
          // component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        ></StyledTablePagination> */}
        </div>
        {/* </TableFooter> */}
      </Paper>
    </React.Fragment>
  );
};
// }
