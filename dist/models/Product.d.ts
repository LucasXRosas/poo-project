import { ProductType } from './ProductType';
export declare abstract class Product {
    protected name: string;
    protected price: number;
    protected type: ProductType;
    setName(name: string): void;
    getName(): string;
    setPrice(price: number): void;
    getPrice(): number;
    setType(type: ProductType): void;
    getType(): ProductType;
}
//# sourceMappingURL=Product.d.ts.map