import { ReactComponent as MercuryPlanetSvg } from "assets/svg/planet-mercury.svg";
import { ReactComponent as VenusPlanetSvg } from "assets/svg/planet-venus.svg";
import { ReactComponent as EarthPlanetSvg } from "assets/svg/planet-earth.svg";
import { ReactComponent as MarsPlanetSvg } from "assets/svg/planet-mars.svg";
import { ReactComponent as JupiterPlanetSvg } from "assets/svg/planet-jupiter.svg";
import { ReactComponent as SaturnPlanetSvg } from "assets/svg/planet-saturn.svg";
import { ReactComponent as UranusPlanetSvg } from "assets/svg/planet-uranus.svg";
import { ReactComponent as NeptunePlanetSvg } from "assets/svg/planet-neptune.svg";

import { ReactComponent as MercuryPlanetMobileSvg } from "assets/svg/mobile/planets/mercury.svg";
import { ReactComponent as VenusPlanetMobileSvg } from "assets/svg/mobile/planets/venus.svg";
import { ReactComponent as EarthPlanetMobileSvg } from "assets/svg/mobile/planets/earth.svg";
import { ReactComponent as MarsPlanetMobileSvg } from "assets/svg/mobile/planets/mars.svg";
import { ReactComponent as JupiterPlanetMobileSvg } from "assets/svg/mobile/planets/jupiter.svg";
import { ReactComponent as SaturnPlanetMobileSvg } from "assets/svg/mobile/planets/saturn.svg";
import { ReactComponent as UranusPlanetMobileSvg } from "assets/svg/mobile/planets/uranus.svg";
import { ReactComponent as NeptunePlanetMobileSvg } from "assets/svg/mobile/planets/neptune.svg";


export const planetsSvg: Record<string, React.FC> = {
  mercuryPlanet: MercuryPlanetSvg,
  venusPlanet: VenusPlanetSvg,
  earthPlanet: EarthPlanetSvg,
  marsPlanet: MarsPlanetSvg,
  jupiterPlanet: JupiterPlanetSvg,
  saturnPlanet: SaturnPlanetSvg,
  uranusPlanet: UranusPlanetSvg,
  neptunePlanet: NeptunePlanetSvg,
};


export const planetsSvgMobile: Record<string, React.FC> = {
  mercuryPlanet: MercuryPlanetMobileSvg,
  venusPlanet: VenusPlanetMobileSvg,
  earthPlanet: EarthPlanetMobileSvg,
  marsPlanet: MarsPlanetMobileSvg,
  jupiterPlanet: JupiterPlanetMobileSvg,
  saturnPlanet: SaturnPlanetMobileSvg,
  uranusPlanet: UranusPlanetMobileSvg,
  neptunePlanet: NeptunePlanetMobileSvg,
};

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   xmlns:xlink="http://www.w3.org/1999/xlink"
//   width="200" // New width
//   height="200" // New height
//   viewBox="0 0 290 290" // Adjust viewBox to maintain aspect ratio
// >
//   {/* SVG content */}
// </svg>;