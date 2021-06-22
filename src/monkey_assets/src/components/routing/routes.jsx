// Components
import Home from '../home/home';
import About from '../home/about';
import Welcome from '../home/welcome';
import ContentNotLogged from '../contentNotLogged';

const Routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
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