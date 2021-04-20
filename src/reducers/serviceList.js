import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE_FIELD} from '../actions/actionTypes'

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
  {id: nanoid(), name: 'Замена аккумулятора', price: 4000},
  {id: nanoid(), name: 'Замена микрофона', price: 2500},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    
      case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);

      case FILTER_SERVICE_FIELD:
        const { value } = action.payload;
        if (value === "") {
          return initialState;
        } else {
          // eslint-disable-next-line array-callback-return
          return state.filter((service) => {
            if (service.name.includes(value)) {
              return service.name;
            }
          });
        }
  
    default:
      return state;
  }
}
