import React from "react";
import { View, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import PaginationOne from "../Screens/PaginationOne";
import PaginationTwo from "../Screens/PaginationTwo.js";
import PaginationThree from "../Screens/PaginationThree";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

const data = [
  { id: 1, component: <PaginationOne /> },
  { id: 2, component: <PaginationTwo /> },
  { id: 3, component: <PaginationThree /> },
];

export default function SlideItem (){
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef(null);

  const handleIndexChanged = (index) => {
    console.log("Current slide index:", index);
    setActiveIndex(index);
  };

  return (
    <>
      <Carousel
        ref={carouselRef}
        layout={"default"}
        renderItem={({ item }) => item.component}
        sliderWidth={width}
        itemWidth={width}
        data={data}
        onSnapToItem={handleIndexChanged}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: "#3D3DA8" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 50,
          marginHorizontal: 2,
          backgroundColor: "white",
        }}
        inactiveDotStyle={{
          backgroundColor: "#F7F7F7",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

