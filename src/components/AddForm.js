import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddForm.css";

const AddForm = () => {
  const storeValue = useSelector((state) => state.values);
  const dispatch = useDispatch();
  const [sameValue, setsameValue] = useState(false);
  const [values, setValues] = useState({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  });

  const valuesHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //   console.log(values);

  const formSubmitHandler = (e) => {
    if (
      storeValue.find((eachValue) => eachValue.username === values.username)
    ) {
      setsameValue(true);
    } else {
      e.preventDefault();
      // dispatch action to add the form info to the redux store.
      dispatch({ type: "ADD_CONTACT", values: values });
      setValues({
        name: "",
        username: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
      });
      // setsameValue(false);
    }
  };

  //   console.log(storeValue);

  return (
    // const nameOnChangeHandler = (e) =>{
    //     const nameOnChange = e.target.value;
    // }

    <div className="addForm">
      <form>
        <h4>Add a new contact</h4>
        <h4>{sameValue ? "User already exists" : ""}</h4>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={valuesHandler}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={valuesHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={valuesHandler}
          />
        </div>
        <div className="address">
          {/* <h4>Your Address:</h4> */}
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={values.street}
            onChange={valuesHandler}
          />
        </div>
        <div>
          <label htmlFor="suite">Suite:</label>
          <input
            type="text"
            id="suite"
            name="suite"
            value={values.suite}
            onChange={valuesHandler}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={values.city}
            onChange={valuesHandler}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={values.zipcode}
            onChange={valuesHandler}
          />
        </div>
        <button type="submit" onClick={formSubmitHandler}>
          Add New
        </button>
      </form>
    </div>
  );
};

export default AddForm;
