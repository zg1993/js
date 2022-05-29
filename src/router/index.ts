import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import routes from './routes/localRoutes';
import {App} from 'vue';
import { processExpression } from "@vue/compiler-core";



const router = createRouter({
    // mode: 'history',
    history: createWebHistory(),
    routes,
});

function setUpRouter(app: App<Element>) {
    app.use(router);
    console.log("setUpRouter" + document.location.toString());
    console.log("setUpRouter"+ "@/b" );
}

export default setUpRouter;