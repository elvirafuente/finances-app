import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import {ProviderBudget} from './context/ContextBudget'

ReactDOM.render(
    <HashRouter>
        <ProviderBudget>
            <App />
        </ProviderBudget>
    </HashRouter>
, document.getElementById('root'));

