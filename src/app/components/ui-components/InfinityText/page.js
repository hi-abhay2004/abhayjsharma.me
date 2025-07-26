import Marquee from "react-fast-marquee";
// import useScrollDirection from "./useScrollDirection";
import useScrollDirection from "./userscrolldir/page";

export default function HeroMarquee() {
  const scrollDir = useScrollDirection();

  return (
    <div className="absolute md:bottom-6 bottom-6 left-0 w-full pointer-events-none">
      <Marquee
        speed={60} // adjust speed
        gradient={false}
        direction={scrollDir === 'down' ? 'left' : 'right'}
        pauseOnHover={false}
      >
        <h1 className="text-[20vw] lg:text-[13vw] font-extrabold text-white whitespace-nowrap pr-20">
          Abhay J Sharma — Abhay J Sharma — Abhay J Sharma — Abhay J Sharma — Abhay J Sharma —
        </h1>
      </Marquee>
    </div>
  );
}
