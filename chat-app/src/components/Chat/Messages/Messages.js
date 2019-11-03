import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

const Messages = ({ messages }) => {
  return (
    <List>
      {messages.flatMap((message, index) => [
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar
              alt="Cute Kitten"
              src="http://placekitten.com/200/200"
            />
          </ListItemAvatar>
          <ListItemText primary={message} />
        </ListItem>,
        <Divider
          component="li"
          key={"divider-" + index}
          variant="inset"
        />
      ])}
    </List>
  );
};

export default Messages;
