import React, { useState } from "react";
import InputPanel from "../../components/InputPanel";
import OutputPanel from "../../components/OutputPanel";
import ElevationView from "../../components/ElevationView";
import PlaneView from "../../components/PlaneView";
import { INPUT_FORM_DATA } from "../../data/input-form";
import { Link } from "react-router-dom";
import "./style.css";

const Home = ({ valueData, setValueData }) => {
  const [activeUnit, setActiveUnit] = useState({ input: "m", output: "m" });

  const handleSetValueData = (value, type) => {
    if (type === "height") {
      setValueData({
        ...valueData,
        input: {
          ...valueData?.input,
          structures: [
            {
              ...valueData?.input?.structures[0],
              elements: [
                {
                  ...valueData?.input?.structures[0]?.elements[0],
                  geometry: {
                    ...valueData?.input?.structures[0]?.elements[0]?.geometry,
                    height: value,
                  },
                },
              ],
            },
          ],
        },
        output: {
          ...valueData?.output,
          elementResults: [
            {
              ...valueData?.output?.elementResults[0],
              result: {
                ...valueData?.output?.elementResults[0]?.result,
                positions: [
                  {
                    ...valueData?.output?.elementResults[0]?.result
                      ?.positions[0],
                    foundation: {
                      ...valueData?.output?.elementResults[0]?.result
                        ?.positions[0]?.foundation,
                      volume:
                        parseInt(value) *
                        parseInt(
                          valueData?.input?.structures[0]?.elements[0]
                            ?.geometry?.["cross-section"]?.rectangle?.width
                        ) *
                        parseInt(
                          valueData?.input?.structures[0]?.elements[0]
                            ?.geometry?.["cross-section"]?.rectangle?.length
                        ),
                    },
                  },
                ],
              },
            },
          ],
        },
      });
    } else if (type === "width" || type === "length") {
      setValueData({
        ...valueData,
        input: {
          ...valueData?.input,
          structures: [
            {
              ...valueData?.input?.structures[0],
              elements: [
                {
                  ...valueData?.input?.structures[0]?.elements[0],
                  geometry: {
                    ...valueData?.input?.structures[0]?.elements[0]?.geometry,
                    "cross-section": {
                      rectangle: {
                        ...valueData?.input?.structures[0]?.elements[0]
                          ?.geometry?.["cross-section"]?.rectangle,
                        [type]: value,
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
        output: {
          ...valueData?.output,
          elementResults: [
            {
              ...valueData?.output?.elementResults[0],
              result: {
                ...valueData?.output?.elementResults[0]?.result,
                positions: [
                  {
                    ...valueData?.output?.elementResults[0]?.result
                      ?.positions[0],
                    foundation: {
                      ...valueData?.output?.elementResults[0]?.result
                        ?.positions[0]?.foundation,
                      volume:
                        type === "width"
                          ? parseInt(
                              valueData?.input?.structures[0]?.elements[0]
                                ?.geometry?.height
                            ) *
                            parseInt(value) *
                            parseInt(
                              valueData?.input?.structures[0]?.elements[0]
                                ?.geometry?.["cross-section"]?.rectangle?.length
                            )
                          : parseInt(
                              valueData?.input?.structures[0]?.elements[0]
                                ?.geometry?.height
                            ) *
                            parseInt(
                              valueData?.input?.structures[0]?.elements[0]
                                ?.geometry?.["cross-section"]?.rectangle?.width
                            ) *
                            parseInt(value),
                    },
                  },
                ],
              },
            },
          ],
        },
      });
    }
  };

  const handleGetDimension = () => {
    const length =
      valueData?.input?.structures[0]?.elements[0]?.geometry?.["cross-section"]
        ?.rectangle?.length || 1;
    const width =
      valueData?.input?.structures[0]?.elements[0]?.geometry?.["cross-section"]
        ?.rectangle?.width || 1;
    const height =
      valueData?.input?.structures[0]?.elements[0]?.geometry?.height || 1;

    return [width, height, length];
  };

  const handleSetActiveUnit = (unit, type) => {
    if (type === "input") {
      setActiveUnit({ ...activeUnit, input: unit });
    } else {
      setActiveUnit({ ...activeUnit, output: unit });
    }
  };

  return (
    <>
      <div className="home-view">
        <InputPanel
          formData={INPUT_FORM_DATA}
          valueData={valueData}
          setValueData={handleSetValueData}
          activeUnit={activeUnit}
          setActiveUnit={handleSetActiveUnit}
        />
        <div>
          <ElevationView args={handleGetDimension()} />
          <PlaneView args={handleGetDimension()} />
        </div>
        <OutputPanel
          activeUnit={activeUnit?.output}
          value={
            valueData?.output?.elementResults[0]?.result?.positions[0]
              ?.foundation?.volume
          }
        />
      </div>
    </>
  );
};

export default Home;
