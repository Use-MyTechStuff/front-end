import React from "react";
import {NavLink} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "1.5rem",
    width: "20%"
  },
  media: {
    height: 140
  }
});

export default function TechItem({tech}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={tech.img}
          title={tech.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tech.item}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tech.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${tech.daily_rate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {tech.availability ? (
          <Button variant="contained" disabled>
            Taken
          </Button>
        ) : (
          <Button size="small" color="primary">
            <NavLink to={`/browse-rentals/${tech.id}`}>Rent</NavLink>
          </Button>
        )}
      </CardActions>
    </Card>
  );
}