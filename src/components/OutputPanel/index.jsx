import React from "react";
import { Link } from "react-router-dom";

const OutputPanel = ({ value, activeUnit }) => {
  return (
    <div>
      <h6 className="h4 mx-auto d-flex justify-content-center my-3">
        Output-Panel
      </h6>
      <div className="d-flex">
        <label className="h6 mx-3 d-flex align-items-center" htmlFor="output">
          Volume
        </label>
        <input
          className="form-control"
          type="number"
          placeholder="Volume"
          value={value && value}
          disabled
        />
        <span className="h6 mx-3 d-flex align-items-center">{activeUnit}</span>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <Link className="btn btn-success" to="/api/data">
          View JSON Data
        </Link>
      </div>
    </div>
  );
};

export default OutputPanel;
