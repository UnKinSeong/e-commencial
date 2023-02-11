export namespace View_{
    export const Home = 'Home';
    export const Detail_Product = 'Detail_Product';
    export const Cart = 'Cart';
    export const User = 'User';
    export interface IPosition{
        pos: 'Home' | "Detail_Product" | "Cart" | 'User';
    }
}