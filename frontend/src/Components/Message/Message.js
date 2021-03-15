import React from "react";
import { Box, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  message: {
    margin: "20px",
    padding: "10px",
  },
}));

const Message = (props) => {
  const classes = useStyles();

  return (
    <Box border={1} className={classes.message}>
      <Typography variant="h6">
        {props.index}. Author: {props.author}
      </Typography>
      <p>Message: {props.message}</p>
      <p>Date: {moment(props.date).format("DD MMMM YYYY , HH:mm:ss")}</p>
    </Box>
  );
};

export default Message;
