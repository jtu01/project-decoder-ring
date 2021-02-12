/*
It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
*/

const caesar = require("../src/caesar")
const expect = require("chai").expect

describe("caesar", () => {
    describe("encoding a message", () => {
        it("should handle a positive shift", () => {
            expect(caesar("a message", 1, true)).to.eql("b nfttbhf")
        });
        it("should handle a negative shift", () => {
            expect(caesar("a message", -1, true)).to.eql("z ldrrzfd")
        });
    })

    describe("decoding a message", () => {
        it("should handle a positive shift", () => {
            expect(caesar("b nfttbhf", 1, false)).to.eql("a message")
        });
        it("should handle a negative shift", () => {
            expect(caesar("z ldrrzfd", -1, false)).to.eql("a message")
        })
    })

    describe("error handling", () => {
        it("should return false if shift is equal to 0", () => {
            expect(caesar("a message", 0)).to.be.false
        });
        it("should return false if shift is outside the range of -25 to 25", () => {
            expect(caesar("a message", -26)).to.be.false;
            expect(caesar("a message", 50)).to.be.false;
        });
        it("should return false if shift does not exist", () => {
            expect(caesar("a message")).to.be.false
        });
        it("should ignore capital letters in input", () => {
            expect(caesar("A message", 3)).to.eql(caesar("a message", 3))
        });
        it("should handle shifts that run past the end of the alphabet", () => {
            expect(caesar("zzz", 3)).to.eql("ccc")
        })
        it("should maintain spaces and other non-alphabetic symbols", () => {
            expect(caesar("2 messages!", 3)).to.eql("2 phvvdjhv!")
        })
    })
})