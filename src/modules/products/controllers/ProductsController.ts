import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const products = new ListProductService();

    const listProducts = await products.execute();

    return response.json(listProducts);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const product = await new ShowProductService().execute({ id });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const product = await new CreateProductService().execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const { id } = request.params;

    const product = await new UpdateProductService().execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await new DeleteProductService().execute({ id });

    return response.json([]);
  }
}
