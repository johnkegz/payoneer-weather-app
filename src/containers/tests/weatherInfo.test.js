import React from "react";
import { mount } from "enzyme";
import WeatherInfo from "../weatherInfo";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Weather information", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
        <Provider store={store}>
            <WeatherInfo />
        </Provider>
        );
    });

    it("Weather information screen to match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Weather information screen has one div", () => {
        expect(wrapper.find("div").length).toEqual(1);
        });
});
