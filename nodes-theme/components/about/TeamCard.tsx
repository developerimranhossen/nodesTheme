import Image from "next/image";
import TeamMember from "../../public/team-member.png";

function TeamCard() {
  return (
    <div className="nt-team-card">
      <Image src={TeamMember} width={172} height={172} alt="" />
      <h1>Ekrem Elmas</h1>
      <p>Founder,CEO</p>
    </div>
  );
}

export default TeamCard;
