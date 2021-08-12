import React from "react";
import { Avatar, CardContainer, CardText, Generic, Link } from "./styles";

function Card({
  name,
  username,
  avatar,
  bio,
  url,
  public_repos,
  followers,
  following,
}) {
  return (
    <CardContainer>
      <Avatar src={avatar} alt={name} />
      <CardText font="name">{name}</CardText>
      <CardText font="username">@{username}</CardText>

      <Generic>
        <CardText font="numbers">Followers: {followers}</CardText>
        <CardText font="numbers">Following: {following}</CardText>
      </Generic>

      <CardText font="repos">Public Repositories: {public_repos}</CardText>
      <CardText font="bio">{bio}</CardText>
      <Link href={url} target="_blank" rel="external">
        <CardText font="link">View Profile</CardText>
      </Link>
    </CardContainer>
  );
}

export default Card;
