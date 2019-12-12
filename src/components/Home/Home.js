import React from "react";
import { HomeHeader } from "./HomeHeader";
import { HomeThreeColumns } from "./HomeThreeColumns";
import { HomeFourSteps } from "./HomeFourSteps";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeOrganisations } from "./HomeOrganisations";
import { HomeContactUs } from "./HomeContactUs";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeFourSteps />
      <HomeAboutUs />
      <HomeOrganisations />
      <HomeContactUs />
    </>
  );
};
