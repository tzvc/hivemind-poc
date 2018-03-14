import React, { Component } from "react";

import { ProjectHeader, ProjectContent } from "../components/Project";
import data from "../data";

class Project extends Component {
  state = data.project;

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onTabChange(e, data) {
    this.setState({ tabIndex: data });
  }
  render() {
    const {
      name,
      quote,
      description,
      likes,
      liked,
      tags,
      tabIndex,
      cards
    } = this.state;
    return (
      <div>
        <ProjectHeader
          name={name}
          quote={quote}
          likes={likes + liked}
          liked={liked}
          tags={tags}
          onLike={() => this._onLike()}
        />
        <ProjectContent
          tabIndex={tabIndex}
          onTabChange={(e, data) => this._onTabChange(e, data)}
          description={description}
          cards={cards}
        />
      </div>
    );
  }
}

export default Project;