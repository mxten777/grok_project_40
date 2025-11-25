declare module 'react-kakao-maps' {
  export interface MapProps {
    center: { lat: number; lng: number };
    style?: React.CSSProperties;
    level?: number;
    children?: React.ReactNode;
  }

  export interface MapMarkerProps {
    position: { lat: number; lng: number };
    children?: React.ReactNode;
  }

  export const Map: React.ComponentType<MapProps>;
  export const MapMarker: React.ComponentType<MapMarkerProps>;
}