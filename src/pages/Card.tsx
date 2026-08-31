function Card() {
  return (
    <div className="bg-background-card h-screen w-full card-wrapper">
      <svg className="absolute inset-0 h-full w-full rounded-sm opacity-[0.15] mix-blend-multiply">
        <filter id="paperNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paperNoise)" />
      </svg>
      <div className="font-copperplate flex h-full w-full flex-col items-center justify-between p-8 text-lg">
        <div className="flex w-full flex-row justify-between">
          <p>908.415.5997</p>
          <div className="flex flex-col items-center">
            <p>KHOURY COLLEGE</p>
            <p>Northeastern University</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold">Gavin NORMAND</p>
          <p>Honors CS @ Northeastern</p>
        </div>
        <div className="flex w-full flex-row justify-center">
          <p>normandgavin@gmail.com | gavinnormand.com</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
