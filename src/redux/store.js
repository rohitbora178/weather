import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Import your rootReducer from the appropriate file
import rootSaga from './saga'; // Import your rootSaga from the appropriate file

// Create a Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store by combining your rootReducer and applying the Saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the rootSaga to start watching for actions and performing sagas
sagaMiddleware.run(rootSaga);

// Export the configured store
export default store;
