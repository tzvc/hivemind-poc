import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";

const styles = theme => ({
  media: {
    height: 200,
    marginTop: "900px"
  },
  bigImage: {
    width: "100%"
  },
  fontTitle: {
    position: "absolute",
    top: "40%",
    left: "30%",
    fontSize: "125px",
    color: "white",
    transform: "translate(-40%, -50%)"
  },
  fontDesc: {
    top: "60%",
    left: "30%",
    position: "absolute",
    fontSize: "75px",
    color: "white",
    transform: "translate(-50%, -50%)"
  }
});

class Lobby extends Component {
  render() {
    const { classes } = this.props;
    const cards = [0, 1, 2, 3].map(value => (
      <div>
        <CardMedia
          className={classes.media}
          image="https://hackadaycom.files.wordpress.com/2018/01/kspcon_feat1.jpg?w=800"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Mega WOW kerbal controller
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </div>
    ));
    return (
      <div>
        <div
          style={{
            position: "relative",
            textAlign: "center"
          }}
        >
          <img
            className={classes.bigImage}
            src="https://wallpaper.wiki/wp-content/uploads/2016/09/1920x1080-wallpapers11.jpg"
            title="look at my wallpaper"
          />
          <h2 className={classes.fontTitle}>HIVE MIND :</h2>
          <text className={classes.fontDesc}>Do It Together</text>
        </div>
        <CardMatrix toolbar cards={cards} />
      </div>
    );
  }
}

export default withStyles(styles)(Lobby);
