import Image from "next/image";
import CardImage from "../public/blog-card.svg";
import FlexImg from "../public/flex-card.svg";

function BlogCard({ bigCard, smallCard, flexCard }) {
  return (
    <div
      className={`flex items-start  border-background-stroke-outermost ${
        bigCard && "w-[588px] flex-col p-4 rounded-[24px] gap-6 border "
      } ${smallCard && "w-[384px] flex-col p-4 rounded-[24px] gap-[18px] border"} ${
        flexCard && "w-[588px] gap-8 rounded-lg h-[160px] self-stretch"
      }}`}
    >
      <Image src={flexCard ? FlexImg : CardImage} alt="card" />
      <div
        className={`flex flex-col ${bigCard && "gap-[18px] self-stretch"} ${
          smallCard && "gap-2 self-stretch"
        } ${flexCard && "gap-2 flex-grow-1 flex-shrink-0 basis-0"} `}
      >
        <div className="flex flex-col items-start gap-2">
          <p className="text-container-text-secondary font-mediuml leading-6">
            Olivia Rhye • 1 Jan 2023
          </p>
          <h2
            className={`text-typography-heading font-semibold ${
              flexCard ? "text-base" : "text-2xl leading-[34px]"
            }  `}
          >
            UX review presentations
          </h2>
          <p className="text-typography-body-soft leading-6">
          Linear helps streamline software projects, sprints, tasks, ...
          </p>
        </div>
        <div className="flex items-start gap-2">
          <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">
            Branding
          </p>
          <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">
            Presentation
          </p>
          <p className="text-component-text-tertiary text-sm py-[2px] px-2 border rounded-[99px]  border-component-stroke-tertiary bg-component-fill-tertiary-soft">
            Marketing
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default BlogCard;
