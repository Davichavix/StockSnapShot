import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import useStyles from './styles';
import {useTickerPrice} from '../../hooks/useTickerPrice'
import { convertStringInput } from "../../helpers/helpers";

const TickerPrice = () => {

  const {currentPrice, tickerName, clear, handleSubmit, setTickerName} = useTickerPrice()

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} data-testid="form-submit-button">
        <div className={classes.ticker }>
        <Typography className={classes.appBar} variant="h5" data-testid="price-field">${currentPrice}</Typography>
        <TextField name="ticker" variant="outlined" label="Ticker" value={tickerName} inputProps={{ "data-testid": "text-field" }} onChange={(e) => setTickerName(convertStringInput(e.target.value))}/>
        </div>
        <Button className={classes.buttonSubmit} variant="text" color="primary" size="small" type="submit" fullWidth>Get Stock Quote</Button>
        <Button variant="text" color="secondary" size="small" onClick={clear} fullWidth>Clear Ticker</Button>
      </form>
    </Paper>
  )
}

export default TickerPrice;