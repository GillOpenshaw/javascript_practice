const { sumMultiples, isValidDNA, createMatrix, areWeCovered } = require("../challenges/week9");

xdescribe("sumMultiples", () => {

    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");
    })

    test("it returns the sum of any numbers that are a sum of multiples of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it returns the sum of numbers even if numbers are decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("it returns 0 if no numbers are multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe.only("isValidDNA", () => {

    test("it throws an error if not passed a string", () => {
        expect(() => {
            isValidDNA(false);
        }).toThrow("str is required");
    });

    test("it returns true if the string includes C, G, T or A", () => {
        expect(isValidDNA("C, G, T, A")).toBe(true);
    });

    test("it returns true if the string includes lowercase c, g, t or a", () => {
        expect(isValidDNA("C, G, T, A")).toBe(true);
    });

    test("it returns true if the string includes a mixture of uppercase and lowercase c, G, t or A", () => {
        expect(isValidDNA("C, G, T, A")).toBe(true);
    });

    test("it returns true if the string includes C, G, T or A plus other letters", () => {
        expect(isValidDNA("C, D, G, H, T, U, A, B")).toBe(true);
    }); 

    test("it returns false if the string does not include any of C, G, T or A", () => {
        expect(isValidDNA("D, H, U, B")).toBe(false);
    });

});

xdescribe("createMatrix", () => {

    // first test returns 0 if passed an empty array

    it("returns a matrix of 1 + 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [["foo"]];
        expect(result).toEqual(expected);
    });
});

xdescribe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("return false if there are staff but < 3 are not scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
        // Check for other days too to make sure still get false
    });

    // Check what happens if there are 3 staff working makes sure returns true

    // Check what happens if more than 3 staff working does it still return true?

    // if checking an array against another array, or an object against another object need to use toEqual not toBe
    // toEqual will check the values inside an array, or the key value pairs inside an object
});