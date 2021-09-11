import React from "react";
import Card from "../cards/Card";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = ({
  usersData,
  setdetailData,
  setaddBtn,
  setToggleDetailPage,
  myTheme1,
  myTheme2,
  myTheme3,
  myTheme4,
}) => {
  let theme;
  if (myTheme1 === true) {
    theme = ["theme1-1", "theme1-2", "theme1-3", "initialColor1"];
  } else if (myTheme2 === true) {
    theme = ["theme2-1", "theme2-2", "theme2-3", "initialColor2"];
  } else if (myTheme3 === true) {
    theme = ["theme3-1", "theme3-2", "theme3-3", "initialColor3"];
  } else if (myTheme4 === true) {
    theme = ["theme4-1", "theme4-2", "theme4-3", "initialColor4"];
  }

  const cardClickHandler = (currentContact) => {
    setToggleDetailPage(true);
    setaddBtn(false);
    setdetailData(currentContact);
  };
  function add_btn_handler() {
    setaddBtn(true);
    setToggleDetailPage(false);
  }

  //add contact btn hover effect
  const addBtnVariants = {
    hover: {
      scale: 1.1,
      textShadow: "5px -5px 15px rgb(28,43,79)",
      boxShadow: "0px 0px 20px rgb(28,43,79)",
      transition: {
        duration: 0.4,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <div className="contact-main">
        {/* add new contact button */}
        <motion.div
          className="add-btn"
          onClick={add_btn_handler}
          variants={addBtnVariants}
          whileHover="hover"
        >
          Add New
        </motion.div>

        {usersData &&
          usersData.map((each, index) => {
            // console.log(index);
            if (index % 3 === 0) {
              return (
                <Card
                  item={each}
                  key={each.phone}
                  theme={theme[0]}
                  initialColor={theme[3]}
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
                  initialColor={theme[3]}
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
                  initialColor={theme[3]}
                  cardClickHandler={cardClickHandler}
                />
              );
            }
            return 0;
          })}
      </div>
    </motion.div>
  );
};

export default Contact;
