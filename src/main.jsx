import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Імпортуємо Provider
import store from './components/redux/slice/store'; // Імпортуємо Redux store
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Додаємо Provider для Redux */}
      <App />
    </Provider>
  </StrictMode>,
);