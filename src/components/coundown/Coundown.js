import React from "react";
import Digit from "./digit/Digit";
const Coundown = (props) => {
    return <div className="d-flex mt-4">
        <Digit value={props.time.min} />
        <Digit value={props.time.sec} />
        <Digit value={props.time.milis} />
      </div>;
}

export default Coundown;