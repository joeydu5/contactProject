import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./AddForm.css";

const AddForm = (props) => {
  const storeValue = useSelector((state) => state.values);
  const dispatch = useDispatch();
  const [sameValue, setsameValue] = useState(false);

  const [values, setValues] = useState({
    id: Date.now(),
    name: "",
    phone: "",
    email: "",
    website: "",
    company: { companyName: "", website: "" },
    address: { street: "", suite: "", city: "", zipcode: "" },
  });

  const addressHandler = (e) => {
    if (e.target.name !== "" && e.target.phone !== "") {
      // setaddressInput({ ...addressInput, [e.target.name]: e.target.value });
      setValues({
        ...values,
        address: {
          ...values.address,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const companyHandler = (e) => {
    if (e.target.name !== "" && e.target.phone !== "") {
      setValues({
        ...values,
        company: {
          ...values.company,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const valuesHandler = (e) => {
    if (e.target.name !== "" && e.target.phone !== "") {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  //   console.log(values);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (storeValue.find((eachValue) => eachValue.phone === values.phone)) {
      setsameValue(true);
      return;
    } else {
      props.setaddBtn(false);
    }
    if (values.phone !== "" && values.name !== "") {
      // dispatch action to add the form info to the redux store.
      dispatch({ type: "ADD_CONTACT", values: values });
      setValues({
        name: "",
        phone: "",
        email: "",
        website: "",
        company: { companyName: "", website: "" },
        address: { street: "", suite: "", city: "", zipcode: "" },
      });
      // setcompanyInput({ companyName: "", website: "" });
      // setaddressInput({ street: "", suite: "", city: "", zipcode: "" });
    }
  };

  //   console.log(storeValue);

  const motionVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 80 },
    },
    exit: {
      x: "100vw",
      transition: { duration: 0.5, type: "spring", stiffness: 80 },
    },
  };

  return (
    <motion.div
      className="addForm"
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <form>
        <div className="form-header form-header-flex">
          <motion.h4
            className="material-icons cancel-icon"
            onClick={props.closeAddFormBtnHandler}
            whileHover={{ scale: 1.3, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            cancel
          </motion.h4>
          <h1>Add a new contact</h1>
        </div>
        <h2>{sameValue ? "!!! This phone number exists!!!" : ""}</h2>
        <hr />
        <h3>Personal Info</h3>
        <div>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={valuesHandler}
            placeholder="  Name:"
            required
          />
        </div>

        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            placeholder="  Phone:"
            onChange={valuesHandler}
          />
        </div>
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            placeholder="  Email:"
            onChange={valuesHandler}
          />
        </div>
        <hr />
        <h3>Home Address</h3>
        <div className="address">
          {/* <h4>Your Address:</h4> */}
          {/* <label htmlFor="street">Street:</label> */}
          <input
            type="text"
            id="street"
            name="street"
            value={values.address.street}
            placeholder="  Street Name"
            onChange={addressHandler}
          />
        </div>
        <div>
          {/* <label htmlFor="suite">Suite:</label> */}
          <input
            type="text"
            id="suite"
            name="suite"
            value={values.address.suite}
            placeholder="  Suite Number"
            onChange={addressHandler}
          />
        </div>
        <div>
          {/* <label htmlFor="city">City:</label> */}
          <input
            type="text"
            id="city"
            name="city"
            value={values.address.city}
            placeholder="  City"
            onChange={addressHandler}
          />
        </div>
        <div>
          {/* <label htmlFor="zipcode">Zipcode:</label> */}
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={values.address.zipcode}
            placeholder="  Zipcode"
            onChange={addressHandler}
          />
        </div>
        <hr />
        <h3>Company Info</h3>
        <div>
          {/* <label htmlFor="zipcode">Zipcode:</label> */}
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={values.company.companyName}
            placeholder="  Company Name:"
            onChange={companyHandler}
          />
        </div>
        <div>
          {/* <label htmlFor="zipcode">Zipcode:</label> */}
          <input
            type="text"
            id="website"
            name="website"
            value={values.company.website}
            placeholder="  Website:"
            onChange={companyHandler}
          />
        </div>
        <button type="submit" onClick={formSubmitHandler}>
          Add New
        </button>
      </form>
    </motion.div>
  );
};

export default AddForm;
