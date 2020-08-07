import React from "react";
import { shallow, mount, render } from "../../enzyme";

import CountyList from "../countyList";

describe("testing CountyList component", () => {
    it("renders without crashing", () => {
        shallow(<CountyList />);
    });

    it("list has all counties", () => {
        const counties = ["one", "two", "three"];
        const wrapper = mount(
            <CountyList
                onClick={(x, y) => {
                    return 0;
                }}
                onHover={(x, y) => {
                    return 0;
                }}
                onLeave={(x, y) => {
                    return 0;
                }}
                data={counties}
            />
        );

        expect(wrapper.props().data.length).toBe(3);
        expect(wrapper.find(".county-list-item")).toHaveLength(3);
    });

    it("renders correct order on default", () => {
        const counties = [
            {
                county_name: "Los Angeles",
                state_name: "California",
            },
            {
                county_name: "Riverside",
                state_name: "California",
            },
            {
                county_name: "Orange",
                state_name: "California",
            },
        ];
        const wrapper = mount(
            <CountyList
                onClick={(x, y) => {
                    return 0;
                }}
                onHover={(x, y) => {
                    return 0;
                }}
                onLeave={(x, y) => {
                    return 0;
                }}
                data={counties}
            />
        );

        expect(
            wrapper.find(".county-list-item").get(0).props.children
        ).toEqual(["California", " - ", "Los Angeles"]);
    });

    it("renders correct order after sort by cases",  () => {
        const counties = [
            {
                county_name: "Los Angeles",
                state_name: "California",
                confirmed: 10
            },
            {
                county_name: "Riverside",
                state_name: "California",
                confirmed: 200
            },
            {
                county_name: "Orange",
                state_name: "California",
                confirmed: 1000
            },
        ];
        const wrapper = mount(
            <CountyList
                onClick={(x, y) => {
                    return 0;
                }}
                onHover={(x, y) => {
                    return 0;
                }}
                onLeave={(x, y) => {
                    return 0;
                }}
                data={counties}
            />
        );

        wrapper.find('.sort-by-cases').invoke('onClick')()

        expect(
            wrapper.find(".county-list-item").get(0).props.children
        ).toEqual(["California", " - ", "Orange"]);
    })

    it("renders correct order after sort by deaths",  () => {
        const counties = [
            {
                county_name: "Los Angeles",
                state_name: "California",
                death: 10
            },
            {
                county_name: "Riverside",
                state_name: "California",
                death: 200
            },
            {
                county_name: "Orange",
                state_name: "California",
                death: 1000
            },
        ];
        const wrapper = mount(
            <CountyList
                onClick={(x, y) => {
                    return 0;
                }}
                onHover={(x, y) => {
                    return 0;
                }}
                onLeave={(x, y) => {
                    return 0;
                }}
                data={counties}
            />
        );

        wrapper.find('.sort-by-death').invoke('onClick')()

        expect(
            wrapper.find(".county-list-item").get(0).props.children
        ).toEqual(["California", " - ", "Orange"]);
    })

    it("renders correct order after sort by fatality",  () => {
        const counties = [
            {
                county_name: "Los Angeles",
                state_name: "California",
                fatality_rate: "1%"
            },
            {
                county_name: "Riverside",
                state_name: "California",
                fatality_rate: "2%"
            },
            {
                county_name: "Orange",
                state_name: "California",
                fatality_rate: "20%"
            },
        ];
        const wrapper = mount(
            <CountyList
                onClick={(x, y) => {
                    return 0;
                }}
                onHover={(x, y) => {
                    return 0;
                }}
                onLeave={(x, y) => {
                    return 0;
                }}
                data={counties}
            />
        );

        wrapper.find('.sort-by-fatality').invoke('onClick')()

        expect(
            wrapper.find(".county-list-item").get(0).props.children
        ).toEqual(["California", " - ", "Orange"]);
    })
});
