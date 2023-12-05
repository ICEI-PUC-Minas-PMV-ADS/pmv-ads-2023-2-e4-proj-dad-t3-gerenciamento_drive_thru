import React, { useRef } from "react";
import {SafeAreaView, ScrollView, StyleSheet, View, Image, Animated, useWindowDimensions } from "react-native";

const images = [
  "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e3718a99b259a7b64aff53f08d58c8ab",
  "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/549ce3e5bad6d6bfc51f95f989778b26",
  "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a9e62c8cab58abd7f572758900edb767",
  
];

const Carousels = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <View style={styles.container}>
      
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}
          >
            {images.map((image, imageIndex) => {
              return (
                <View
                  style={{ width: windowWidth, height: 250 }}
                  key={imageIndex}
                >
                  <Image source={{ uri: image }} style={styles.card} />
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  normalDot: {
    height: 5,
    width: 5,
    borderRadius: 4,
    backgroundColor: "#387287",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    position: "absolute",
    top: 225,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Carousels;
