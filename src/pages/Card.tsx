function Card() {
  return (
    <div className="bg-background-card card-wrapper h-screen w-full">
      <svg className="pointer-events-none absolute inset-0 h-full w-full rounded-sm opacity-[0.15] mix-blend-multiply">
        <filter id="paperNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.1"
            numOctaves="5"
            seed="7"
            stitchTiles="stitch"
            result="noise"
          />

          <feDiffuseLighting
            in="contrastNoise"
            result="lit"
            surfaceScale="3"
            diffuseConstant="1.2"
            lightingColor="white"
          >
            <feDistantLight azimuth="235" elevation="40" />
          </feDiffuseLighting>
        </filter>
        <rect width="100%" height="100%" filter="url(#paperNoise)" />
      </svg>
      <div className="font-copperplate flex h-full w-full flex-col items-center justify-between p-8">
        <div className="flex w-full flex-row justify-between">
          <a href="tel:+19084155997">908.415.5997</a>
          <div className="flex flex-col items-center">
            <p>KHOURY COLLEGE</p>
            <p>Northeastern University</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">Gavin NORMAND</p>
          <p className="text-lg">Honors CS @ Northeastern</p>
        </div>
        <div className="flex w-full flex-row justify-center">
          <p>
            <a href="mailto:normandgavin@gmail.com">normandgavin@gmail.com</a> |{" "}
            <a href="https://www.gavinnormand.com/" target="_blank">
              gavinnormand.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
