import Image from "next/image";
import HillImg from "../public/hill.jpg";

function Video() {
  return (
    <div className="nt-video">
      <div className=" nt-video-gradient"></div>
      {/* <div className="w-[1200px] h-[716px] absolute"></div> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="40"
        viewBox="0 0 35 40"
        fill="none"
      >
        <path
          d="M31.9611 21.7365L2.99228 38.2901C1.65896 39.052 0 38.0893 0 36.5536V20V3.44636C0 1.91071 1.65896 0.947979 2.99228 1.70987L31.9611 18.2635C33.3048 19.0313 33.3048 20.9687 31.9611 21.7365Z"
          fill="#D33C85"
        />
      </svg>
      <Image
        src={HillImg}
        alt="hill"
        fill
      />
    </div>
  );
}

export default Video;
