import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ForwardIcon from '@material-ui/icons/Forward';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
   },
   hideArrow: {
     display: 'none'
   }
});


export function RightArrow({next, end, data}) {
    const classes = useStyles();
    return <div 
      className={`${classes.container} ${end===data.length?classes.hideArrow: {}}`} 
      onClick={() => next()}
    >
      <ForwardIcon style={{ color: 'rgb(66, 133, 244)', fontSize: '100px',}}/>
    </div>;
}

export function LeftArrow({prev, start}) {
  const classes = useStyles();
  return <div 
      className={`${classes.container} ${start===0?classes.hideArrow: {}}`} 
      onClick={() => prev()}
    >
      <ForwardIcon style={{transform: 'rotate(180deg)', color: 'rgb(66, 133, 244)', fontSize: '100px'}}/>
  </div>;
}
