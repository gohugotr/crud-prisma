
import ProductLayout from "./layout"



function Product() {
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </ProductLayout>
    )
}

export default Product