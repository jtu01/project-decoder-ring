const polybius = require("../src/polybius")
const expect = require("chai").expect

describe("polybius", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter to number pairs", () => {
            expect(polybius("a")).to.eql("11")
        });
        it("should translate both 'i' and 'j' to 42", () => {
            expect(polybius("ij")).to.eql("4242")
        });
        it("should leave spaces as is", () => {
            expect(polybius("a message")).to.eql("11 23513434112251")
        })
        it("should treat uppercase and lowercase letters the same", () => {
            expect(polybius("a message")).to.eql(polybius("A message"))
        })
    })

    describe("decoding a message", () => {
        it("should decode a message by translating each number pair into a letter ", () => {
            expect(polybius("23513434112251", false)).to.eql("message")
        });
        it("should translate 42 to (i/j)", () => {
            expect(polybius("42", false)).to.eql("(i/j)")
        })
        it("should leave spaces as is", () => {
            expect(polybius("11 23513434112251", false)).to.eql("a message")
        })
        it("should return false if the length of all numbers is odd", () => {
            expect(polybius("113", false)).to.be.false
        })
    })
})