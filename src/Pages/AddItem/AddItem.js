import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddItem.css";

const AddItems = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/manageItem";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = "https://warm-crag-11477.herokuapp.com/product";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          navigate(from, { replace: true });
        }
      });
  };

  return (
    <div id="from-bg" className="w-50 mx-auto mt-5">
      <h1 className="text-center text-danger mb-3">Add Items</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="Supplier Name"
          type="text"
          {...register("supplier")}
        />
        <input
          className="mb-3"
          placeholder="Photo Url"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input className="btn btn-danger" type="submit" value="Add Itmes" />
      </form>
    </div>
  );
};

export default AddItems;
