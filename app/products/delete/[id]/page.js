import AuthenticatedAppLayout from "@/components/AuthenticatedAppLayout"
import { mongooseConnect } from "@/lib/mongoose";
import { Product as ProductModel} from "@/models/Product";
import { redirect } from "next/navigation";

export default async function DeleteProductPage({params}){
    await mongooseConnect();

    const {id} = await params;

    const {name} = await ProductModel.findOne({_id:id})

    async function deleteProduct(formData) {
        'use server'
        try {
            await mongooseConnect();

            await ProductModel.deleteOne({_id:id});
        } catch (error) {
            console.log('Something went wrong!. Please try again.',console.log(error))
        }finally{
            redirect('/products')
        }
    }
    
    return <AuthenticatedAppLayout>
            <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                <h1>Are you sure you want to delete "{name}" product ?</h1>
                 <form className="flex gap-3" action={deleteProduct}>
                    <button type="submit" className="btn-danger">Delete</button>
                    <button type="submit" className="btn-primary">Cancel</button>
                </form>
            </div>
        </AuthenticatedAppLayout>
}