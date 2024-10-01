import { createRouter, createWebHistory } from 'vue-router';
import UsersView from '../pages/ListUsersView.vue';
import AddUserView from '../pages/AddUserView.vue';
import EditUserView from '../pages/EditUserView.vue';
import LoginView from '../pages/LoginView.vue';
import RegisterView from '../pages/RegisterView.vue';
import ListProjectView from '../pages/ListProjectView.vue';
import AddProjectView from '../pages/AddProjectView.vue';

const routes = [
    { path: '/', redirect: '/users' },
    { path: '/users', component: UsersView },
    { path: '/users/add', component: AddUserView },
    { path: '/users/:id', component: EditUserView },
    { path: '/login', component: LoginView},
    { path: '/register', component: RegisterView},
    { path: '/projects', alias: '/myprojects', component: ListProjectView},
    { path: '/projects/add', component: AddProjectView}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
