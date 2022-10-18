import React from "react";
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import "../assets/SuportMe.css";

function SuportMe() {
  return (
    <div className="suport1">
      <h1>
        If you want to collaborate with me and give some support donate some!
      </h1>
      <p>Donate to Ko-Fi</p>
      <a href="https://ko-fi.com/luisrodrigues66052" target="_blank">
        <MonetizationOnTwoToneIcon />
      </a>
    </div>
  );
}

export default SuportMe;
