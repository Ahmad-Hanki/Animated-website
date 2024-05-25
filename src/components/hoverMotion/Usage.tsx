import Image from "next/image";
import HoverMotion from "./HoverMotion";

const Usage = () => {
  return (
    <div>
      <div className="image-content">
        <HoverMotion className="image">
          <Image
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(150px)",
            }}
            src={'/dfdfws'}
            width={600}
            height={600}
            alt="hero"
          />
        </HoverMotion>
      </div>
    </div>
  );
};

export default Usage;
