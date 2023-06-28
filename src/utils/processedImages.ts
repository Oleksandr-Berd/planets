//Mobile
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
import { ReactComponent as MarsInternalMobileSvg } from "assets/svg/mobile/internal/planet-mars-internal.svg";
import { ReactComponent as JupiterInternalMobileSvg } from "assets/svg/mobile/internal/planet-jupiter-internal.svg";
import { ReactComponent as SaturnInternalMobileSvg } from "assets/svg/mobile/internal/planet-saturn-internal.svg";
import { ReactComponent as UranusInternalMobileSvg } from "assets/svg/mobile/internal/planet-uranus-internal.svg";
import { ReactComponent as NeptuneInternalMobileSvg } from "assets/svg/mobile/internal/planet-neptune-internal.svg";

//Tablet
import { ReactComponent as MercuryPlanetTabletSvg } from "assets/svg/tablet/planets/mercury_planet.svg";
import { ReactComponent as VenusPlanetTabletSvg } from "assets/svg/tablet/planets/venus_planet.svg";
import { ReactComponent as EarthPlanetTabletSvg } from "assets/svg/tablet/planets/earth_planet.svg";
import { ReactComponent as MarsPlanetTabletSvg } from "assets/svg/tablet/planets/mars_planet.svg";
import { ReactComponent as JupiterPlanetTabletSvg } from "assets/svg/tablet/planets/jupiter_planet.svg";
import { ReactComponent as SaturnPlanetTabletSvg } from "assets/svg/tablet/planets/saturn_planet.svg";
import { ReactComponent as UranusPlanetTabletSvg } from "assets/svg/tablet/planets/uranus_planet.svg";
import { ReactComponent as NeptunePlanetTabletSvg } from "assets/svg/tablet/planets/neptune_planet.svg";

import { ReactComponent as MercuryInternalTabletSvg } from "assets/svg/tablet/internal/planet-mercury-internal.svg";
import { ReactComponent as VenusInternalTabletSvg } from "assets/svg/tablet/internal/planet-venus-internal.svg";
import { ReactComponent as EarthInternalTabletSvg } from "assets/svg/tablet/internal/planet-earth-internal.svg";
import { ReactComponent as MarsInternalTabletSvg } from "assets/svg/tablet/internal/planet-mars-internal.svg";
import { ReactComponent as JupiterInternalTabletSvg } from "assets/svg/tablet/internal/planet-jupiter-internal.svg";
import { ReactComponent as SaturnInternalTabletSvg } from "assets/svg/tablet/internal/planet-saturn-internal.svg";
import { ReactComponent as UranusInternalTabletSvg } from "assets/svg/tablet/internal/planet-uranus-internal.svg";
import { ReactComponent as NeptuneInternalTabletSvg } from "assets/svg/tablet/internal/planet-neptune-internal.svg";

//desktop

import { ReactComponent as MercuryPlanetDesktopSvg } from "assets/svg/desktop/planets/planet_mercury_desktop.svg";
import { ReactComponent as VenusPlanetDesktopSvg } from "assets/svg/desktop/planets/planet_venus_desktop.svg";
import { ReactComponent as EarthPlanetDesktopSvg } from "assets/svg/desktop/planets/planet_earth_desktop.svg";
import { ReactComponent as MarsPlanetDesktopSvg } from "assets/svg/desktop/planets/planet_mars_desktop.svg";
import { ReactComponent as JupiterPlanetDesktopSvg } from "assets/svg/desktop/planets/planet_jupiter_desktop.svg";
import { ReactComponent as SaturnPlanetDesktopSvg } from "assets/svg/desktop/planets/planet_saturn_desktop.svg";
import { ReactComponent as UranusPlanetDesktopSvg } from "assets/svg/desktop/planets/planet_uranus_desktop.svg";
import { ReactComponent as NeptunePlanetDesktopSvg } from "assets/svg/desktop/planets/planet_neptune_desktop.svg";

