import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Card from "./../../elements/card/card";
import Header from "./../../components/header/header";
import SearchBar from "./../../components/searchbar/searchbar";
import Footer from "./../../components/footer/footer";
import Preview from "./../../components/preview/preview";
import ErrorNotice from "./../../components/errornotice/errornotice";
import WeatherDetails from "../../components/weatherdetails/weatherdetails";
import assetMapping from "../../assets/assetMapping.json";
import { MoonLoader } from "react-spinners";
const axios = require("axios");

const App = () => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [weatherDetails, setWeatherDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSetCity = () => {
    setLocation(city);
  };

  const handleTryAgain = () => {
    //reset all states
    setCity("");
    setLocation("");
    setWeatherDetails({});
    setIsError(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (location === "") return;
    const getWeatherDetails = async () => {
      setIsError(false);
      setIsLoading(true);
      const API_KEY = "7ed34ae042ae27158db9fa941596a79f";
      const API_URL = "https://api.openweathermap.org/data/2.5/weather";
      const URL = API_URL + `?q=${location}&appid=${API_KEY}&units=metric`;

      try {
        const { data } = await axios.get(URL);

        if (data.cod === 200) {
          setIsLoading(false);
          setWeatherDetails({
            temparature: data.main.temp,
            description: data.weather[0].main,
          });
        } else {
          throw data.cod;
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    getWeatherDetails();
  }, [location]);

  let cardContent = <Preview />;
  if (isLoading) {
    cardContent = <MoonLoader />;
  } else if (isError) {
    cardContent = <ErrorNotice onTryAgain={handleTryAgain} />;
  } else if (weatherDetails.temparature && weatherDetails.description !== "") {
    cardContent = (
      <WeatherDetails
        temperature={weatherDetails.temparature}
        description={weatherDetails.description}
      />
    );
  }

  return (
    <div className={styles.AppWrapper}>
      <Header
        color={
          assetMapping.colors[isError ? "error" : weatherDetails.description]
        }
      />
      <main className={styles.AppMain}>
        <SearchBar
          onChange={handleChange}
          onSetCity={handleSetCity}
          value={city}
        />

        <Card>{cardContent}</Card>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
