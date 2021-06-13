import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import { AppRouting } from './routing/AppRouting';

export const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="page">
        <AppRouting />
      </div>
    </Router>
  );
};
