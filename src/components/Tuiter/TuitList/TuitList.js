import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {findAllTuits} from "../actions/tuits-actions";

const TuitList = () => {
  const tuits = useSelector(
      state => state.tuits);
  console.log("tuits are",tuits)
  const dispatch = useDispatch();
  useEffect(() =>
          findAllTuits(dispatch),
      []);

  return (
      <ul>
        {tuits.map && tuits.map(tuit=> {
          console.log("tuit is",tuit)
        })}
      </ul>
  );
};
export default TuitList;