import React from "react";
import { Link } from "react-router-dom";

const Data = ({ data }) => {
  return (
    <div className="mt-3">
      <span className="d-flex justify-content-center ">
        <Link className="btn btn-info" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          Home
        </Link>
      </span>
      <h4 className="h4 mx-auto d-flex justify-content-center my-3">
        Output Data
      </h4>
      <pre
        className="bg-dark text-light"
        style={{ marginLeft: "125px", marginRight: "125px" }}
      >
        <span className="d-flex justify-content-center my-3">
          {JSON.stringify(data, undefined, 2)}
        </span>
      </pre>
    </div>
  );
};

export default Data;
