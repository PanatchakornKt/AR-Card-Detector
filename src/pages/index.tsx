import React from "react";
import OpenCamera from "@/components/OpenCamera";
import OpenCameraIOS from "@/components/OpenCamiOS";
import ThreeDimisionImage from "@/components/3DImage";

export default function Home() {
  return (
    <>
      <title>AR Card</title>
      {/* <OpenCameraIOS /> */}
      {/* <OpenCamera /> */}
      <ThreeDimisionImage />
    </>
  );
}
