import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store'; // import your Redux store
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
