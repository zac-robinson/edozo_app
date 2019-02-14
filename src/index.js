import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './components/app-component';
import rootReducer from './reducers/reducers';
import { fetchWeatherData } from './actions/current-weather-actions';
import { fetchForecastData } from './actions/five-day-forecast-actions';

const devTools =
  (window.__REDUX_DEVTOOLS_EXTENSION__ && [
    window.__REDUX_DEVTOOLS_EXTENSION__()
  ]) ||
  [];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    ...devTools
  )
);

store.dispatch(fetchWeatherData('London')).then(() => {
  store.dispatch(fetchForecastData('London')).then(() =>
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  );
});
