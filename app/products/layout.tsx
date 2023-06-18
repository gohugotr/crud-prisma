import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'Product',
    description: 'Product Page',
}
const ProductLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="p-10"> {children} </div>
  )
}

export default ProductLayout