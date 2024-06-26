import { TextField } from "@mui/material";
import React from "react";
import "./TextFieldCommon.css";

/**
 *
 * @param {{
 * type: "button"|"checkbox"|"color"|"date"|"datetime-local"|"email"|"file"|"hidden"|"image"|"month"|"number"|"password"|"radio"|"range"|"reset"|"search"|"submit"|"tel"|"text"|"time"|"url"|"week";
 * label;
 * value;
 * onChange;
 * }}
 *
 */

const TextFieldCommon = ({
  type = "text",
  label = "",
  value = "",
  onChange = {},
}) => {
  return (
    <TextField
      autoComplete="off"
      autoCorrect="off"
      type={type}
      label={label[0].toUpperCase() + label.substring(1).toLowerCase()}
      variant="outlined"
      value={value}
      onChange={onChange}
      InputLabelProps={{
        style: {
          color: "#f3ab4c",
        },
      }}
    />
  );
};

export default TextFieldCommon;
