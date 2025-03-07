import { title } from "@/components/primitives";
import TiltedCard from "@/components/tiltedCard";

export default function MusicPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className={title()}>Music</h1>

      <TiltedCard
        imageSrc="/tequieroati.png"
        altText="Pablo Marte - Te Quiero A Tí"
        captionText="Pablo Marte - Te Quiero A Tí"
        containerHeight="350px"
        containerWidth="350px"
        imageHeight="350px"
        imageWidth="350px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">
            Pablo Marte - Te Quiero A Tí
          </p>
        }
      />

    </div>
  );
}
