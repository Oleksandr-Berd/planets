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

import { ReactComponent as MercuryInternalMobileSvg } from "assets/svg/mobile/internal/planet-mercury-internal.svg";
import { ReactComponent as VenusInternalMobileSvg } from "assets/svg/mobile/internal/planet-venus-internal.svg";
import { ReactComponent as EarthInternalMobileSvg } from "assets/svg/mobile/internal/planet-earth-internal.svg";
import { ReactComponent as MarsInternalMobileSvg } from "assets/svg/mobile/internal/planet-mars-internal.svg"
import { ReactComponent as JupiterInternalMobileSvg } from "assets/svg/mobile/internal/planet-jupiter-internal.svg";
import { ReactComponent as SaturnInternalMobileSvg } from "assets/svg/mobile/internal/planet-saturn-internal.svg";
import { ReactComponent as UranusInternalMobileSvg } from "assets/svg/mobile/internal/planet-uranus-internal.svg";
import { ReactComponent as NeptuneInternalMobileSvg } from "assets/svg/mobile/internal/planet-neptune-internal.svg";

import geologyMercuryPng from "assets/images/geology-mercury.png"
import geologyVenusPng from "assets/images/geology-venus.png";
import geologyEarthPng from "assets/images/geology-earth.png";
import geologyMarsPng from "assets/images/geology-mars.png";
import geologyJupiterPng from "assets/images/geology-jupiter.png";
import geologySaturnPng from "assets/images/geology-saturn.png";
import geologyUranusPng from "assets/images/geology-uranus.png";
import geologyNeptunePng from "assets/images/geology-neptune.png";




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

export const internalSvgMobile: Record<string, React.FC> = {
  mercuryInternal: MercuryInternalMobileSvg,
  venusInternal: VenusInternalMobileSvg,
  earthInternal: EarthInternalMobileSvg,
  marsInternal: MarsInternalMobileSvg,
  jupiterInternal: JupiterInternalMobileSvg,
  saturnInternal: SaturnInternalMobileSvg,
  uranusInternal: UranusInternalMobileSvg,
  neptuneInternal: NeptuneInternalMobileSvg,
};

export const geologyPng: Record<string, string> = {
  mercuryGeology: geologyMercuryPng,
  venusGeology: geologyVenusPng,
  earthGeology: geologyEarthPng,
  marsGeology: geologyMarsPng,
  jupiterGeology: geologyJupiterPng,
  saturnGeology: geologySaturnPng,
  uranusGeology: geologyUranusPng,
  neptuneGeology: geologyNeptunePng,
};


