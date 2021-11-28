import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { body } from 'express-validator';
import { DELETE_CUSTOMER_RULES } from './rules/delete';
import { makeDeleteCustomerController } from '../factories/delete-customer';

export default (router: Router): void => {
  router.delete(
    '/delete-customer',
    body(DELETE_CUSTOMER_RULES).exists(),
    adaptRoute(makeDeleteCustomerController()),
  );
};
