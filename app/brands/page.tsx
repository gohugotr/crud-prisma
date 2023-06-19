import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

const getBrands = async () => {
    const res = await prisma.brand.findMany({
        select:{
            id:true,
            name:true,
        }
    })
    return res
}

const Brand = async () => {
    const brands = await getBrands()



  return (
    <div>
        <table className="table w-full">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Brand</td>
                </tr>
            </thead>
            <tbody>
                {
                    brands.map((brand, index) =>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td> {brand.name} </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>

    </div>
  )
}

export default Brand