// const {MerkleTree} = require('bcrypto');

// class BlockTemplate {
//   constructor() {
//     this.txs = [];
//     this.version = 0;
//     this.prevBlock = null;
//     this.merkleRoot = null;
//     this.ts = 0;
//     this.bits = 0;
//     this.nonce = 0;
//     this.height = 0;
//     this.weight = 0;
//   }

//   addTX(tx) {
//     this.txs.push(tx);
//     this.weight += tx.weight;
//   }

//   createCoinbase() {
//     const coinbase = {
//       version: 1,
//       inputs: [{prevout: {hash: Buffer.alloc(32), index: 0xFFFFFFFF}}],
//       outputs: [{value: 0, address: Buffer.alloc(20)}],
//       locktime: 0
//     };

//     const tx = {
//       hash: Buffer.alloc(32),
//       weight: 1
//     };

//     this.txs.unshift(coinbase);
//     this.weight += tx.weight;

//     return [coinbase];
//   }

//   calculateMerkleRoot() {
//     const leaves = this.txs.map(tx => tx.hash);
//     const tree = new MerkleTree(leaves);
//     this.merkleRoot = tree.root;
//   }
// }

// module.exports = {BlockTemplate};