import { ReactComponent as MercuryInternalDesktopSvg } from "assets/svg/desktop/internal/internal-mercury-internal.svg";
import { ReactComponent as VenusInternalDesktopSvg } from "assets/svg/desktop/internal/internal-venus-internal.svg";
import { ReactComponent as EarthInternalDesktopSvg } from "assets/svg/desktop/internal/internal-earth-internal.svg";
import { ReactComponent as MarsInternalDesktopSvg } from "assets/svg/desktop/internal/internal-mars-internal.svg";
import { ReactComponent as JupiterInternalDesktopSvg } from "assets/svg/desktop/internal/internal-jupiter-internal.svg";
import { ReactComponent as SaturnInternalDesktopSvg } from "assets/svg/desktop/internal/internal-saturn-internal.svg";
import { ReactComponent as UranusInternalDesktopSvg } from "assets/svg/desktop/internal/internal-uranus-internal.svg";
import { ReactComponent as NeptuneInternalDesktopSvg } from "assets/svg/desktop/internal/internal-neptune-internal.svg";

import geologyMercuryPng from "assets/images/geology-mercury.png";
import geologyVenusPng from "assets/images/geology-venus.png";
import geologyEarthPng from "assets/images/geology-earth.png";
import geologyMarsPng from "assets/images/geology-mars.png";
import geologyJupiterPng from "assets/images/geology-jupiter.png";
import geologySaturnPng from "assets/images/geology-saturn.png";
import geologyUranusPng from "assets/images/geology-uranus.png";
import geologyNeptunePng from "assets/images/geology-neptune.png";

//Mobile

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

//Tablet

export const planetsSvgTablet: Record<string, React.FC> = {
  mercuryPlanetTablet: MercuryPlanetTabletSvg,
  venusPlanetTablet: VenusPlanetTabletSvg,
  earthPlanetTablet: EarthPlanetTabletSvg,
  marsPlanetTablet: MarsPlanetTabletSvg,
  jupiterPlanetTablet: JupiterPlanetTabletSvg,
  saturnPlanetTablet: SaturnPlanetTabletSvg,
  uranusPlanetTablet: UranusPlanetTabletSvg,
  neptunePlanetTablet: NeptunePlanetTabletSvg,
};

export const internalSvgTablet: Record<string, React.FC> = {
  mercuryInternalTablet: MercuryInternalTabletSvg,
  venusInternalTablet: VenusInternalTabletSvg,
  earthInternalTablet: EarthInternalTabletSvg,
  marsInternalTablet: MarsInternalTabletSvg,
  jupiterInternalTablet: JupiterInternalTabletSvg,
  saturnInternalTablet: SaturnInternalTabletSvg,
  uranusInternalTablet: UranusInternalTabletSvg,
  neptuneInternalTablet: NeptuneInternalTabletSvg,
};

//Desktop

export const planetsSvgDesktop: Record<string, React.FC> = {
  mercuryPlanetDesktop: MercuryPlanetDesktopSvg,
  venusPlanetDesktop: VenusPlanetDesktopSvg,
  earthPlanetDesktop: EarthPlanetDesktopSvg,
  marsPlanetDesktop: MarsPlanetDesktopSvg,
  jupiterPlanetDesktop: JupiterPlanetDesktopSvg,
  saturnPlanetDesktop: SaturnPlanetDesktopSvg,
  uranusPlanetDesktop: UranusPlanetDesktopSvg,
  neptunePlanetDesktop: NeptunePlanetDesktopSvg,
};

export const internalSvgDesktop: Record<string, React.FC> = {
  mercuryInternalDesktop: MercuryInternalDesktopSvg,
  venusInternalDesktop: VenusInternalDesktopSvg,
  earthInternalDesktop: EarthInternalDesktopSvg,
  marsInternalDesktop: MarsInternalDesktopSvg,
  jupiterInternalDesktop: JupiterInternalDesktopSvg,
  saturnInternalDesktop: SaturnInternalDesktopSvg,
  uranusInternalDesktop: UranusInternalDesktopSvg,
  neptuneInternalDesktop: NeptuneInternalDesktopSvg,
};
//Common

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
