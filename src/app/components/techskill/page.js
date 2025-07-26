import { DotBackground } from "../ui-components/DotBg/page";
import FloatingIcons from "../ui-components/FloatingIcons/page";
export default function TechSkills() {
  return (
    <>
    <h3 className="text-4xl font-bold text-center  mb-8">My Tech Skills</h3>
    <div className="relative h-[120vh]  sm:h-[80vh] overflow-hidden">
    <DotBackground
      dotSize={1}
      dotColor="#000"
      darkDotColor="#fff"
      spacing={20}
      fadeIntensity={20}
      className="relative h-[80vh]  w-full "
    >
      <FloatingIcons />

      {/* You can keep this or remove it */}
      <h1 className=" text-9xl font-bold text-white dark:text-white z-30 opacity-0 p-24">
        Floating Icons Section
      </h1>
    </DotBackground>
    </div>
    </>
  );
}