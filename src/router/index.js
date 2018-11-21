import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home'
import Workspace from '@/pages/Workspace';
import Folder from '@/pages/Folder';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/workspace',
            name: 'Workspace',
            component: Workspace
        },
        {
            path: '/folder',
            name: 'Folder',
            component: Folder
        }
    ]
})