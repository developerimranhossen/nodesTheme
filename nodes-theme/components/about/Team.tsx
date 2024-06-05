import TeamCard from "./TeamCard";


function Team() {
  return (
    <div className="nt-team-container">
      <h3>Our Team</h3>
      <h2>Inspiring Greatness, United as One</h2>
      <div className="nt-card-wrap">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default Team;
