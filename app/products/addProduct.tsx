
const AddProduct = () => {
  return (
    <div>
        <div className="modal">
            <div className="modal-box">
                <h3 className="text-lg font-bold">Add New Product</h3>
                <form>
                    <div className="w-full form-control">
                        <label className="font-bold label">Product Name</label>
                        <input type="text" className="input input-bordered" placeholder="Product Name"/>
                    </div>
                    <div className="w-full form-control">
                        <label className="font-bold label">Price</label>
                        <input type="text" className="input input-bordered" placeholder="Price"/>
                    </div>
                    <div className="w-full form-control">
                        <label className="font-bold label">Brand</label>
                        <select className="select select-bordered">
                            <option value="" disabled>Select a Brand</option>
                            <option value="" >Brand 1</option>
                        </select>
                    </div>
                    <div className="modal-action">
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct