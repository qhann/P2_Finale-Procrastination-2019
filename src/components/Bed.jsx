import React, { Component } from "react";
import BedSvg from "./SVGs/BedSvg"
import BedLowerSvg from "./SVGs/BedLowerSvg";
import Moonlight from "./Moonlight";
import bedSideMask from "./bed-mask-side-bw.png"
import bedTopMask from "./bed-mask-top-bw.png"


class Bed extends Component {
    render() {
        const { onClick, hasPlayer, time } = this.props;


        return (
            <div className={"bed"}>
                <div className={"player"} >{hasPlayer ? "Player" : ""}</div>
                <Moonlight time={time} mask={bedTopMask} selector={"bed-top"} />
                <Moonlight time={time} mask={bedSideMask} selector={"bed-side"} vertical={true} />
                <Moonlight time={time} mask={bedSideMask} selector={"bed-side"} vertical={true} />
                <BedSvg onClick={onClick} />
                {/* <BedLowerSvg onClick={onClick} /> */}
            </div>
        );
    }
}

export default Bed;
