import { log } from "console";
import ProductLayout from "./layout"
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

const getProducts = async() => {
    const res = await prisma.product.findMany({
        select:{
            id:true,
            title:true,
            price:true,
            brandId:true,
            brand:true,
        }
    })
    return res
}

const Product = async () => {

    const products = await getProducts()
    console.log(products);
    
    
    return (
        <ProductLayout>
            <table className="table w-full">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Produt Name</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td className="text-center">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.brand.name}</td>
                                    <td>Action</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </ProductLayout>
    )
}

export default Product