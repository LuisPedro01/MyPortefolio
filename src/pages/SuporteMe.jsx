import React from "react";
import { MonetizationOn } from "@mui/icons-material";
// import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import "../css/SuportMe.css";

function SuportMe() {
  return (
    <div className="suport1">
      <h1>
        If you want to collaborate with me and give some support donate some!
      </h1>
      <p>Donate to Ko-Fi</p>
      <a href="https://ko-fi.com/luisrodrigues66052" target="_blank">
        <MonetizationOn />
      </a>
    </div>
  );
}

export default SuportMe;
