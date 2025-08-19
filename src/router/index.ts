import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import QuemSomosView from '@/views/QuemSomos.vue';
import Dividas from '@/views/DuvidasView.vue';
import cadastro from '@/views/Registro.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'quem-somos',
        name: 'quem-somos',
        component: QuemSomosView,
      },
      {
        path: 'duvidas',
        name: 'duvidas',
        component: Dividas,
      },
      {
        path: 'cadastro',
        name: 'cadastro',
        component: cadastro,
      },
      // Adicione mais rotas que usarão o layout padrão
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { layout: 'no-footer' }, // Especifica que essa rota não tem rodapé
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
