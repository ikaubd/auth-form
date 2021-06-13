import { Auth } from '../pages';

export interface RouteI {
  path: string;
  component: React.FC;
}

export interface RoutesI {
  [key: string]: RouteI;
}

export const ROUTES: RoutesI = {
  AUTH: {
    path: '/',
    component: Auth,
  },
};
