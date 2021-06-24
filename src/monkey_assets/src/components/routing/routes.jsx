// Components
import Home from '../home/home';
import About from '../home/about';
import Welcome from '../home/welcome';
import ContentNotLogged from '../contentNotLogged';
import RoadMap from '../home/roadmap';
import Market from '../home/market';
import Products from '../home/products';
import DashBoard from '../home/dashboard';


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
        path: "/Products",
        component: Products,
        exact: true,
    },
    {
        path: "/test",
        component: ContentNotLogged,
        routes: [
            {
                path: "/test/welcome",
                component: Welcome,
            }
        ]
    }
];

export default Routes;