import axios from "axios";

const customHeader = axios.create({
    baseURL: "http://localhost:3300",
});

export const  GetAllProducts = async (category: string ) =>  {
    return customHeader.get("/products", { params: { category } })
    .then((response) => {return response.data})
    .catch(error => { console.log(error) } )
}
export const PostNewOrder = async (
    payWay: string,
    deliverWay: string,
    list: Array<{ name: string, number: number, specification: string , total: number }>,
    buyer: { name: string, phone: string, email: string  },
    reciver: { name: string, phone: string, email: string}
) => {
    return  customHeader.post("/orders", { data: {  
        payWay,
        deliverWay,
        list,
        buyer,
        reciver
    } }).then((response) => {return response.data})
    .catch(error => { console.log(error) })
}
export const GetOrderById = async (id: string) => {
    return await customHeader.get("/orders", { params:{ id} })
        .then((response)=> {return response.data})
        .catch(error => {console.log(error)})
}