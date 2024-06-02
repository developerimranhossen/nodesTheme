import DocumentationCard from "./DocumentationCard"
import DocuVerticalImg from "../public/docu-vertical.png";
import DocuHorizontal from "../public/docu-horizontal.png";


function UserSection() {
  return (
    <div className="nt-max-container flex flex-col items-center gap-10">
          <div className="w-[450px] flex flex-col justify-center items-center gap-3 ">
            <div className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M15.0052 7.16949L5.513 5.05297C4.05537 4.72797 2.67188 5.83695 2.67188 7.33039V23.8482C2.67188 24.9412 3.43059 25.8879 4.49739 26.1257L15.0052 28.4686V7.16949Z"
                  fill="#D33C85"
                />
                <path
                  d="M17 28.4682L27.5079 26.1252C28.5747 25.8874 29.3333 24.9408 29.3333 23.8478V7.3299C29.3333 5.83646 27.9499 4.72748 26.4923 5.05248L17 7.169V28.4682Z"
                  fill="#D33C85"
                />
              </svg>
              <h4 className="text-component-text-primary items-center text-lg">
                The modern standard
              </h4>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch">
              <h1 className="text-typography-heading text-center text-lg_2x">
                Beautiful documentation that converts users
              </h1>
              <p className="text-typography-paragraph-soft">
                A platform you can rely on to reach your audience
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <DocumentationCard path={DocuHorizontal} size={"384"} />
            <DocumentationCard path={DocuVerticalImg} size={"282"} />
            <DocumentationCard path={DocuVerticalImg} size={"282"} />
          </div>
          <div className="flex gap-6">
            <DocumentationCard path={DocuHorizontal} size={"486"} />
            <DocumentationCard path={DocuHorizontal} size={"486"} />
          </div>
        </div>
  )
}

export default UserSection