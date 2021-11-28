import { Request, Response } from 'express';
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http';
import { validationResult } from 'express-validator';
import { RegisterCityController } from '../../adapters/presentation/controllers/register-city-controller';
import { RegisterCustomerController } from '../../adapters/presentation/controllers/register-customer-controller';
import { FindCityByNameController } from '../../adapters/presentation/controllers/find-city-by-name-controller';
import { FindCityCollectionByStateController } from '../../adapters/presentation/controllers/find-city-collection-by-state';
import { FindCustomerController } from '../../adapters/presentation/controllers/find-customer-controller';
import { DeleteCustomerController } from '../../adapters/presentation/controllers/delete-customer-controller';
import { UpdateCustomerController } from '../../adapters/presentation/controllers/update-customer-controller';

export const adaptRoute = (
  controller:
    | RegisterCityController
    | RegisterCustomerController
    | FindCityByNameController
    | FindCityCollectionByStateController
    | FindCustomerController
    | DeleteCustomerController
    | UpdateCustomerController,
) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: Object.values(req.query).length ? req.query : req.body,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }

    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
