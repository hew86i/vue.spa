import Logo from './pages/Logo';
import LogoSymbol from './pages/LogoSymbol';
import Colors from './pages/Colors';
import Typography from './pages/Typography';

export default {

    mode: 'history',

    linkActiveClass: 'font-bold text-red-800',

    routes: [

        {
            path: '/',
            component: Logo 
        },

        {
            path: '/logo-symbol',
            component: LogoSymbol 
        },

        {
            path: '/colors',
            component: Colors 
        },

        {
            path: '/typography',
            component: Typography 
        },

        {
            path: '/mascot',
            component: Typography 
        },

        {
            path: '/illustrations',
            component: Typography 
        },

        {
            path: '/loaders-and-animations',
            component: Typography 
        },

        {
            path: '/wallpapers',
            component: Typography 
        },
         
    ]

}

