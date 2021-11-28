import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { body } from 'express-validator';
import { REGISTER_CITY_RULES, REGISTER_CUSTOMER_RULES } from './rules/register';
import { makeRegisterCityController } from '../factories/register-city';
import { makeRegisterCustomerController } from '../factories/register-customer';

export default (router: Router): void => {
  router.post(
    '/register-city',
    body(REGISTER_CITY_RULES).exists(),
    adaptRoute(makeRegisterCityController()),
  );
  router.post(
    '/register-customer',
    body(REGISTER_CUSTOMER_RULES).exists(),
    adaptRoute(makeRegisterCustomerController()),
  );
};
