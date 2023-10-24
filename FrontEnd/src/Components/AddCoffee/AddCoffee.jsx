

const AddCoffee = () => {
    return (
        <div className="w-3/4 mx-auto mt-20 mb-40 bg-[#F4F3F0] pb-32 px-5 pt-6">
           <h2 className="text-4xl font-extrabold text-center pb-5">Add a Coffee</h2>
            <form >
                <div className="grid grid-cols-2  gap-5  font-bold">
                
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group "> 
                            <input type="text" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;