import { createRouter, createWebHistory } from 'vue-router';
import Posts from './components/Posts.vue';
import NewPost from './components/NewPost.vue';

const routes = [
    { path: '/', component: Posts },
    { path: '/new-post', component: NewPost },
    { path: '/:pathMatch(.*)', redirect: "/" }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;