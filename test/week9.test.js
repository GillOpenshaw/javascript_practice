const { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } = require("../challenges/week9");

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

// Test for negative numbers

xdescribe("isValidDNA", () => {

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

    test("it returns true if the string includes a mixture of uppercase and lowercase C, G, T or A", () => {
        expect(isValidDNA("C, g, T, a")).toBe(true);
    });

    test("it returns true if the string includes C, G, T or A plus other letters", () => {
        expect(isValidDNA("C, D, G, H, T, U, A, B")).toBe(true);
    });

    test("it returns false if the string does not include any of C, G, T or A", () => {
        expect(isValidDNA("D, H, U, B")).toBe(false);
    });

    // Test for an empty string
    // Test for only 1 letter
    // Test ignores punctuation

    //test("it returns false if the string is a random group of letters"), () => {
    //  expect(isValidDNA( Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))).toBe(false);
    //};

});

// In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".

xdescribe("getComplementaryDNA", () => {

    test("it throws an error if not passed a string", () => {
        expect(() => {
            getComplementaryDNA(false);
        }).toThrow("str is required");
    });

    test("returns the corresponding letter pair", () => {
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("G")).toBe("C");
    });

    test("returns the corresponding letter pair", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
});

xdescribe("isItPrime", () => {

    test("it throws an error if not passed a number", () => {
        expect(() => {
            isItPrime(false);
        }).toThrow("n is required");

        expect(() => {
            isItPrime("A");
        }).toThrow("a number is required");
    });

    test("returns true if receives a prime number", () => {
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(2, 3, 5, 11, 13, 19)).toBe(true);
    });

    test("returns false if does not receive a prime number", () => {
        expect(isItPrime(10)).toBe(false);
    });

    test("returns false if receives a negative number", () => {
        expect(isItPrime(-3)).toBe(false);
    });
});

// Test for decimal number

xdescribe("createMatrix", () => {

    // first test returns 0 if passed an empty array

    it("returns a matrix of 1 + 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [["foo"]];
        expect(result).toEqual(expected);
    });

    it("returns a matrix of 3 + 3 when passed 3", () => {
        const result = createMatrix(3, "Hello");
        const expected = [
            ["Hello", "Hello", "Hello"],
            ["Hello", "Hello", "Hello"],
            ["Hello", "Hello", "Hello"]
        ];
        expect(result).toEqual(expected);
    });

    it("throws an error when passed 0", () => {
        expect(() => {
            createMatrix(0, "foo");
        }).toThrow("n is required");
    });

    it("throws an error when passed 0", () => {
        expect(() => {
            createMatrix(3);
        }).toThrow("fill is required");
    });
});


xdescribe("areWeCovered", () => {
    test("returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("returns false if <3 staff are scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });

    test("returns true if >=3 staff are scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Monday")).toBe(true);
    });

    test("returns true if =3 staff are scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Sunday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Monday")).toBe(true);
    });



    // if checking an array against another array, or an object against another object need to use toEqual not toBe
    // toEqual will check the values inside an array, or the key value pairs inside an object
});