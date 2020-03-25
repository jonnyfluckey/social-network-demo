import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 750,
    marginLeft: "auto",
    marginRight: "auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function PostCard(props) {
  const classes = useStyles();
  const post = props.post;

  return (
    <>
      <Card className={classes.root} variant="outlined" raised="true">
        <CardHeader
          avatar={
            <Avatar src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png" />
          }
          title={post.user}
        />
        <CardContent>
          <Typography>{post.post}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">
            Like
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
