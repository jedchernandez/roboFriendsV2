import * as React from "react";
import { Avatar } from "./Avatar";
import "./RoboFriend.css";
import { RoboFriendProfile } from "./RoboFriendProfile";
import { ToggleIncomeButton } from "./ToggleIncomeButton";

const RoboFriend = ({
  pic,
  fullName,
  email,
  company,
  position,
  dailyIncome,
  id,
  tags,
  toggleState,
}) => {
  const rawAverage =
    dailyIncome.map(Number).reduce((acc, init) => (acc = acc + init), 0) /
    dailyIncome.length;

  const average = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(rawAverage);

  const income = dailyIncome.map((income, index) => {
    const formattedIncome = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(income);

    return (
      <li data-testid={`income-${id}`} key={index} className="income-container">
        <span className="dayNumber">{`Day ${index + 1}:`}</span>
        <span className="dayValue">{`${formattedIncome}`}</span>
      </li>
    );
  });

  return (
    <main data-testid={`robo-friend-${id}`} className="card">
      <Avatar pic={pic} />
      <RoboFriendProfile
        fullName={fullName}
        email={email}
        company={company}
        position={position}
        id={id}
        average={average}
        income={income}
        tags={tags}
        toggleState={toggleState}
      />
      <ToggleIncomeButton id={id} toggleState={toggleState} />
    </main>
  );
};

export default RoboFriend;
