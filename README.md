# react-leaflet-nauticsale [![npm version](https://img.shields.io/npm/v/react-leaflet-nauticsale.svg)](https://www.npmjs.com/package/react-leaflet-nauticsale)

-   React-leaflet v4 support
-   Typescript support

React-leaflet-nauticsale is a plugin for react-leaflet. A wrapper component of leaflet.nauticscale.

## Installation

-   Install [NodeJS](https://nodejs.org)
-   Run `react-leaflet-nauticsale`

## Prerequisites

Make sure that you haveve installed `react`, `react-leaflet` and `leaflet`.

## Example usage

```tsx
import { MapContainer } from "react-leaflet";
import ScaleNautic from "react-leaflet-nauticsale";
import "leaflet/dist/leaflet.css";

const Demo = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13}>
            <ScaleNautic nautic={true} />
        </MapContainer>
    );
};
```

## Reference

See: https://github.com/wattnpapa/leaflet.nauticscale

## Copyright

See the [license](/LICENSE)
