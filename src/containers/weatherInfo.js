import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { getWeatherInfo } from "../redux/actions/weatherInfoActions";
import RadioButtons from "../components/RadioButtons.jsx";
import { RightArrow, LeftArrow } from "../components/Arrows.jsx";
import LoadingScreen from "../components/LoadingScreen";
import WeatherCard from "../components/WeatherCard";
import Barchart from "../components/Barchart";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardsContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "100%",
      marginBottom: "10px",
    },
    graphsContainer: {
      width: "100%",
    },
    radioContainer: {
      display: "flex",
      width: "100%",
      height: "100px",
      justifyContent: "center",
      alignItems: "center",
    },
    arrowContaner: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      height: "100px",
    },
    arrowLeftContaner: {
      width: "40%",
    },
    arrowRightContaner: {
      width: "40%",
    },
  })
);

export default function WeatherInfo() {
  const [paginatedWeather, setPaginatedWeather] = React.useState([]);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(3);
  const [selectedValue, setSelectedValue] = React.useState("Fahrenheit");
  const [currentWeather, setCurrentWeather] = React.useState([]);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const weatherInfo = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  const paginate = (data, pageSize, pageNumber) => {
    return data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  React.useEffect(() => {
    if (
      weatherInfo.weather.weatherInfo &&
      weatherInfo.weather.weatherInfo.length !== 0
    ) {
      let result = paginate(weatherInfo.weather.weatherInfo, 3, 1);
      setPaginatedWeather(result);
      handleSetCurrentWeather(result[0]);
    }
  }, [weatherInfo.weather.weatherInfo.length]);

  const prev = () => {
    const newEnd = end - 1;
    const newStart = start - 1;
    if (newStart >= 0) {
      const result = weatherInfo.weather.weatherInfo.slice(newStart, newEnd);
      setPaginatedWeather(result);
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  const next = () => {
    const newEnd = end + 1;
    const newStart = start + 1;
    if (newEnd <= weatherInfo.weather.weatherInfo.length) {
      const result = weatherInfo.weather.weatherInfo.slice(newStart, newEnd);
      setPaginatedWeather(result);
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  const handleSetCurrentWeather = (weather) => {
    setCurrentWeather(weather);
  };

  const renderData = () => {
    if (weatherInfo.weather.isFetching) {
      return <LoadingScreen />;
    } else {
      return (
        <div>
          <div className={classes.radioContainer}>
            <RadioButtons
              handleRadioChange={handleRadioChange}
              selectedValue={selectedValue}
            />
          </div>
          <div className={classes.arrowContaner}>
            <div className={classes.arrowLeftContaner}>
              <LeftArrow prev={prev} start={start} />
            </div>
            <div className={classes.arrowRightContaner}>
              <div style={{ float: "right" }}>
                <RightArrow
                  next={next}
                  end={end}
                  data={weatherInfo.weather.weatherInfo}
                />
              </div>
            </div>
          </div>
          <div className={classes.cardsContainer}>
            {paginatedWeather &&
              paginatedWeather.map((weather) => (
                <WeatherCard
                  key={weather.date}
                  weather={weather}
                  currentWeather={currentWeather}
                  scaleType={selectedValue}
                  handleSetCurrentWeather={handleSetCurrentWeather}
                />
              ))}
          </div>
          <div className={classes.graphsContainer}>
            {currentWeather.length !== 0 ? (
              <Barchart
                currentWeather={currentWeather}
                scaleType={selectedValue}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      );
    }
  };
  return renderData();
}
