import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableRow, TableCell } from "@material-ui/core";
import { primaryColor } from "../../variables/Variables";
export const StyledTableCell = withStyles((theme) => ({
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
    // sizeSmall: {
    //   padding: "0px 24px 0px 16px",
    // },
  },
}))(TableCell);
