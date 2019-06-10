import { createStore } from 'redux';
import bandReducer from './reducers/bandReducer';


export default createStore(
   bandReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
