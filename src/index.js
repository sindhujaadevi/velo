import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './ducks';
import { BrowserRouter } from 'react-router-dom';
import App from './components/common/App';
import './styles/App.css';
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_zh from 'react-intl/locale-data/zh';
import messages_zh from "./localization/cn/zh.json";
import messages_en from "./localization/en/en.json";

const messages = {
  'zh': messages_zh,
  'en': messages_en
};

// localStorage.setItem('locale', navigator.language);

// const language = localStorage.getItem('locale').split(/[-_]/)[0];

addLocaleData([...locale_en, ...locale_zh]);

ReactDOM.render(
  <BrowserRouter>
    <IntlProvider locale='zh' messages={messages['zh']}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
