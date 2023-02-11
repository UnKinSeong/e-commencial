import { IProduct } from "../Components/Products_Type";

class Exchanger_ {
    private products:IProduct[] = [];
    constructor() {
        for (let i = 0; i < 20; i++) {
            this.products.push({
            id: (i+1),
            brand: 'Nike',
            image: 'https://nikecompanyblog.files.wordpress.com/2015/05/nike1.jpg',
            price: '$40',
            title: 'product '+(i+1),
            });
        }
        for (let i = 20; i < 40; i++) {
            this.products.push({
            id: (i+21),
            brand: 'Louis Vuitton',
            image: 'https://thumbs.dreamstime.com/b/louis-vuitton-logo-popular-clothing-brand-famous-luxury-vector-icon-zaporizhzhia-ukraine-may-222305651.jpg',
            price: '$40',
            title: 'product '+(i+1),
            });
        }
    }
    public getProducts():IProduct[]{
        return this.products;
    }
    public getProductDetail({productId, auth_se}:{ productId: number, auth_se?:string}):any{
        return this.products.find(obj => {return obj.id === productId})
    }
}

export var Exchanger = (function () {
    var data:Exchanger_;
    function createInstance() {
        data = new Exchanger_();
        return data;
    }

    return {
        getInstance: function () {
            if (!data) {
                data = createInstance();
            }
            return data;
        }
    };
})();