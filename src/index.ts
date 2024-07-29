import { createControlComponent } from "@react-leaflet/core";
import L, { Control } from "leaflet";
import "leaflet.nauticscale";

interface ScaleNauticOptions extends Control.ScaleOptions {
    nautic?: boolean;
}

declare module "leaflet" {
    namespace Control {
        class ScaleNautic extends Control {
            constructor(options?: ScaleNauticOptions);
            options: ScaleNauticOptions;
        }
    }
}

const createScaleControl = (props: ScaleNauticOptions) => {
    return new L.Control.ScaleNautic(props);
};

export default createControlComponent<Control.Scale, ScaleNauticOptions>(
    createScaleControl
);
