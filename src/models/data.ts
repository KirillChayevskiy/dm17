export interface Data {
    id: number,
    article: string,
    name: string,
    brand: {
        id: number,
        name: string
    } | null;
    price: number,
    quantity: number
}
