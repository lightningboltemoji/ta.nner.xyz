"use client";

import { useRef } from "react";
import ExpandingBall from "./expanding-ball";
import TitleCard from "./title-card";
import WorkEduCard from "./work-edu-card";

export default function Content() {
  const workEduCard = useRef(null);
  return (
    <>
      <TitleCard />
      <ExpandingBall anchorTo={workEduCard} />
      <WorkEduCard ref_={workEduCard} />
    </>
  );
}
