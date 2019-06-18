import React, { Component } from "react";

class StatusBar extends Component {
  render() {
    const { value, label, onClick } = this.props;
    let width = window.innerWidth * 0.11
    let height = window.innerHeight * 0.026

    let styles = {
      width: width + "px",
      height: height + "px",
      backgroundPositionX: (width / 100) * value + "px"
    }

    return (
      <div className={"status-bar-frame " + label} style={{background: "white"}}>
        <div className={"status-bar"} style={styles}>
          <p className={"status-label"} style={{ color: "black" }}>{label}</p>
          {/* <p className={"status-label"} style={{color: "white"}}>{label}</p> */}
        </div>
      </div>
    );
  }
}

export default StatusBar;
