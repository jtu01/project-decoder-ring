const substitution = require("../src/substitution")
const expect = require("chai").expect

describe("substitution", () => {
    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.eql("jrufscpw")
        });
        it("should work with any kind of key with unique characters", () => {
            expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.eql("y&ii$r&")
        });
        it("should preserve spaces", () => {
            expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.eql("elp xhm xf mbymwwmfj dne")

        })
    })

    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.eql("thinkful")
        });
        it("should work with any kind of key with unique characters", () => {
            expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.eql("message")
        })
        it("should preserve spaces", () => {
            expect(substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false)).to.eql("you are an excellent spy")
        })
    })

    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            expect(substitution()).to.be.false
        });
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            expect(substitution("a message", "short")).to.be.false;
        });
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            expect(substitution("a message", "abcabcabcabcabcabcabcabcyz")).to.be.false
        });
    })
})