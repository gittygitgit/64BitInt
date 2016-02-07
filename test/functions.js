var expect    = require("chai").expect;
var f         = require("../app/functions.js")
var util      = require("util");

describe("Binary functions", function() {
  describe("64bit unsigned longs", function() {
    it("Just larger than biggest int", function() {
      var buf = new Buffer(100);
      buf.writeUInt32BE(1, 0);
      buf.writeUInt32BE(0, 4);
      var long = f.readUInt64BE(buf, 0);
      expect(long.toString()).to.equal("4294967296");
    });
  });
 describe("64bit signed longs", function() {
    it("Just larger than biggest int", function() {
      var buf = new Buffer(100);
      buf.writeInt32BE(1, 0);
      buf.writeUInt32BE(0, 4);

      var long = f.readInt64BE(buf, 0);
      expect(long.toString()).to.equal("4294967296");
    });
  });
});

describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {

    });
  });
});
