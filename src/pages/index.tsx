import React from "react";
import OpenCamera from "@/components/OpenCamera";
import OpenCameraIOS from "@/components/OpenCamiOS";

export default function Home() {
  return (
    <>
      <title>AR Card</title>
      {/* <OpenCameraIOS /> */}
      <OpenCamera />
    </>
  );
}
