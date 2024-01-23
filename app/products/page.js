import AuthenticatedAppLayout from "@/components/AuthenticatedAppLayout"
import { mongooseConnect } from "@/lib/mongoose"
import { Product as ProductModel} from "@/models/Product"
import Link from "next/link"

export default async function ProductsPage(){
    await mongooseConnect();

    const products = await ProductModel.find()

    return <AuthenticatedAppLayout>
            
            <Link href="/products/new" className="btn-primary">Add Product</Link>
            <table className="w-full mt-16">
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                   {products.map(product =><tr>
                        <td>{product.name}</td>
                        <td>
                            <Link href={`/products/edit/${product._id}`} className="p-1 bg-blue-900 text-white rounded-lg inline-flex items-center gap-1 ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <span>Edit</span>
                            </Link>
                            <Link href={`/products/delete/${product._id}`} className="p-1 bg-red-600 text-white rounded-lg inline-flex items-center gap-1 ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <span>Delete</span>
                            </Link>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </AuthenticatedAppLayout>
}