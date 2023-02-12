export interface Data_Class{
    getData:string;
    encription:string;
}

class Product_Image_Url{
    public id!:number;
    public product_id!:number;
    public image_url!:string;
    constructor(
        {id,product_id,image_url}:
        {id:number,product_id:number,image_url:string}
    ){
        this.id = id;
        this.product_id = product_id;
        this.image_url = image_url;
    }
}

class Product_Inventory{
    public id!:number;
    public quantity_sold!:number;
    public quantity_available!:number;
    constructor({id,quantity_sold,quantity_available}:{id:number,quantity_sold:number,quantity_available:number}){
        
        this.id = id;
        this.quantity_sold = quantity_sold;
        this.quantity_available = quantity_available;
    }
}


class Product{
    public id!:number;
    public name!:string;
    public brand!:string;
    public price!:number;
    public category_id!:number;
    public inventory_id!:number;
    public thumbnail_url!:string;
    public detail_description!:string;
    public size!:number;
    public color!:string;
    public material!:string;
    constructor (
        {id,name,brand,price,category_id,inventory_id,thumbnail_url,detail_description,size,color,material}:
        {id:number,name:string,brand:string,price:number,category_id:number,inventory_id:number,thumbnail_url:string,detail_description:string,size:number,color:string,material:string}
    ){
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.category_id = category_id;
        this.inventory_id = inventory_id;
        this.thumbnail_url = thumbnail_url;
        this.detail_description = detail_description;
        this.size = size;
        this.color = color;
        this.material = material;
    }
}

