import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';

type Movies = {
  id: string;
  title: string;
  releaseYear: string;
};

const ApiScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Movies[]>([]);

  const {height} = Dimensions.get('window');

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');

      const result = await response.json();
      setData(result.movies);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 5,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ffff" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Text>
              {item.title}-{item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default ApiScreen;
