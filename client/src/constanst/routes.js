import Game from '@screens/Game';
import Setting from '@screens/Setting';

const routes = [
  {
    path: '/',
    renderComponent: Game,
    key: 1,
    name: 'Game',
    exact: true
  },
  {
    path: '/setting',
    renderComponent: Setting,
    key: 2,
    name: 'Setting',
    exact: false,
  }
];

export default routes;
