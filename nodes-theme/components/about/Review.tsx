import Image from "next/image";
import AvatarImg from "../../public/avatar.png";
import Input from "../auth/Input";
import TextArea from "../auth/TextArea";

function Review() {
  return (
    <div className="nt-review-container">
      <div className="nt-review-wrap">
        <div className="nt-header-wrap">
          <h1>Good quality & well made</h1>
          <div className="nt-svg-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M8.15931 0.474027C8.44792 -0.160278 9.34893 -0.160277 9.63754 0.474027L11.5478 4.6724C11.666 4.93217 11.9119 5.11083 12.1955 5.14296L16.7787 5.66238C17.4711 5.74085 17.7496 6.59776 17.2355 7.06826L13.8329 10.1824C13.6224 10.3751 13.5285 10.6642 13.5855 10.9438L14.5078 15.4632C14.6472 16.146 13.9182 16.6756 13.3119 16.3321L9.29871 14.0584C9.05039 13.9177 8.74645 13.9177 8.49814 14.0584L4.48495 16.3321C3.87862 16.6756 3.14969 16.146 3.28903 15.4632L4.21133 10.9438C4.26839 10.6642 4.17447 10.3751 3.96394 10.1824L0.561354 7.06826C0.0472806 6.59776 0.325709 5.74085 1.01815 5.66238L5.60135 5.14296C5.88494 5.11083 6.13083 4.93217 6.24903 4.6724L8.15931 0.474027Z"
                fill="#FFC14A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M8.15931 0.474027C8.44792 -0.160278 9.34893 -0.160277 9.63754 0.474027L11.5478 4.6724C11.666 4.93217 11.9119 5.11083 12.1955 5.14296L16.7787 5.66238C17.4711 5.74085 17.7496 6.59776 17.2355 7.06826L13.8329 10.1824C13.6224 10.3751 13.5285 10.6642 13.5855 10.9438L14.5078 15.4632C14.6472 16.146 13.9182 16.6756 13.3119 16.3321L9.29871 14.0584C9.05039 13.9177 8.74645 13.9177 8.49814 14.0584L4.48495 16.3321C3.87862 16.6756 3.14969 16.146 3.28903 15.4632L4.21133 10.9438C4.26839 10.6642 4.17447 10.3751 3.96394 10.1824L0.561354 7.06826C0.0472806 6.59776 0.325709 5.74085 1.01815 5.66238L5.60135 5.14296C5.88494 5.11083 6.13083 4.93217 6.24903 4.6724L8.15931 0.474027Z"
                fill="#FFC14A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M8.15931 0.474027C8.44792 -0.160278 9.34893 -0.160277 9.63754 0.474027L11.5478 4.6724C11.666 4.93217 11.9119 5.11083 12.1955 5.14296L16.7787 5.66238C17.4711 5.74085 17.7496 6.59776 17.2355 7.06826L13.8329 10.1824C13.6224 10.3751 13.5285 10.6642 13.5855 10.9438L14.5078 15.4632C14.6472 16.146 13.9182 16.6756 13.3119 16.3321L9.29871 14.0584C9.05039 13.9177 8.74645 13.9177 8.49814 14.0584L4.48495 16.3321C3.87862 16.6756 3.14969 16.146 3.28903 15.4632L4.21133 10.9438C4.26839 10.6642 4.17447 10.3751 3.96394 10.1824L0.561354 7.06826C0.0472806 6.59776 0.325709 5.74085 1.01815 5.66238L5.60135 5.14296C5.88494 5.11083 6.13083 4.93217 6.24903 4.6724L8.15931 0.474027Z"
                fill="#FFC14A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M8.15931 0.474027C8.44792 -0.160278 9.34893 -0.160277 9.63754 0.474027L11.5478 4.6724C11.666 4.93217 11.9119 5.11083 12.1955 5.14296L16.7787 5.66238C17.4711 5.74085 17.7496 6.59776 17.2355 7.06826L13.8329 10.1824C13.6224 10.3751 13.5285 10.6642 13.5855 10.9438L14.5078 15.4632C14.6472 16.146 13.9182 16.6756 13.3119 16.3321L9.29871 14.0584C9.05039 13.9177 8.74645 13.9177 8.49814 14.0584L4.48495 16.3321C3.87862 16.6756 3.14969 16.146 3.28903 15.4632L4.21133 10.9438C4.26839 10.6642 4.17447 10.3751 3.96394 10.1824L0.561354 7.06826C0.0472806 6.59776 0.325709 5.74085 1.01815 5.66238L5.60135 5.14296C5.88494 5.11083 6.13083 4.93217 6.24903 4.6724L8.15931 0.474027Z"
                fill="#FFC14A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M8.15931 0.474027C8.44792 -0.160278 9.34893 -0.160277 9.63754 0.474027L11.5478 4.6724C11.666 4.93217 11.9119 5.11083 12.1955 5.14296L16.7787 5.66238C17.4711 5.74085 17.7496 6.59776 17.2355 7.06826L13.8329 10.1824C13.6224 10.3751 13.5285 10.6642 13.5855 10.9438L14.5078 15.4632C14.6472 16.146 13.9182 16.6756 13.3119 16.3321L9.29871 14.0584C9.05039 13.9177 8.74645 13.9177 8.49814 14.0584L4.48495 16.3321C3.87862 16.6756 3.14969 16.146 3.28903 15.4632L4.21133 10.9438C4.26839 10.6642 4.17447 10.3751 3.96394 10.1824L0.561354 7.06826C0.0472806 6.59776 0.325709 5.74085 1.01815 5.66238L5.60135 5.14296C5.88494 5.11083 6.13083 4.93217 6.24903 4.6724L8.15931 0.474027Z"
                fill="#FFC14A"
              />
            </svg>{" "}
            <p>9 days ago</p>
          </div>
        </div>
        <div className="nt-body-wrap">
          <button>
            <svg
              className="nt-left-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <g clip-path="url(#clip0_26080_4086)">
                <path
                  d="M24.0711 16.9998H9.92893"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 9.92871L9.92893 16.9998L17 24.0708"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_26080_4086">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-0.707107 0.707107 0.707107 0.707107 17 0.0292969)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <p>
            “Love this shirt- thick, good quality. Love the pockets and the
            sleeves are my favourite detail. It’s slightly longer at the back
            which I don’t love but don’t hate. My only thing would be that it’s
            very boxy so I feel only flattering to certain body types.{" "}
          </p>
          <button>
            <svg
              className="nt-right-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <g clip-path="url(#clip0_26621_4707)">
                <path
                  d="M9.89964 16.9705H24.0418"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9707 9.89941L24.0418 16.9705L16.9707 24.0415"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_26621_4707">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(16.9707) rotate(45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="nt-review-img">
          <Image src={AvatarImg} width={72} height={72} alt="" />
          <h3>Cameron Williamson</h3>
          <div className="nt-svg-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <circle cx="4.66602" cy="4" r="4" fill="#9DA6CB" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <circle cx="4.66602" cy="4" r="4" fill="#9DA6CB" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#6D49A4" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <circle cx="4.66602" cy="4" r="4" fill="#9DA6CB" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <circle cx="4.66602" cy="4" r="4" fill="#9DA6CB" />
            </svg>
          </div>
        </div>
        <Input data={{type:'text', label: 'Name', placeholder: 'Enter your name'}}/>
        <Input data={{type:'password', label: 'Email', placeholder: 'Enter your Email Address'}}/>

        <TextArea data={{label: 'Write your Message', placeholder: 'Write message here...'}} />

        <Input data={{type:'checkbox', label: 'You agree to our friendly privacy policy.'}}/>
      </div>
    </div>
  );
}

export default Review;
