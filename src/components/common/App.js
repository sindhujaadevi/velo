import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteConfig } from '../../configuration/routeConfig';

import WhyVelo from '../../containers/partnerOnBoarding/whyVelo';
import Welcome from '../../containers/partnerOnBoarding/welcome';
import AboutYou from '../../containers/partnerOnBoarding/aboutYou/index';
import W8BEN from '../../containers/partnerOnBoarding/w8ben/index';
import TermsAndConditions from '../../containers/partnerOnBoarding/termsAndConditions';
import ReceivedApplication from '../../containers/partnerOnBoarding/receivedApplication';

export const App = () => (
  <main>
    <Switch>
      <Route path={RouteConfig.root} exact={true} component={WhyVelo} />
      <Route path={RouteConfig.welcome} component={Welcome} />
      <Route path={RouteConfig.aboutYou} component={AboutYou} />
      <Route path={RouteConfig.w8ben} component={W8BEN} />
      <Route path={RouteConfig.termsAndConditions} component={TermsAndConditions} />
      <Route path={RouteConfig.receivedApplication} component={ReceivedApplication} />
    </Switch>
  </main>
);

export default App;
