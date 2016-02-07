var BigNumber = require('bignumber.js')

function readUInt64(buf, offset) {
   var word0 = buf.readUInt32LE(offset);
   var word1 = buf.readUInt32LE(offset+4);
   return new BigNumber(word0).plus(new BigNumber(word1).times(0x100000000));
}

function readUInt64BE(buf, offset) {
   console.log("hello");
   var word0 = buf.readUInt32BE(offset);
   var word1 = buf.readUInt32BE(offset+4);
   var n=new BigNumber(word1);
   var o=new BigNumber(word0);
   return new BigNumber(word1).plus(new BigNumber(word0).times(0x100000000));
}

function readInt64BE(buf, offset) {
   var word0 = buf.readInt32BE(offset);
   var word1 = buf.readUInt32BE(offset+4);
   return new BigNumber(word1).plus(new BigNumber(word0).times(0x100000000));
}

function readString(buf, offset) {
    var length = buf.readInt16LE(offset);
    return buf.toString('ascii', offset + 2, offset + 2 + length);
}

function readStringOfLength(buf, offset, length) {
    return buf.toString('ascii', offset, offset + length);
}

module.exports= {
  readUInt64:readUInt64,
  readUInt64BE:readUInt64BE,
  readInt64BE:readInt64BE,
  readString:readString,
  readStringOfLength:readStringOfLength
}
