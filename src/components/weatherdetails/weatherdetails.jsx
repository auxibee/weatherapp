import React from "react";
import styles from "./weatherdetails.module.css";
import Icon from "../../elements/icon/icon";
import Date from "./date/date";
import Description from "./description/description";
import Temparature from "./temparature/temparature";

const WeatherDetails = ({ temperature, description }) => {
  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}>
        <Icon type={description} />
      </div>

      <main className={styles.WeatherDataWrapper}>
        <Description type={description} />
        <Date />
        <Temparature degrees={temperature} />
      </main>
    </div>
  );
};

export default WeatherDetails;
