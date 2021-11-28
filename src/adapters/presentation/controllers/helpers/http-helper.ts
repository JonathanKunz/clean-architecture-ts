import { HttpResponse } from '../ports/http';
import { ServerError } from '../errors/server-error';

const succesMessage = { message: 'Operation performed successfully!' };

export const badRequest = (error: Error = null): HttpResponse => ({
  statusCode: 400,
  body: { error: error?.message },
});

export const ok = (data: any = null): HttpResponse => ({
  statusCode: 200,
  body: data ?? succesMessage,
});

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(reason),
});
