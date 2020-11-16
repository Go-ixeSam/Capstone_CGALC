import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton, TextField, ButtonBase } from "@material-ui/core";
import * as icon from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import * as variable from "../../variables/Variables";
const StyledTextField = withStyles((theme) => ({
  root: {
    //   fontSize:14,
    "& .MuiInputBase-root": {
      height: 30,
      borderRadius: 0,
      fontSize: 14,
      border: "1px lightgrey",
      "& .MuiInputBase-formControl": {
        "& .Mui-focused": {
          border: "1px " + variable.primaryColor,
        },
      },
    },
  },
}))(TextField);

const StyledIcontButton = withStyles((theme) => ({
  root: {
    "& .MuiButtonBase-root	": {
      padding: 0,
    },
  },
}))(ButtonBase);

export const SearchBar = (argument) => {
  return (
    <StyledTextField
      id="search"
      {...argument}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <StyledIcontButton onClick={argument.click}>
              <icon.Search />
            </StyledIcontButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
