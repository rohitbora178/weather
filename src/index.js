import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store

// Create a React root using ReactDOM.createRoot and specify the root element by its ID
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application inside a StrictMode wrapper
root.render(
  <React.StrictMode>
    {/* Provide the Redux store to the entire application using the Provider component */}
    <Provider store={store}>
      <App /> {/* Render your main application component */}
    </Provider>
  </React.StrictMode>
);
