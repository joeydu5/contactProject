import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducer/store";
import { motion } from "framer-motion";
import Contact from "./Contact";
import AddForm from "./AddForm";
import Detail from "../cards/Detail";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [toggleDetailPage, setToggleDetailPage] = useState(false);
  const [addBtn, setaddBtn] = useState(false);
  const [detailData, setdetailData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    company: { companyName: "", website: "" },
    address: { street: "", suite: "", city: "", zipcode: "" },
  });
  const usersData = useSelector((state) => state.values);

  // reorder the name list;
  let usersData2;
  if (usersData) {
    usersData2 = usersData.slice(0);
    console.log(usersData2);
    usersData2.sort(function (a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  function closeAddFormBtnHandler() {
    setaddBtn(false);
  }

  const [myTheme1, setmyTheme1] = useState(true);
  const [myTheme2, setmyTheme2] = useState(false);
  const [myTheme3, setmyTheme3] = useState(false);
  const [myTheme4, setmyTheme4] = useState(false);

  const myTheme1Handler = () => {
    setmyTheme2(false);
    setmyTheme3(false);
    setmyTheme4(false);
    setmyTheme1(true);
  };
  const myTheme2Handler = () => {
    setmyTheme1(false);
    setmyTheme3(false);
    setmyTheme4(false);
    setmyTheme2(true);
  };
  const myTheme3Handler = () => {
    setmyTheme1(false);
    setmyTheme2(false);
    setmyTheme4(false);
    setmyTheme3(true);
  };
  const myTheme4Handler = () => {
    setmyTheme1(false);
    setmyTheme2(false);
    setmyTheme3(false);
    setmyTheme4(true);
  };

  return (
    <div className="home">
      <div className="contact-theme home-left">
        <motion.div
          className="contact-theme-1"
          onClick={myTheme1Handler}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 55 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>

        <motion.div
          className="contact-theme-2"
          onClick={myTheme2Handler}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 55,
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>

        <motion.div
          className="contact-theme-3"
          onClick={myTheme3Handler}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 2,
            duration: 1,
            type: "spring",
            stiffness: 55,
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>

        <motion.div
          className="contact-theme-4"
          onClick={myTheme4Handler}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 3,
            duration: 1,
            type: "spring",
            stiffness: 55,
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
      <div className="home-contact home-middle">
        <Contact
          usersData={usersData2}
          setdetailData={setdetailData}
          setaddBtn={setaddBtn}
          setToggleDetailPage={setToggleDetailPage}
          myTheme1={myTheme1}
          myTheme2={myTheme2}
          myTheme3={myTheme3}
          myTheme4={myTheme4}
        />
      </div>

      <div className="home-detail home-right">
        <div className="empty-space">
          <h1>Stomble Contacts</h1>
        </div>
        {toggleDetailPage && (
          <Detail
            detailData={detailData}
            setToggleDetailPage={setToggleDetailPage}
          />
        )}

        {addBtn && (
          <AddForm
            closeAddFormBtnHandler={closeAddFormBtnHandler}
            setaddBtn={setaddBtn}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
