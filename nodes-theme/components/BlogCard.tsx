import Image from "next/image";
import CardImage from "../public/blog-card.svg";
import FlexImg from "../public/flex-card.svg";

function BlogCard({ bigCard, smallCard, flexCard }) {
  return (
    <div
      className={`nt-blogcard-container ${
        bigCard && "w-[588px] flex-col p-4 rounded-[24px] gap-6 border "
      } ${
        smallCard && "w-[384px] flex-col p-4 rounded-[24px] gap-[18px] border"
      } ${flexCard && "w-[588px] gap-8 rounded-lg h-[160px] self-stretch"}}`}
    >
      <Image src={flexCard ? FlexImg : CardImage} alt="card" />
      <div
        className={`flex flex-col ${bigCard && "gap-[18px] self-stretch"} ${
          smallCard && "gap-2 self-stretch"
        } ${flexCard && "gap-2 flex-grow-1 flex-shrink-0 basis-0"} `}
      >
        <div className="nt-header-wrap">
          <h5>Olivia Rhye • 1 Jan 2023</h5>
          <h6
            className={`${
              flexCard ? "text-base" : "text-2xl leading-[34px]"
            }  `}
          >
            UX review presentations
          </h6>
          <span>
            Linear helps streamline software projects, sprints, tasks, ...
          </span>
        </div>
        <div className="nt-text-wrap">
          <p>Branding</p>
          <p>Presentation</p>
          <p>Marketing</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
