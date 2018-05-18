import Index from '@/components/Index';
import MenuAdd from '@/components/MenuAdd';
import MenuChoose from '@/components/MenuChoose';

export default [
  { path: '/', name: 'index', component: Index },
  { path: '/menu-add', name: 'menu-add', component: MenuAdd },
  { path: '/menu-choose', name: 'menu-choose', component: MenuChoose },
];
