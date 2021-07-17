import React from "react";
import OpenCamera from "@/components/OpenCamera";
import OpenCameraIOS from "@/components/OpenCamiOS";
import ThreeDimisionImage from "@/components/3DImage";
import ARFrame from "@/components/ARFrame";

export default function Home() {
  return (
    <>
      <title>AR Card</title>

      <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
      <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>

      <div className="m-0 overflow-hidden">
        <a-scene embedded arjs="sourceType: webcam;">
          <a-marker preset="hiro">
            {/* <a-box position="0 0.5 0" material="color: red;">
              <a-animation
                attribute="ratation"
                dur="3000"
                to="360 360 0"
                repeat="indefinite"
                easing="linear"
              ></a-animation>
            </a-box> */}
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </div>

      {/* <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
      <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
      <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script> */}
      {/* <OpenCameraIOS /> */}
      {/* <OpenCamera /> */}
      {/* <ThreeDimisionImage /> */}
      {/* <ARFrame /> */}
      {/* <div className="m-0 overflow-hidden">
        <a-scene embedded arjs="sourceType: webcam;">
          <a-marker preset="hiro"></a-marker>
          <a-entity camera></a-entity>
        </a-scene> */}
      {/* <a-scene
          vr-mode-ui="enabled: false"
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
        >
          <a-marker preset="hiro">
            <a-box position="0 0.5 0" material="color: red;">
              <a-animation
                attribute="ratation"
                dur="3000"
                to="360 360 0"
                repeat="indefinite"
                easing="linear"
              ></a-animation>
            </a-box>
          </a-marker> */}
      {/* <a-text
            value="This content will always face you."
            look-at="[gps-camera]"
            scale="120 120 120"
            gps-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>;"
          ></a-text> */}
      {/* <a-camera gps-camera rotation-reader></a-camera>
        </a-scene> */}
      {/* </div> */}

      {/* <div className="m-0 overflow-hidden">
        <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-box position="0 0.5 0" material="color: red;">
              <a-animation
                attribute="ratation"
                dur="3000"
                to="360 360 0"
                repeat="indefinite"
                easing="linear"
              ></a-animation>
            </a-box>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </div> */}
    </>
  );
}
