export default function ProductForm ({formTitle,name='',description='',price=0,onSubmit}) {
    return <div className="flex flex-col gap-4">
                <h1>{formTitle}</h1>
                 <form className="flex flex-col gap-3" action={onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input name="name" defaultValue={name} required placeholder="Enter name..." />
                    <label>Description</label>
                    <textarea name="description" defaultValue={description} rows={3} placeholder="Enter description..."/>
                    <label>Price (In Rs)</label>
                    <input name="price" type="number" defaultValue={price} min={0} required placeholder="Enter price..."/>
                    <button type="submit" className="btn-primary">Save product</button>
                </form>
            </div>
}