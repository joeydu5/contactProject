import React from "react";
import { motion } from "framer-motion";
import "./Detail.css";

const Detail = ({ detailData, setToggleDetailPage }) => {
  const completeAdd =
    detailData.address.suite + "  " + detailData.address.street;
  const motionVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 80 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const closeDetailPageHandler = () => {
    setToggleDetailPage(false);
  };

  return (
    <motion.div
      className="detail"
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="detail-header-parent">
        <motion.h4
          className="material-icons cancel-icon"
          whileHover={{ scale: 1.3, rotate: 360 }}
          transition={{ duration: 0.8 }}
          onClick={closeDetailPageHandler}
          // onClick={props.closeAddFormBtnHandler}
        >
          cancel
        </motion.h4>

        <div className="detail-header">Contact Detail</div>
      </div>
      <div className="detail-body">
        <div className="detail-text">
          <i className="material-icons person-icon">person</i>
          <span>{detailData.name}</span>
        </div>

        <div className="detail-text-sub">
          <i className="material-icons">phone</i>
          <span>{detailData.phone}</span>
        </div>
        <div className="detail-text-sub">
          <i className="material-icons">email</i>
          <span>{detailData.email}</span>
        </div>
        <div className="detail-text-sub">
          <i className="material-icons">web_asset</i>
          <span>{detailData.website}</span>
        </div>
        <div className="detail-text-sub">
          <i className="material-icons">location_on</i>
          <span>{completeAdd}</span>
        </div>
        <div className="detail-text-sub">
          <i className="material-icons">location_city</i>
          <span>{detailData.address.city}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
