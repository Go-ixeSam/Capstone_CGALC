import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React from "react";
import { Helper } from "../../helper";
import * as variable from "../../variables/Variables";
import { MyButton } from "../CustomButton/CustomButton";
import { StyledCheckbox } from "../CustomCheckbox/CustomCheckbox.jsx";
import CustomFilter from "../CustomFilter/FilterItem.jsx";
import "../CustomTable/CustomeTable.css";
import { CustomeDatePicker } from "../FilterOption/FilterOption";
import { SearchBar } from "../Search/Search";
import { StyledTableCell } from "./StyledCell";
import { StyledTableRow } from "./StyledRow";
import { connect, useDispatch, useSelector } from "react-redux";
import { modifyContract, ModifyContractFomr } from "../../redux";
import contractType from "../../redux/contract/contractType";
import { store } from "../../redux/store";
import { useFormResult } from "../ByMySelf/Form.js";
import ContractType from "../../redux/contract/contractType";
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

const useStyles = makeStyles({
  root: {
    padding: 10,
    "& .MuiPaper-root": {
      height: 200,
    },
  },
  table: {
    minWidth: "100%",
    border: "none",
    borderRadius: 5,
  },
  container: {
    height: 200,
  },
  tableFooter: {
    display: "flex",
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

const RowNoExpand = (props) => {
  const { row, columns, rows } = props;
  const [open, setOpen] = React.useState(false);

  const array = []; // mảng sẽ chứa từng phần tử của row
  let cells = [];
  const timeFormat = new Helper();

  //loop an object
  for (let key in row) {
    if (key != "checked") {
      array.push({
        key: key,
        content: row[key],
      });
    }
  }

  /**
   * *Chỉ hiện những dữ liệu trùng với header
   */
  {
    array.map((arr) => {
      columns.map((header) => {
        if (header.id == arr.key) {
          /**
           * ! Nếu phát hiện ra header là time thì sẽ format lại 1 tí
           */
          if (header.id == variable.time) {
            cells.push(timeFormat.formatTime(new Date(arr.content)));
          } else {
            cells.push(arr.content);
          }
        }
      });
    });
  }

  return (
    <React.Fragment>
      <StyledTableRow id={row[variable.id]} hover onClick={props.click}>
        <StyledTableCell>
          <StyledCheckbox check={row.checked} onChange={props.action} />
        </StyledTableCell>
        {cells.map((cell, index) => {
          return (
            <StyledTableCell
              key={"contentCell" + index}
              style={{ padding: "0px 24px 0px 16px" }}
            >
              {cell}
            </StyledTableCell>
          );
        })}
      </StyledTableRow>
    </React.Fragment>
  );
};

function Row(props) {
  const { row, columns } = props;
  const [open, setOpen] = React.useState(false);

  const array = []; // mảng sẽ chứa từng phần tử của row
  let cells = [];

  //loop an object
  for (let key in row) {
    if (key != "checked") {
      array.push({
        key: key,
        content: row[key],
      });
    }
  }

  /**
   * *Chỉ hiện những dữ liệu trùng với header
   */
  {
    array.map((arr) => {
      console.log("arr=", arr);
      columns.map((header) => {
        if (header.id == arr.key) {
          // console.log("header= ", header);
          cells.push(arr.content);
        }
      });
    });
  }

  return (
    <React.Fragment>
      <StyledTableRow hover={true}>
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
          <StyledCheckbox check={row.checked} onChange={props.action} />
        </StyledTableCell>
        {cells.map((cell, index) => {
          return (
            <StyledTableCell key={"contentCell" + index}>
              {cell}
            </StyledTableCell>
          );
        })}
      </StyledTableRow>

      {/*
       *Phần row detail
       */}
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
                  <b>ID:</b> {row.id}
                </p>
                <p style={{ fontSize: 14 }}>
                  <b>Starting:</b> {row.startingLocation}
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
                        <StyledTableCell key={"detailCellHeader" + obj.key}>
                          <b>{obj.key}</b>
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                  <StyledTableRow
                    style={{ backgroundColor: "white" }}
                  ></StyledTableRow>
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
const CustomMaterialTable = (argument) => {
  // const buttonHeight = 30;
  const classes = useStyles();
  const buttonsConfig = argument.buttons;
  var columns = [...argument.tableHeader];

  const contractForm = useSelector((state) => state.contract.contractForm);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState(argument.tableBody.record);
  const [time, setTime] = React.useState(new Date());
  const [rowClicked, setRowClicked] = React.useState({});
  const contract = useFormResult();

  //filter
  const filterRequired = argument.filterList;
  let filterItems = [];
  let filterItem = <div></div>;

  /**
   * !Dành cho những table ko cần show detail ở ngay trong bảng
   */
  let showDetail = <StyledTableCell></StyledTableCell>;
  let select = <StyledTableCell>Select</StyledTableCell>;
  argument.actionDisable.map((show) => {
    switch (show) {
      case variable.showDetail:
        showDetail = (
          <StyledTableCell style={{ display: "none" }}></StyledTableCell>
        );
        break;
      case variable.showSelect:
        select = (
          <StyledTableCell style={{ display: "none" }}>Select</StyledTableCell>
        );
        break;
    }
  });

  filterRequired.map((filter) => {
    switch (filter) {
      case variable.searchFilter:
        filterItem = (
          <div style={{ display: "flex" }}>
            <CustomFilter label="Date created">
              <div style={{ display: "flex" }}>
                <CustomeDatePicker
                  time={time}
                  change={(date) => {
                    handleTime(date);
                  }}
                />
              </div>
            </CustomFilter>
          </div>
        );
        filterItems.push(filterItem);
        break;
      case variable.timeFilter:
        filterItem = (
          <div style={{ display: "flex" }}>
            <CustomFilter label="Search">
              <div style={{ display: "flex" }}>
                <SearchBar id="search" defaultValue="Aha" variant="outlined" />
              </div>
            </CustomFilter>
          </div>
        );
        filterItems.push(filterItem);
    }
  });

  const handleRow = (id) => {
    rows.map((row) => {
      if (row.id == id) {
        row[variable.check] = !row[variable.check];
      } else {
        console.log("Nope");
      }
    });
    setRows([...rows]);
  };

  const handleContractRecordClick = (row) => {
    let tmp = [...contractForm];
    tmp.map((inRow) => {
      inRow.row.cols.map((inCol) => {
        inCol.elementConfig.value = row[inCol.elementConfig.name];
      });
    });
    console.log("form", tmp);

    /**
     * * luu lai contract record dc click, de co update thi dua vao day
     */
    setRowClicked(row);

    /**
     * * Tien hanh thay doi contract form de hien thi du lieu tu record dc click
     */
    dispatch(ModifyContractFomr(tmp));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  /**
   * *Time vẫn sẽ là định dạng date, chỉ show format text cho user mà thôi
   * *Khi người dùng chọn ngày nào thì list ở dưới sẽ filter theo ngày đó
   * @param {*} event
   */
  const handleTime = (event) => {
    /**
     * ! cách lấy state ở store dành cho functinal component
     */
    const state = store.getState();
    const record = state.contract.contracts.record;
    let time = new Helper();
    console.log(time.formatTime(event), "và hàng ở store= ", record);
    const eventFormat = time.formatDateOnly(event); // time chon tu Datepicker dc format

    /**
     * * ta sẽ lấy dữ liệu trực tiếp từ store, vì cái này chỉ lọc cho user xem mà thôi
     * * và sẽ reset lại mỗi khi mở lại
     */
    const newArr = record.filter(
      (row) =>
        /**
         * ! so sanh bằng định dạng Date()
         */
        time.formatDateOnly(new Date(row[variable.time])) == eventFormat
    );

    setTime(event);
    setRows([...newArr]); // set lai list
  };

  const deleteRows = () => {
    const newArr = rows.filter((row) => row[variable.check] == false);
    console.log("mew", newArr);
    setRows([...newArr]);
  };

  function updateContract() {
    let tmp = { ...rowClicked };
    for (let key in tmp) {
      for (let keyInContractForm in contract) {
        if (key == keyInContractForm) {
          tmp[key] = contract[keyInContractForm];
        }
      }
    }

    // rows.map((row) => {
    //   console.log(row.id, " vaf tmp= ", tmp[variable.id]);
      
    // });
    const index = rows.indexOf(rowClicked);
    rows[index]={...tmp}
    setRows(rows);
    console.log(tmp, rows);
    dispatch(modifyContract(rows, ContractType.UPDATE_CONTRACT));
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {filterItems.map((item) => {
          return <div style={{ marginRight: 3, zIndex: 3 }}>{item}</div>;
        })}
      </div>

      <Box height={20} />
      <Paper className={classes.root} variant="outlined" square>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="customized table" size="small">
            <TableHead>
              <StyledTableRow>
                {showDetail}
                {select}
                {columns.map((column) => (
                  <StyledTableCell key={"header" + column.id}>
                    {column.value}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  if (argument.detail != "none") {
                    return (
                      <Row
                        row={row}
                        action={(event) => {
                          handleRow(row.id);
                        }}
                        columns={columns}
                        key={"row" + row.id}
                        rows={rows}
                      />
                    );
                  } else {
                    return (
                      <RowNoExpand
                        row={row}
                        action={(event) => {
                          handleRow(row.id);
                        }}
                        // click={handleRowClick(row[variable.id])}
                        columns={columns}
                        key={"row" + row.id}
                        rows={rows}
                        click={(event) => {
                          handleContractRecordClick(row);
                        }}
                      />
                    );
                  }
                })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <TableFooter> */}
        <div className={classes.tableFooter}>
          <div className={classes.flexRow}>
            {buttonsConfig.buttons.map((button) => {
              let btn = <MyButton />;
              switch (button.config.text) {
                case variable.deleteButton:
                  btn = (
                    <MyButton
                      style={buttonsConfig.style}
                      {...button.config}
                      onClick={deleteRows}
                    />
                  );
                  break;
                case variable.addContract:
                  btn = (
                    <MyButton
                      style={buttonsConfig.style}
                      {...button.config}
                      onClick={argument.addTrip}
                    />
                  );
                  break;
                case variable.updateButton:
                  btn = (
                    <MyButton
                      style={buttonsConfig.style}
                      {...button.config}
                      onClick={updateContract}
                    />
                  );
                  break;
                case variable.arrangeGoods:
                  btn = (
                    <MyButton
                      style={buttonsConfig.style}
                      {...button.config}
                      // onClick={argument.addTrip}
                    />
                  );
                  break;
              }
              return btn;
            })}
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
export default CustomMaterialTable;
// export default connect(null, { ModifyContractFomr })();
