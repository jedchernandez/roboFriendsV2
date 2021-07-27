import "./RoboFriend.css";
import Tags from "./Tags/Tags";

export const RoboFriendProfile = ({
  fullName,
  email,
  company,
  position,
  id,
  average,
  income,
  tags,
  toggleState,
}) => {
  return (
    <section className="robo-friend-container">
      <header className="fullname">{fullName}</header>
      <article className="profile">
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Position: {position}</p>
        <p data-testid={`average-${id}`}>Average Daily Income: {average}</p>
      </article>
      <aside
        data-testid={`income-list-${id}`}
        className={
          toggleState
            ? "income-container-expanded"
            : "income-container-collapsed"
        }
      >
        <ul>{income}</ul>
      </aside>
      <Tags id={id} tags={tags} />
    </section>
  );
};
