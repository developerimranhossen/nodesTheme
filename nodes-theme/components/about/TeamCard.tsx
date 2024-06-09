import Image from "next/image";
import TeamMember from "../../public/team-member.png";

function TeamCard() {
  return (
    <div className="nt-team-card">
      <Image src={TeamMember} width={172} height={172} alt="" />
      <h1 className="text-center mt-4">Ekrem Elmas</h1>
      <p className="text-center">Founder,CEO</p>
    </div>
  );
}

export default TeamCard;
