import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtons({selectedValue, handleRadioChange}) {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="Fahrenheit">
        <FormControlLabel 
          value="celsius" 
          control={<Radio color="primary" />} 
          label="Celsius" 
          checked={selectedValue === 'celsius'}
        onChange={handleRadioChange} 
        />
        <FormControlLabel 
          value="Fahrenheit" 
          control={<Radio color="primary" />} 
          label="Fahrenheit" 
          checked={selectedValue === 'Fahrenheit'}
        onChange={handleRadioChange}/>
      </RadioGroup>
    </FormControl>
  );
}
