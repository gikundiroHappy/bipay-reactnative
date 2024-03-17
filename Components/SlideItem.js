import { View, Text, Dimensions, Image } from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-swiper";
import Pagination2 from "../Screens/Pagination2";
import Pagination3 from "../Screens/Pagination3";
import Pagination1 from "../Screens/Pagination1";
import { slides } from "../data/slides";
import Carousel, { Pagination } from "react-native-snap-carousel";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const SlideItem = ({ item }) => {
  const carouselRef = useRef(null);
  const data = [
    { id: 1, component: <Pagination1 /> },
    { id: 2, component: <Pagination2 /> },
    { id: 3, component: <Pagination3 /> },
  ];

  const handleIndexChanged = (index) => {
    console.log("Current slide index:", index);
    // You can perform any additional actions based on the index here
  };
  return (
    //   <Swiper
    //   showsButtons={false}
    //   loop={false}
    //   dotStyle={{ marginBottom: 10 }}
    //   activeDotStyle={{ marginBottom: 10 }}
    //   onIndexChanged={handleIndexChanged}
    // >
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
    //     <Pagination1/>
    //   </View>
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
    //     <Pagination2/>
    //   </View>
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
    //     <Pagination3/>
    //   </View>
    // </Swiper>
    <>
      <Carousel
        ref={carouselRef}
        layout={"default"}
        renderItem={({ item }) => item.component}
        sliderWidth={width}
        itemWidth={width}
        data={data}
      />

     <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: 'black' }}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'black',
        }}
        inactiveDotStyle={{
        backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

export default SlideItem;
