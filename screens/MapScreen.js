import React from 'react';
import { MapView } from 'expo';
import { Alert } from 'react-native';

export default class Map extends React.Component {
  static navigationOptions = {
    title: 'Map',
    markerPolygon: [],
  };

  componentWillMount() {
    const marker = [
      [
        121.53036475181578,
        25.07432684046216
      ],
      [
        121.5305310487747,
        25.074453170984526
      ],
      [
        121.53075635433197,
        25.074365711406013
      ],
      [
        121.53138399124147,
        25.074744702461782
      ],
      [
        121.53100848197936,
        25.075206292547996
      ],
      [
        121.52999997138976,
        25.07560957509386
      ],
      [
        121.52924358844756,
        25.075415222225512
      ],
      [
        121.52921676635742,
        25.07507510396364
      ],
      [
        121.5295332670212,
        25.07490990332416
      ],
      [
        121.52994096279144,
        25.07507510396364
      ],
      [
        121.53040766716002,
        25.074734984757065
      ],
      [
        121.53016626834868,
        25.07451633619683
      ],
      [
        121.53036475181578,
        25.07432684046216
      ]
    ];
    const polygon = marker.map(coordsArr => { 
      let coords = {
          latitude: coordsArr[1],
          longitude: coordsArr[0],
        }
        return coords;
    });
    this.setState({
      markerPolygon: polygon
    });
  }

  render() {
    return (
      <MapView
        showsUserLocation={true}
        style={{ flex: 1 }}
        initialRegion={{
          latitude:  25.07507510396364,
          longitude: 121.53036475181578,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <MapView.Polygon
          // onPress={() => {
          //   Alert.alert(
          //     '大會',
          //     '你在大聲什麼拉',
          //     { cancelable: false }
          //   );
          //  }}
          coordinates={this.state.markerPolygon}
          fillColor="rgba(0, 200, 0, 0.5)"
          strokeColor="rgba(0,0,0,0.5)"
          strokeWidth={2}
        />
        <MapView.Marker
          coordinate={{ latitude: 25.07501193903957,longitude: 121.52950644493103 }}
          title={'入口'}
          description={'入口'}
        />
        <MapView.Marker
          coordinate={{ latitude: 25.075429798701332,longitude: 121.53032720088957 }}
          title={'醫護處'}
          description={'醫護處'}
        />
        <MapView.Marker
          coordinate={{ latitude: 25.074812726373285,longitude: 121.53047740459442 }}
          title={'廁所'}
          description={'廁所'}
        />
      </MapView>
    );
  }
}
