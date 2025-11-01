import { Router } from 'express';
import { userRouter } from '../modules/users/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  // {
  //   path: "/stores",
  //   route: storeRouter,
  // },
  // {
  //   path: "/warehouses",
  //   route: warehouseRouter,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
