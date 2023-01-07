import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { VALUE_DATA } from "./data/data";
import Data from "./pages/Data";
import Home from "./pages/Home";

const App = () => {
  const [valueData, setValueData] = useState(VALUE_DATA);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home valueData={valueData} setValueData={setValueData} />}
        />
        <Route path="/api/data" element={<Data data={valueData} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
