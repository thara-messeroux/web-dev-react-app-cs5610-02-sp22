import {FIND_ALL_TUITS} from "../actions/tuits-actions";
const tuitsReducer = (state = [], action) => {
  console.log("action tuit is", action)
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits
    default:
      return state;
  }
}
export default tuitsReducer;
