import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo
    }
    console.log(newCoffee);
    //send data to backend
    fetch(`http://localhost:5000/coffee`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(response => {
      return response.json()
    })
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div className="bg-[#F3F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className="flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Coffee Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details */}
        <div className="flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ml-4 md:w-1/2">
            <label className="label">
              <span className="label-text">Category Details</span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Category Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo Url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <span>URL</span>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
        
        <input type="submit" className="btn btn-block" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
