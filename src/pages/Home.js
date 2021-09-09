import React from "react";
import { useEffect } from "react";
import Card from "../cards/Card";
import AddNewContact from "./AddNewContact";
import AddForm from "../components/AddForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducer/store";
import Detail from "../cards/Detail";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const usersData = useSelector((state) => state.values);
  console.log(usersData);
  // const theme1 = ["#66d073", "5745d3", "fdfdfd"];
  const theme = ["green", "purple", "white"];
  return (
    <div className="home">
      <div className="home-main">
        <div className="add-btn">
          <Link to={AddNewContact}>Add</Link>
        </div>

        {usersData &&
          usersData.map((each, index) => {
            // console.log(index);
            if (index === 0 || index % 3 === 0) {
              return <Card item={each} key={each.id} theme={theme[0]} />;
            }
            if (index % 3 === 1) {
              return <Card item={each} key={each.id} theme={theme[1]} />;
            }
            if (index % 3 === 2) {
              return <Card item={each} key={each.id} theme={theme[2]} />;
            }
            return 0;
          })}
      </div>
      <div className="home-right">
        <div className="add-form">
          <AddForm />
        </div>
      </div>
      <div>
        <Detail />
      </div>
    </div>
  );
};

export default Home;
