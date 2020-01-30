
import { createStore } from 'redux';
import UserReducer from './reducer';

const store = createStore(UserReducer);

export default store;