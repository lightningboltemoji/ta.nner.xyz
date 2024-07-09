import TitleCard from "./title-card";
import WorkEduCard from "./work-edu-card";

export default function Home() {
  return (
    <>
      <div id="ball" className="fixed bg-black rounded-full" />
      <TitleCard />
      <WorkEduCard />
    </>
  );
}
