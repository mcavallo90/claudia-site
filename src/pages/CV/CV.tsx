import BasicCard from "../../components/BasicCard/BasicCard";

import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CV = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <BasicCard>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-6xl text-secondary font-semibold">
          Curriculum Vitae
        </p>
        <div className="my-10 w-full h-[90vh] shadow-lg border rounded-lg overflow-hidden">
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
