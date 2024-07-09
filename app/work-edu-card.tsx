import { RefObject } from "react";

export default function WorkEduCard({ ref_ }: { ref_?: RefObject<any> }) {
  return (
    <div ref={ref_} className="relative flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-mono text-3xl mt-7">Work experience</h1>
        <h2>Amazon Web Services, 2022 -</h2>
        <h2>HealthSparq, 2015 - 2022</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-mono text-3xl mt-7">Education</h1>
        <h2>Oregon State University, 2017</h2>
        <h2>Computer Science, B.S.</h2>
      </div>
    </div>
  );
}
