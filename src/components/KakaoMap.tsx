'use client';

import { Map, MapMarker } from 'react-kakao-maps';

interface KakaoMapProps {
  location: string;
}

export default function KakaoMap({ location }: KakaoMapProps) {
  // For demo purposes, use a fixed location. In real app, geocode the location string.
  const position = { lat: 37.5665, lng: 126.9780 }; // Seoul coordinates as example

  return (
    <Map
      center={position}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      <MapMarker position={position}>
        <div style={{ color: '#000' }}>{location}</div>
      </MapMarker>
    </Map>
  );
}