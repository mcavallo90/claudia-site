import BasicCard from "../../components/BasicCard/BasicCard";

import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CV = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <BasicCard>
      <div className="w-full flex flex-col">
        <h1 className="text-3xl sm:text-5xl text-secondary font-semibold text-center sm:text-left">
          Curriculum Vitae
        </h1>
        <div className="mt-6 sm:mt-10 w-full h-[70vh] sm:h-[80vh] border border-neutral-300 overflow-hidden">
          <Viewer
            fileUrl="/assets/pdf/claudia_ranocchia_cv_2024.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </div>
    </BasicCard>
  );
};

export default CV;
