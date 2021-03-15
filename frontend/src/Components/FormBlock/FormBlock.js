import React, { useState } from "react";
import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { postMessage } from "../../store/actions";

const FormBlock = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState({
    author: "",
    message: "",
  });

  const loading = useSelector((state) => state.loading);

  const messageChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMessage((PrevState) => ({
      ...PrevState,
      [name]: value,
    }));
  };

  const submitFromHandler = (e) => {
    e.preventDefault();
    if (message.author || message.author === null) {
      console.log("123");
    }
    dispatch(postMessage(message));
    setMessage({
      author: "",
      message: "",
    });
  };

  return (
    <form style={{ margin: "50px" }} onSubmit={submitFromHandler}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            fullWidth
            variant="outlined"
            name="author"
            label="Author"
            value={message.author}
            onChange={messageChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField
            name="message"
            fullWidth
            variant="outlined"
            label="Message"
            multiline
            rows={5}
            value={message.message}
            onChange={messageChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">
            Send
          </Button>
        </Grid>
        {loading ? <CircularProgress /> : null}
      </Grid>
    </form>
  );
};

export default FormBlock;
