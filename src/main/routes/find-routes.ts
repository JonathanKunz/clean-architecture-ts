import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeFindCityByNameController } from '../factories/find-city-by-name';
import { makeFindCityCollectionByStateController } from '../factories/find-city-collection-by-state';
import { makeFindCustomerController } from '../factories/find-customer';

export default (router: Router): void => {
  router.get('/find-city', adaptRoute(makeFindCityByNameController()));
  router.get('/find-customer', adaptRoute(makeFindCustomerController()));
  router.get(
    '/find-city-collection',
    adaptRoute(makeFindCityCollectionByStateController()),
  );
};
