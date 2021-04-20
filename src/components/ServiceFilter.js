import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterService } from "../actions/actionCreators.js";

export default function ServiceFilter(props) {
  const item = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(filterService(value));
  };

  return (
    <form className="filter">
      <i className="filter icon"></i>
      <input name="value" onChange={handleChange} value={item.value} />
    </form>
  );
}
