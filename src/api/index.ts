import axios from "axios";

const customHeader = axios.create({
    baseURL: "http://localhost:3300",
});

export const  GetAllProducts = async (category: string ) =>  {
    return customHeader.get("/products", { params: { category } })
    .then((response) => {return response.data})
    .catch(error => { console.log(error) } )
}
