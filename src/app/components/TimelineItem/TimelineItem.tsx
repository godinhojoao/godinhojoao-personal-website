import Link from "next/link";

type TimelineItemProps = {
  date: string;
  locationAndJobType: string;
  title: string;
  titleHref: string;
  companyName: string;
  paragraphs: string[];
  order: string;
};

export const TimelineItem = ({
  date,
  locationAndJobType,
  title,
  titleHref,
  companyName,
  paragraphs,
  order,
}: TimelineItemProps) => {
  const isLeftTimeline = order === "left-timeline";

  return (
    <div
      className={`container mx-auto flex flex-col items-${
        isLeftTimeline ? "start" : "end"
      } md:flex-row relative`}
    >
      <div
        className={`absolute inset-0 ${isLeftTimeline ? "left-0" : "right-0"}`}
        style={{
          background: "radial-gradient(rgba(0, 62, 192, 0.2), transparent)",
          filter: "blur(20px)",
        }}
      ></div>

      <div className="container mx-auto w-full h-full sticky">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className={`animate-pulse border-2-2 border-white absolute h-full border ${
              isLeftTimeline ? "right" : "left"
            } hidden md:block`}
            style={{
              right: "50%",
              border: "4px solid white",
              borderRadius: "1%",
            }}
          ></div>

          <div className="animate-pulse border-1-1 border-white absolute h-0 w-full bottom-0 border bottom block md:hidden"></div>

          <div
            className={`mb-8 flex justify-between flex-row-${order} items-center w-full`}
          >
            <div
              className={`order-1 md:w-5/12 ${
                isLeftTimeline ? "order-last" : "order-first"
              }`}
            ></div>
            <div
              className={`order-1 md:w-5/12 px-1 text-${
                isLeftTimeline ? "right" : "left"
              }`}
            >
              <p className="mb-3 text-base text-[#004fff]">{date}</p>
              <h3 className="mb-2 font-bold text-lg md:text-2xl">{title}</h3>
              <span className="mb-2">{locationAndJobType}</span>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={titleHref}
                className="
                  mb-3 text-[#004fff] text-lg md:text-2xl h-full flex items-center underline pr-1
                  cursor-pointer hover:text-[#004fff] hover:bg-[#2b6dff] hover:bg-opacity-20 transition-all
                "
                style={{ width: "fit-content" }}
              >
                {companyName}
              </Link>

              {paragraphs.map((paragraph, index) => (
                <p
                  key={`paragraph-${index}`}
                  className={`text-sm md:text-base leading-snug text-gray-50 text-opacity-100 ${
                    index < paragraphs.length - 1 ? "mb-2" : ""
                  }`}
                >
                  {paragraph.startsWith("-") ? (
                    <span className="inline-block mr-2">&#8226;</span>
                  ) : null}
                  {paragraph.replace(/^-\s*/, "")}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
