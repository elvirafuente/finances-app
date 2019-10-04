import React from 'react';
import './App.scss';
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import { loadTheme } from 'office-ui-fabric-react';

import { registerIcons } from '@uifabric/styling';
import { Route, Switch } from 'react-router-dom';

function App() {

  loadTheme({
    palette: {
      themePrimary: '#00849d',
      themeLighterAlt: '#f1fafb',
      themeLighter: '#c9e9ef',
      themeLight: '#9ed7e1',
      themeTertiary: '#4eb2c4',
      themeSecondary: '#1491a8',
      themeDarkAlt: '#00778d',
      themeDark: '#006577',
      themeDarker: '#004a58',
      neutralLighterAlt: '#f8f8f8',
      neutralLighter: '#f4f4f4',
      neutralLight: '#eaeaea',
      neutralQuaternaryAlt: '#dadada',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c8c8',
      neutralTertiary: '#81b5c4',
      neutralSecondary: '#619fb1',
      neutralPrimaryAlt: '#468a9e',
      neutralPrimary: '#004052',
      neutralDark: '#1a6378',
      black: '#0b5165',
      white: '#ffffff',
    }
  });

   registerIcons({
    icons: {
      'chart-line': <i className="fas fa-chart-line"></i>,
      'list-alt': <i className="far fa-list-alt"></i>,
      'sliders-h': <i className="fas fa-sliders-h"></i>,
      'bill' : <i className="fas fa-file-invoice-dollar"></i>,
      'burger': <i className="fas fa-hamburger"></i>,
      'door-open' : <i className="fas fa-door-open"></i>,
      'door-close' : <i className="fas fa-door-closed"></i>,
      'income' : <i className="fas fa-piggy-bank"></i>,
      'expence' : <i className="fas fa-wallet"></i> ,
      'job' : <i className="fas fa-robot"></i>,
      'side hustle' : <i className="fas fa-palette"></i>,
      'calendar' : <i className="far fa-calendar-alt"></i>,
      'calculator' : <i className="fas fa-calculator"></i>,
      'cliplist' : <i className="fas fa-clipboard-list"></i>,
      'groceries' : <i className="fas fa-shopping-basket"></i>,
      'pet': <i className="fas fa-paw"></i>,
      'transport': <i className="fas fa-car"></i>,
      'social': <i className="fas fa-glass-cheers"></i>,
      'health': <i className="fas fa-heartbeat"></i>,
      'save' : <i className="fas fa-save"></i>,
      'up': <i className="fas fa-chevron-up"></i>,
      'down': <i className="fas fa-chevron-down"></i>,
      'sticky-note': <i className="far fa-sticky-note"></i>,
      'plug': <i className="fas fa-plug"></i>,
    }
  })

  return (
    <>
      <Switch >
        <Route exact path='/' component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
