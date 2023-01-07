import React from "react";

const InputPanel = ({
  formData,
  valueData,
  setValueData,
  activeUnit,
  setActiveUnit,
}) => {
  return (
    <div>
      <div>
        <h4 className="h4 mx-auto d-flex justify-content-center my-3">
          Input-Panel
        </h4>
        {formData?.fields?.map(({ _uid, label, type }) => (
          <div className="my-3 d-flex" key={_uid}>
            <label className="h6 mx-3 d-flex align-items-center" htmlFor={_uid}>
              {label}
            </label>
            <input
              className="form-control"
              onChange={(e) =>
                setValueData(e.target.value, label?.toLowerCase())
              }
              value={
                label?.toLowerCase() === "height"
                  ? valueData?.input?.structures[0]?.elements[0]?.geometry
                      ?.height
                  : valueData?.input?.structures[0]?.elements[0]?.geometry?.[
                      "cross-section"
                    ]?.rectangle?.[label?.toLowerCase()]
              }
              type={type}
              id={_uid}
              placeholder={`Enter ${label}`}
            />
            <span className="h6 mx-3 d-flex align-items-center">
              {activeUnit?.input}
            </span>
          </div>
        ))}
      </div>
      <div>
        <h4 className="h4 mx-auto d-flex justify-content-center my-3">
          Localisation Options
        </h4>
        <div className="d-flex">
          <span className="m-3 h5 text-secondary">Input Unit</span>
          <div className="p-2">
            <button
              onClick={() =>
                activeUnit?.input !== "m" && setActiveUnit("m", "input")
              }
              className={
                activeUnit?.input === "m"
                  ? "btn btn-success"
                  : "btn btn-secondary"
              }
            >
              Meters
            </button>
          </div>
          <div className="p-2">
            <button
              onClick={() =>
                activeUnit?.input !== "ft" && setActiveUnit("ft", "input")
              }
              className={
                activeUnit?.input === "ft"
                  ? "btn btn-success"
                  : "btn btn-secondary"
              }
            >
              feet
            </button>
          </div>
        </div>
        <div className="d-flex">
          <span className="m-3 h5 text-secondary">Output Unit</span>
          <div className="p-2">
            <button
              onClick={() =>
                activeUnit?.output !== "m" && setActiveUnit("m", "output")
              }
              className={
                activeUnit?.output === "m"
                  ? "btn btn-success"
                  : "btn btn-secondary"
              }
            >
              Meters
            </button>
          </div>
          <div className="p-2">
            <button
              onClick={() =>
                activeUnit?.output !== "ft" && setActiveUnit("ft", "output")
              }
              className={
                activeUnit?.output === "ft"
                  ? "btn btn-success"
                  : "btn btn-secondary"
              }
            >
              feet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPanel;
