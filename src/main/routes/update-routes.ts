import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { body } from 'express-validator';
import { UPDATE_CUSTOMER_RULES } from './rules/update';
import { makeUpdateCustomerController } from '../factories/update-customer';

export default (router: Router): void => {
  router.put(
    '/update-customer',
    body(UPDATE_CUSTOMER_RULES).exists(),
    adaptRoute(makeUpdateCustomerController()),
  );
};
