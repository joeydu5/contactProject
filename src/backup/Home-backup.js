import React from "react";
import { useEffect, useState } from "react";
import Card from "../cards/Card";
import AddNewContact from "../pages/AddNewContact";
import AddForm from "../components/AddForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducer/store";
import Detail from "../cards/Detail";
import "./Home.css";

const Home = () => {
  const [detailData, setdetailData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    company: { companyName: "", website: "" },
    address: { street: "", suite: "", city: "", zipcode: "" },
  });
  const [addBtn, setaddBtn] = useState(false);
  const usersData = useSelector((state) => state.values);
  const theme = ["green", "purple", "white"];
  const dispatch = useDispatch();
  const cardClickHandler = (item) => {
    // console.log(item);
    // console.log("i got it");
    setdetailData(item);
  };
  // console.log(detailData);
  function add_btn_handler() {
    setaddBtn(true);
  }

  function add_btn_handler2() {
    setaddBtn(false);
  }

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // console.log(usersData);
  // const theme1 = ["#66d073", "5745d3", "fdfdfd"];

  return (
    <div className="home">
      <div className="home-main">
        <div className="add-btn" onClick={add_btn_handler}>
          <Link to={AddNewContact}>Add</Link>
        </div>

        {usersData &&
          usersData.map((each, index) => {
            // console.log(index);
            if (index % 3 === 0) {
              return (
                <Card
                  item={each}
                  key={each.phone}
                  theme={theme[0]}
                  cardClickHandler={cardClickHandler}
                />
              );
            }
            if (index % 3 === 1) {
              return (
                <Card
                  item={each}
                  key={each.phone}
                  theme={theme[1]}
                  cardClickHandler={cardClickHandler}
                />
              );
            }
            if (index % 3 === 2) {
              return (
                <Card
                  item={each}
                  key={each.phone}
                  theme={theme[2]}
                  cardClickHandler={cardClickHandler}
                />
              );
            }
            return 0;
          })}
      </div>
      <div className="home-right">
        <div className="add-form">
          {addBtn && <AddForm add_btn_handler2={add_btn_handler2} />}
          {/* <AddForm /> */}
        </div>
      </div>
      <div>
        <Detail detailData={detailData} />
        {/* {detailData == {} ? "Loading" : <Detail detailData={detailData} />} */}
      </div>
    </div>
  );
};

export default Home;
