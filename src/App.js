import React, { Fragment } from "react";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import ServiceFilter from "./components/ServiceFilter.js";

function App() {
  return (
    <Fragment>
      <ServiceAdd />
      <ServiceList />
      < hr />
      <ServiceFilter />
    </Fragment>
  );
}

export default App;
