import { FILTER_SERVICE_FIELD } from "../actions/actionTypes.js";

const initialState = {
  value: "",
};

export default function serviceFilterReducer(state = initialState, action) {

  switch (action.type) {
    case FILTER_SERVICE_FIELD:
      const { value } = action.payload;
      return { value };
      // return {...initialState}
    default:
      return state;
  }
}
