import React from "react";
import { shallow, mount, render } from "../../enzyme";

import formatWithCommas from "../usOverview";

describe("testing formatting output", () => {
    
    it("checks that 0 outputs 0", () => {
        expect(formatWithCommas(0)).toBe("0");
    });

    it("checks that decimal digits do not have commas", () => {
        expect(formatWithCommas(0.11111)).toBe("0.11111");
    });
    
    it("checks that int with < 4 digits does not have commas", () => {
        expect(formatWithCommas(100)).toBe("100");
    });
    
    it("checks that int with < 4 digits and decimal > 3 does not have commas", () => {
        expect(formatWithCommas(100.11111)).toBe("100.11111");
    });
    
    it("checks that int with > 4 digits has a comma", () => {
        expect(formatWithCommas(1000)).toBe("1,000");
    });

    it("checks that int with > 4 digits and decimal > 3 digits has proper commas", () => {
        expect(formatWithCommas(1000.11111)).toBe("1,000.11111");
    });

    it("checks that int with < 6 digits has one comma", () => {
        expect(formatWithCommas(10000)).toBe("10,000");
    });

    it("checks negation of previous test to confirm", () => {
        expect(formatWithCommas(10000)).not.toBe("10000");
    });

    it("checks that int with < 6 digits and decimal > 3 has proper commas", () => {
        expect(formatWithCommas(10000.11111)).toBe("10,000.11111");
    });

    it("checks that int with < 7 digits has one comma", () => {
        expect(formatWithCommas(100000)).toBe("100,000");
    });

    it("checks negation of previous test to confirm", () => {
        expect(formatWithCommas(100000)).not.toBe("100000");
    });

    it("checks that int with < 7 digits and decimal > 3 has proper commas", () => {
        expect(formatWithCommas(100000.11111)).toBe("100,000.11111");
    });

    it("checks that int with < 8 digits has two commas", () => {
        expect(formatWithCommas(1000000)).toBe("1,000,000");
    });

    it("checks negation of previous test to confirm", () => {
        expect(formatWithCommas(1000000)).not.toBe("1000000");
    });

    it("checks that int with < 8 digits and decimal > 3 has proper commas", () => {
        expect(formatWithCommas(1000000.11111)).toBe("1,000,000.11111");
    });

});
 