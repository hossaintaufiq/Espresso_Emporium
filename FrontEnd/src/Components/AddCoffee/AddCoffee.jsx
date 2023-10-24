

const AddCoffee = () => {

    const handleAddCoffee = (e) => {

        e.preventDefault();
        const form = e.target; 
        const name = form.name.value;
        const chefName = form.chefName.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Category = form.Category.value;
        const Details = form.Details.value;
        const Photo = form.Photo.value;


        const newCoffee={name,chefName,Supplier,Taste,Category,Details,Photo}
        // console.log(newCoffee);

        // send data to the server 

        // fetch('http://localhost:5000/coffee',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        // .then(res=>res.json())
        // .then(data => {
        // //   if(data.insertedId){
        // //     alert("Data added successfully")
        // //   }
        // console.log(data)
        // })


        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })
    }




    return (
        <div className="w-3/4 mx-auto mt-20 mb-20 bg-[#F4F3F0] pb-32 px-5 pt-6">
           <h2 className="text-4xl font-extrabold text-center pb-5">Add a Coffee</h2>
            <form  onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-2  gap-5  font-bold">
                
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group "> 
                            <input type="text" placeholder="Coffee Name" className="input input-bordered w-full" name="name"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" name="chefName"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full"  name="Supplier"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full"  name="Taste"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" name="Category"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" name="Details" />
                        </label>
                    </div>
                </div>

                {/*  for photo url  */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" name="Photo"/>
                        </label>
                    </div>

                    <div>
                    <button className="py-2 bg-[#D2B48C] w-full mt-4 font-extrabold rounded-lg">Add Coffee</button>
                    </div>
            </form>
        </div>
    );
};

export default AddCoffee;