import React from "react";
import CommonMenu from "./CommonMenu";

import automation from "../assets/images/automation.svg";
import pipeline from "../assets/images/pipeline.svg";
import doppler from "../assets/images/doppler.svg";
import dashboard from "../assets/images/dashboard.svg";
import investigation from "../assets/images/investigation.svg";
import analysis from "../assets/images/analysis.svg";
import home from "../assets/images/home.svg";
import organization from "../assets/images/organization.svg";

const IngestionMenu = () => {
  return (
    <div className=" bg-bgblue1 w-full grid grid-cols-4  px-[76px] pb-[100px] pt-12 gap-10 absolute z-10 left-0 top-[67px] transition-all delay-75">
      <CommonMenu
        icon={automation}
        heading={"Ingestion & Automation"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />

      <CommonMenu
        icon={pipeline}
        heading={"Pipeline"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />

      <CommonMenu
        icon={investigation}
        heading={"Investigation"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />
      <CommonMenu
        icon={analysis}
        heading={"Run a Query and Analyse"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />
      <CommonMenu
        icon={doppler}
        heading={"Doppler"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />
      <CommonMenu
        icon={dashboard}
        heading={"Dashboard"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />
      <CommonMenu
        icon={home}
        heading={"Home"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />
      <CommonMenu
        icon={organization}
        heading={"Organization"}
        introduction={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
        }
      />
    </div>
  );
};

export default IngestionMenu;
