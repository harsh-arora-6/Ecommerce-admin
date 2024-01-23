import AuthenticatedAppLayout from "@/components/AuthenticatedAppLayout"
import ProductForm from "@/components/ProductForm";
import { mongooseConnect } from "@/lib/mongoose";
import { Product as ProductModel} from "@/models/Product";
import { redirect } from "next/navigation";

export default function NewProductPage(){
    async function addNewProduct(formData) {
        'use server'
        try {
            await mongooseConnect();

            await ProductModel.create({name:formData.get('name'),description:formData.get('description'),price:formData.get('price')});
        } catch (error) {
            console.log('Something went wrong!. Please try again.',console.log(error))
        }finally{
            redirect('/products')
        }
    }
    
    return <AuthenticatedAppLayout>
            <ProductForm formTitle="Add New Product" onSubmit={addNewProduct}/>
        </AuthenticatedAppLayout>
}