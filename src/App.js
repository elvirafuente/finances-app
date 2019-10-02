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
      'file-invoice-dollar' : <i className="fas fa-file-invoice-dollar"></i>,
      'burger': <i className="fas fa-hamburger"></i>,
      'door-open' : <i className="fas fa-door-open"></i>,
      'door-close' : <i className="fas fa-door-closed"></i>,
      'piggy-bank' : <i class="fas fa-piggy-bank"></i>,
      'wallet' : <i class="fas fa-wallet"></i> ,
      'robot' : <i class="fas fa-robot"></i>,
      'palette' : <i class="fas fa-palette"></i>,
      'calendar' : <i class="far fa-calendar-alt"></i>
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
