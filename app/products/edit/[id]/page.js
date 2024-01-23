import AuthenticatedAppLayout from "@/components/AuthenticatedAppLayout"
import ProductForm from "@/components/ProductForm";
import { mongooseConnect } from "@/lib/mongoose";
import { Product as ProductModel} from "@/models/Product";
import { redirect } from "next/navigation";

export default async function EditProductPage({params}){
    await mongooseConnect();

    const {id} = await params;

    const {name,description,price} = await ProductModel.findOne({_id:id})

    async function editProduct(formData) {
        'use server'
        try {
            await mongooseConnect();

            await ProductModel.updateOne({_id:id},{name:formData.get('name'),description:formData.get('description'),price:formData.get('price')});
        } catch (error) {
            console.log('Something went wrong!. Please try again.',console.log(error))
        }finally{
            redirect('/products')
        }
    }
    
    return <AuthenticatedAppLayout>
            <ProductForm formTitle="Edit Product" name={name} description={description} price={price} onSubmit={editProduct}/>
        </AuthenticatedAppLayout>
}