import { combineReducers } from "redux";
import PatientStore from "./PatientStore";
import DogStore from "./DogStore";
const appReducer = combineReducers({
  patient: PatientStore,
  Dog: DogStore,
});

export default (state, action) => appReducer(state, action);
