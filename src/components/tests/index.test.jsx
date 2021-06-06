import React from "react";
import { shallow } from "enzyme";
import LoadingScreen from "../LoadingScreen";
import { RightArrow, LeftArrow } from "../Arrows";
import WearherCard from "../WeatherCard";

describe("Loading screen", () => {
  let LoadingScreenWrapper;
  let RightArrowScreenWrapper;
  let LeftArrowWrapper;
  let WearherCardWrapper;
  beforeEach(() => {
    LoadingScreenWrapper = shallow(<LoadingScreen />);
    RightArrowScreenWrapper = shallow(<RightArrow end={1} data={[{id: 1}]} />);
    LeftArrowWrapper = shallow(<LeftArrow start={0} />);
    WearherCardWrapper = shallow(<WearherCard weather={{rawDate: new Date(), date: new Date(), weatherSegments: [{dt: new Date(), main: {temp: 278}}]}} currentWeather={{date: new Date()}} />);
  });

  it("Loading screen has one div", () => {
    expect(LoadingScreenWrapper.find("div").length).toEqual(1);
  });
  it("Right arrow has one div", () => {
    expect(RightArrowScreenWrapper.find("div").length).toEqual(1);
  });
  it("Left arrow has one div", () => {
    expect(LeftArrowWrapper.find("div").length).toEqual(1);
  });
  it("Render WearherCardWrapper", () => {
    expect(WearherCardWrapper.find("h2")).toEqual({});
  });
});
