const About = () => import('./../../views/start/about.vue')
const User = () => import('./../../views/start/User.vue')
const routes = [
    {
        path: '/',
        component: () => import('./../../views/start/home.vue'),
    },
    {
        path: '/about',
        component: About,
    },
    {
        path:'/users/:id',
        component: User,
        name: 'user'
    },
];
console.log('localRoutes' + document.location.toString());
 export default routes;