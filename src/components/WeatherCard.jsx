import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {toCelsius} from '../common'

const useStyles = makeStyles({
  root: {
    width: '30%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WearherCard({weather, scaleType, handleSetCurrentWeather, currentWeather}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

const getAverageTemperature = (weatherSegments) => {
    let total = 0;
    for(let i of weatherSegments){
        total += i.main.temp
    }
    return Math.round(total/weatherSegments.length)
}

const formatDate = (data) => {
  let date = new Date(data * 1000);
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
return `${day} ${month} ${year.slice(2)}`
}
  return (
    <Card className={classes.root} onClick={() => handleSetCurrentWeather(weather)} style={currentWeather.date === weather.date? {border: '2px solid black'}: {}} >
      <CardContent>
      <Typography variant="h5" component="h2">
        Temp:
        </Typography>
        <Typography variant="h5" component="h2">
        {scaleType === 'celsius'?`${toCelsius(getAverageTemperature(weather.weatherSegments))}C`: `${getAverageTemperature(weather.weatherSegments)}F`}
        </Typography>
        <Typography variant="h5" component="h2">
        Date:
        </Typography>
        <Typography variant="h5" component="h2">
        {weather && formatDate(weather.rawDate)}
        </Typography>
        <Typography variant="h5" component="h2">
        ...
        </Typography>
      </CardContent>
    </Card>
  );
}
