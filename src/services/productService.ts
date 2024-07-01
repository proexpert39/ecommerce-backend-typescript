import { getRepository } from 'typeorm';
import { Product } from '../entity/Product';

export class ProductService {
    private productRepository = getRepository(Product);

    async getAll() {
        return this.productRepository.find();
    }

    async getById(id: number): Promise<Product | null>  {
        return this.productRepository.findOneBy({id});
    }

    async create(product: Product) {
        return this.productRepository.save(product);
    }

    async update(id: number, product: Product) {
        await this.productRepository.update(id, product);
        return this.productRepository.findOneBy({ id });
    }

    async delete(id: number): Promise<void> {
        await this.productRepository.delete(id);    
    }
}