import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../store/actions";
import Message from "../Message/Message";

const ChatBlock = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messages);
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <Grid container direction="column">
      <Box border={1}>
        {messages.map((message, index) => {
          return (
            <Message
              index={index + 1}
              key={message.id}
              id={message.id}
              author={message.author}
              message={message.message}
              date={message.datetime}
            />
          );
        })}
      </Box>
    </Grid>
  );
};

export default ChatBlock;
