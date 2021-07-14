import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Camera from "react-native-camera";

const OpenCameraIOS = () => {
  return (
    <div className="text-center mt-4">
      <header className="App-header">
        <span className="text-2xl">Open Camera</span>
        {/* <Webcam
          ref={webcamRef}
          className="absolute ml-auto mr-auto right-0 left-0 z-10 w-full h-full"
        />
        <canvas className="absolute ml-auto mr-auto right-0 left-0 z-10 w-full h-full"></canvas> */}
      </header>
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]
          </Text>
        </Camera>
      </View>
    </div>
  );
};

export default OpenCameraIOS;
