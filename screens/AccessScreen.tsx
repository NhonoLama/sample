import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';

const AccessScreen = () => {
  const [camera, setCamera] = useState<RNCamera | null>(null);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      console.log(data.uri);
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        ref={ref => setCamera(ref)}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onCameraReady={() => console.log('Camera is ready')}>
        <Button title="Take Picture" onPress={takePicture} />
      </RNCamera>
    </View>
  );
};

export default AccessScreen;
