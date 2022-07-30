export interface IProduct{
    id? : number;
    productId? : number;
    productName : string;
    productCode : string;
    releaseDate? : Date;
    price : number;
    description? : string;
    starRating : number;
    imageUrl? : string;
}

export class Product implements IProduct{
    id? : number;
    productId? : number = 0;
    productName! : string;
    productCode! : string;
    releaseDate? : Date;
    price! : number;
    description? : string;
    starRating! : number;
    imageUrl? : string;
}