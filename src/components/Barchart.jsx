import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Chart from "react-google-charts";
import {toCelsius} from '../common'

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(5),
    },
  }),
);

export default function Barchart ({currentWeather, scaleType}) {
const [data ,setData] = React.useState([]); 
const classes = useStyles();

React.useEffect(() => {
  let i = 100
  let result = currentWeather.weatherSegments && currentWeather.weatherSegments.map(item => {
    return [new Date(item.dt).toLocaleTimeString(), scaleType === 'celsius'?`${toCelsius(item.main.temp)}C`: `${Math.round(item.main.temp)}F`]
  });
  setData(result)
  console.log(result);
}, [currentWeather.date, scaleType])
    return (
      <Paper className={classes.paper}>
       <Chart
          width={'100%'}
          height={'400px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Time', 'temp'],
            ...data
          ]}
          options={{
            legend: { position: 'none' },
            axes: {
              y: {
                0: { side: 'none' },
              },
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </Paper>
    );
  }
