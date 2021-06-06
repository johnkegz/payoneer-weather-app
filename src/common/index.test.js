import {toCelsius} from './index'

it("toCelsius to convert Fahrenheit to celsius", () => {
    expect(toCelsius(100)).toEqual(38);
});
