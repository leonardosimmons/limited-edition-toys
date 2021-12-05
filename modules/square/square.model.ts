import { NextApiResponse } from 'next';
import {
  ApiError,
  CreateCustomerRequest,
  Customer,
  Location,
  SearchCustomersRequest,
} from 'square';
import { Square as client } from '../../lib/square';

class SquareModel {
  public apiError(err: unknown, res: NextApiResponse): void {
    if (err instanceof ApiError) {
      res.status(err.statusCode).send({
        message: `There was an error in your request: ${err.errors}`,
      });
    } else {
      res.status(400).send({
        message: `Unexpected Error: ${err}`,
      });
    }
  }

  public error(err: unknown): void {
    if (err instanceof ApiError) {
      throw new Error(`There was an error in your request: ${err.errors}`);
    } else {
      throw new Error(`Unexpected Error: ${err}`);
    }
  }

  async findOrCreateCustomer(
    search: SearchCustomersRequest,
    create: CreateCustomerRequest,
  ): Promise<Customer | undefined> {
    try {
      const response = await client.customersApi
        .searchCustomers(search)
        .then((res) => res.result);
      if (!Array.isArray(response.customers) || !response.customers?.length) {
        try {
          return await client.customersApi
            .createCustomer(create)
            .then((res) => res.result.customer);
        } catch (err) {
          if (err instanceof ApiError) {
            throw new Error(
              `There was an error in your request: ${err.errors}`,
            );
          } else {
            throw new Error(`Unexpected Error: ${err}`);
          }
        }
      } else {
        return response.customers[0];
      }
    } catch (err) {
      if (err instanceof ApiError) {
        throw new Error(`There was an error in your request: ${err.errors}`);
      } else {
        throw new Error(`Unexpected Error: ${err}`);
      }
    }
  }

  public async getLocation(): Promise<Location> {
    try {
      return await client.locationsApi
        .listLocations()
        .then((locations) => locations.result.locations![0]);
    } catch (err) {
      throw this.error(err);
    }
  }
}

export { SquareModel };
