import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root',
})

export class ProductRepository{

    productList : IProduct[] = 
    [
        {
            "id": 1,
            //"productId": 1,
            "productName": "Lemongrass",
            "productCode": "HLG-0011",
            "releaseDate": new Date(2022,2,23),
            "description": "Lemon grass is Medicinal plant",
            "price": 85.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/lemonGrass.jpg",           
        },
        {
            "id": 2,
            // "productId": 2,
            "productName": "Lavendar",
            "productCode": "LAV-0023",
            "releaseDate": new Date(2022,10,25),
            "description": "Ornamnetal and Perfumed",
            "price": 232.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/lavendar.jpeg"
        },
        {
            "id": 3,
            // "productId": 3,
            "productName": "Thyme",
            "productCode": "TBX-0048",
            "releaseDate": new Date(2022,1,13),
            "description": "Medicinal value",
            "price":68.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/Thyme.jpeg"
        },
        {
            "id": 4,
            // "productId": 4,
            "productName": "Thai Basil",
            "productCode": "TBL-0022",
            "releaseDate": new Date(2022,3,12),
            "description": "Used in soups and salads",
            "price": 111.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/ThaiBasil.jpg"
        }
    ];

    getProducts(){
        return this.productList;
    }

    getProduct(pid : number){
        return this.productList.find(x => x.id == pid);
    }

    getCount(){
        return this.productList.length;
    }

    addProduct(product : IProduct){
        this.productList.push(product);
    }
}