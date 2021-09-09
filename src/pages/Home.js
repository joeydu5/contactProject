import React from "react";
import { useEffect } from "react";
import Card from "../cards/Card";
import AddNewContact from "./AddNewContact";
import AddForm from "../components/AddForm";
import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducer/store";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const usersData = useSelector((state) => state.values);
  console.log(usersData);

  return (
    <div className="home">
      <div className="home-main">
        <div className="addnew">
          <Link to={AddNewContact}>Add</Link>
        </div>
        {usersData &&
          usersData.map((each, index) => {
            console.log(index);
            return <Card item={each} key={each.id} />;
          })}
      </div>
      <div className="home-right">
        <div>
          <AddForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
