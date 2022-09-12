import { Fragment } from "react";
import Header from "../../Header/header";
import "./TeamInfo.css";

const TeamInfo = () => {
  return (
    <Fragment>
      <Header />
      <section className="our-team">
        <h1>OUR TEAM</h1>
        <div className="team-info__container">
          <div className="team-info team-info__member1">
            <div className="team-member__info team-member1">
              <h2>Hannah Daniel</h2>
              <h3>Project Manager</h3>
            </div>
          </div>
          <div className="team-info team-info__member2">
            <div className="team-member__info team-member1">
              <h2>Sovit Lekhak</h2>
              <h3>Developer</h3>
            </div>
          </div>
          <div className="team-info team-info__member3">
            <div className="team-member__info team-member1">
              <h2>Destiny Marshall</h2>
              <h3>Presenter</h3>
            </div>
          </div>
          <div className="team-info team-info__member4">
            <div className="team-member__info team-member1">
              <h2>Anup Gautam</h2>
              <h3>Designer</h3>
            </div>
          </div>
        </div>
      </section>
      ;
    </Fragment>
  );
};

export default TeamInfo;
