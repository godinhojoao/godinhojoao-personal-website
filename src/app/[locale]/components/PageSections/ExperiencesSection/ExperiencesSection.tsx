import { ExperienceTimelineItem } from "../../../types/ExperienceTimelineItem";
import { TimelineItem } from "../../TimelineItem/TimelineItem";

type ExperiencesSectionProps = {
  translations: {
    title: string;
    timelineData: ExperienceTimelineItem[];
  };
};

export const ExperiencesSection = ({
  translations,
}: ExperiencesSectionProps) => {
  return (
    <section
      id="experiences"
      className="text-black lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-6 bg-[#091a41] text-white"
    >
      <h2 className="text-3xl text-center font-semibold md:mb-6">
        {translations.title}
      </h2>
      <div className="scroll-container">
        {translations.timelineData.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
