import React, { Component } from "react";

import SwipeableViews from "react-swipeable-views";

import IconButton from "material-ui/IconButton";
import Chip from "material-ui/Chip";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import ReactMarkdown from "react-markdown";

import StarIcon from "material-ui-icons/Grade";
import FavoriteIcon from "material-ui-icons/Favorite";
import FavoriteBorderIcon from "material-ui-icons/FavoriteBorder";
import UpIcon from "material-ui-icons/KeyboardArrowUp";
import DownIcon from "material-ui-icons/KeyboardArrowDown";

import CardMatrix from "./CardMatrix";

export const ProjectTags = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.tags.map(tag => (
        <Chip key={tag} style={{ margin: "3px" }} label={tag} />
      ))}
    </div>
  );
};

export const ProjectStatus = props => {
  return (
    <IconButton onClick={props.onLike}>
      <Typography variant="display1">{props.likes}</Typography>
      {props.liked ? (
        <FavoriteIcon style={{ margin: "6px" }} />
      ) : (
        <FavoriteBorderIcon style={{ margin: "6px" }} />
      )}
    </IconButton>
  );
};

export const ProjectCards = props => {
  const cards = props.cards.map(card => (
    <CardContent>
      <Typography variant="headline" component="h2" style={{ margin: "12px" }}>
        {card.title}
      </Typography>
      <Typography component="p">{card.description}</Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "12px"
        }}
      >
        <IconButton>
          <UpIcon style={{ height: 38, width: 38 }} />
        </IconButton>
        <Typography variant="headline">{card.points}</Typography>
        <IconButton>
          <DownIcon style={{ height: 38, width: 38 }} />
        </IconButton>
      </div>
    </CardContent>
  ));
  return <CardMatrix toolbar cards={cards} />;
};

export const ProjectHeader = props => {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          flex: "grow",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Typography variant="display2">{props.name}</Typography>
        <ProjectStatus
          liked={props.liked}
          likes={props.likes}
          onLike={props.onLike}
        />
      </div>
      <ProjectTags tags={props.tags} />
      <Typography variant="headline" style={{ margin: "24px" }}>
        {props.quote ? <i>"{props.quote}"</i> : null}
      </Typography>
    </div>
  );
};

export const ProjectContent = props => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          onChange={props.onTabChange}
          value={props.tabIndex}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Decription" value={0} />
          <Tab label="Files" value={1} />
          <Tab label="Project Management" value={2} />
          <Tab label="Conversation" value={3} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={props.tabIndex} onChangeIndex={props.onTabChange}>
        <div>
          <ReactMarkdown source={props.description} />
        </div>
        <div>Source file explorer goes here</div>
        <div>
          <ProjectCards cards={props.cards} />
        </div>
        <div>Better than Slack</div>
      </SwipeableViews>
    </div>
  );
};