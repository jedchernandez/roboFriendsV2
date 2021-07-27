import "./RoboFriend.css";
export const Avatar = ({ pic }) => {
  return (
    <section className="image-container">
      <div className="circle">
        <img src={pic} alt="robo-friend" />
      </div>
    </section>
  );
};
