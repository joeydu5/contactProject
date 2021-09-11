import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducer/store";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import AddForm from "../components/AddForm";
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
  console.log(typeof usersData);
  console.log("users", usersData);

  //experiment
  //赵畅看这里
  const usersData3 = useSelector((state) => state); //重新从redux取值
  var obj3 = JSON.parse(JSON.stringify(usersData3)); //复制
  // console.log(obj3);
  const obj33 = Object.values(obj3); //取对象中的值
  const obj333 = obj33[0]; //取一个值
  console.log(typeof obj333); //显示是对象
  console.log(obj333);

  // console.log("3", usersData3);
  // console.log(typeof usersData3);

  // const usersData33 = Object.values(obj3);
  // console.log("33", usersData3);
  // console.log(typeof usersData33);

  // const usersData333 = usersData33[0];
  // console.log("333", usersData333);
  // console.log(typeof usersData333);

  // const objectuser = { user: [1] };
  // const objectuser2 = Object.values(objectuser);
  // console.log("ob2", objectuser2);

  //sorting name in an order
  //下面是排序代码，输入usersData,返回usersData2，但是在这个文件不能用。
  // const usersData2 = usersData.slice(0);
  // console.log(usersData2);
  // usersData.sort(function (a, b) {
  //   var x = a.name.toLowerCase();
  //   var y = b.name.toLowerCase();
  //   return x < y ? -1 : x > y ? 1 : 0;
  // });

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
          usersData={usersData}
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
