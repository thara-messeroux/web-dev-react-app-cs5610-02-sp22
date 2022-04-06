import * as service from '../services/tuits-service';
export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';
export const createTuit = async (dispatch, tuit) => {}
export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  console.log("tuits in action are", tuits)
  dispatch({
    type: FIND_ALL_TUITS,
    tuits
  });
}
export const updateTuit = async (dispatch, tuit) => {}
export const deleteTuit = async (dispatch, tuit) => {}
