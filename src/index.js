import React from 'react';
import App from './App';
import { hydrate, render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
registerServiceWorker();