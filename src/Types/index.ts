export interface JsonDataType {
    brand: string,
    id: number,
    ingredient: string,
    price: number,
    productName: string,
    salesAmount: number,
    searchAmount: number,
    url: string,
} 

export type Onclickhandler = (setSearchInput: React.Dispatch<React.SetStateAction<string>>, inputState: string) => void