import React from "react";
import { Context } from "../../store/Provider";
import RoboFriend from "./RoboFriend/RoboFriend";
import "./RoboFriends.css";

const RoboFriends = () => {
  const {
    state: { roboFriends, searchName, searchTag },
  } = React.useContext(Context);

  const filteredRoboFriends = getFilteredRoboFriends({
    searchName,
    searchTag,
    roboFriends,
  });

  return (
    <section className="container">
      {filteredRoboFriends.map((roboFriend, index) => {
        return (
          <RoboFriend
            key={index}
            pic={roboFriend.pic}
            fullName={roboFriend.fullName}
            email={roboFriend.email}
            company={roboFriend.company}
            position={roboFriend.position}
            dailyIncome={roboFriend.dailyIncome}
            id={roboFriend.id}
            tags={roboFriend.tags}
            toggleState={roboFriend.toggleState}
          />
        );
      })}
    </section>
  );
};

const getFilteredRoboFriends = ({ searchName, searchTag, roboFriends }) => {
  const filteredRoboFriendsByName = filterRoboFriendsByName(
    roboFriends,
    searchName
  );

  const filteredRoboFriendsByTag = filterRoboFriendsByTag(
    filteredRoboFriendsByName,
    searchTag
  );

  return filteredRoboFriendsByTag;
};

const filterRoboFriendsByName = (roboFriends, searchName) => {
  return searchName
    ? roboFriends.filter(({ fullName }) => {
        return fullName.toLowerCase().includes(searchName.toLowerCase());
      })
    : roboFriends;
};

const filterRoboFriendsByTag = (filteredRoboFriendsByName, searchTag) => {
  return searchTag
    ? filteredRoboFriendsByName.filter(({ tags }) => {
        return tags
          ? tags.some((tag) =>
              tag.toLowerCase().includes(searchTag.toLowerCase())
            )
          : false;
      })
    : filteredRoboFriendsByName;
};

export default RoboFriends;
