const About = () => import('./../../views/start/about.vue')
const User = () => import('./../../views/start/User.vue')
const routes = [
    {   name:'H',
        path: '/',
        component: () => import('./../../views/start/home.vue'),
    },
    {
        name: 'A',
        path: '/about',
        component: () => import('./../../views/start/about.vue'),
    },
    {
        path:'/user/:id',
        component: () => import('./../../views/start/user.vue'),
        name: 'user'
    },
];
console.log('localRoutes' + document.location.toString());
 export default routes;