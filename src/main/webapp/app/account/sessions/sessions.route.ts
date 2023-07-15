import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import SessionsComponent from './sessions.component';

const sessionsRoute: Route = {
  path: 'sessions',
  component: SessionsComponent,
  title: 'Sessions',
  canActivate: [UserRouteAccessService],
};

export default sessionsRoute;
