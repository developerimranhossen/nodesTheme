import ProgramCard from "./ProgramCard";

function ProgramSection() {
  return (
    <div className="nt-program-container">
      <div className="nt-header-wrap">
        <h1>Elevating Card Programs with Cutting-Edge Technology</h1>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <div className="nt-svg-wrap">
          <p className="text-container-text-secondary text-center text-md">
            Compare all pro features
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_26359_1306)">
              <path
                d="M19.2667 8.25825L16.0417 4.99992C15.9642 4.92181 15.872 4.85981 15.7705 4.81751C15.6689 4.7752 15.56 4.75342 15.45 4.75342C15.34 4.75342 15.2311 4.7752 15.1295 4.81751C15.028 4.85981 14.9358 4.92181 14.8583 4.99992C14.7031 5.15605 14.616 5.36726 14.616 5.58742C14.616 5.80757 14.7031 6.01878 14.8583 6.17492L17.825 9.16658H0.833333C0.61232 9.16658 0.400358 9.25438 0.244078 9.41066C0.0877974 9.56694 0 9.7789 0 9.99992C0 10.2209 0.0877974 10.4329 0.244078 10.5892C0.400358 10.7455 0.61232 10.8333 0.833333 10.8333H17.875L14.8583 13.8416C14.7802 13.9191 14.7182 14.0112 14.6759 14.1128C14.6336 14.2143 14.6118 14.3232 14.6118 14.4333C14.6118 14.5433 14.6336 14.6522 14.6759 14.7537C14.7182 14.8553 14.7802 14.9474 14.8583 15.0249C14.9358 15.103 15.028 15.165 15.1295 15.2073C15.2311 15.2496 15.34 15.2714 15.45 15.2714C15.56 15.2714 15.6689 15.2496 15.7705 15.2073C15.872 15.165 15.9642 15.103 16.0417 15.0249L19.2667 11.7916C19.7348 11.3228 19.9978 10.6874 19.9978 10.0249C19.9978 9.36241 19.7348 8.727 19.2667 8.25825Z"
                fill="#49A492"
              />
            </g>
            <defs>
              <clipPath id="clip0_26359_1306">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="nt-programcard-wrap">
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </div>
    </div>
  );
}

export default ProgramSection;
