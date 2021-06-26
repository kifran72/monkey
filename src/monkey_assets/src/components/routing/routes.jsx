// Components
import Home from '../home/home';
import About from '../home/about';
import Welcome from '../home/welcome';
import ContentNotLogged from '../contentNotLogged';
import RoadMap from '../home/roadmap';
import Market from '../home/market';
import Products from '../home/grow';
import DashBoard from '../home/dashboard';
import DeFi from '../home/defi';
import Settings from '../home/settings';
import Grow from '../home/grow';
import Profile from '../home/profile';

const Routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/About",
        component: About,
        exact: true,
    },
    {
        path: "/DeFi",
        component: DeFi,
        exact: true,
    },
    {
        path: "/RoadMap",
        component: RoadMap,
        exact: true,
    },
    {
        path: "/Market",
        component: Market,
        exact: true,
    },
    {
        path: "/Grow",
        component: Grow,
        exact: true,
    },
    {
        path: "/Settings",
        component: Settings,
        exact: true,
    },
    {
        path: "/Profile",
        component: Profile,
        exact: true,
    },
    // {
    //     path: "/vitrine",
    //     component: home,
    //     routes: [
    //         {
    //             path: "/test/welcome",
    //             component: Welcome,
    //         }
    //     ]
    // }
];

export default Routes;