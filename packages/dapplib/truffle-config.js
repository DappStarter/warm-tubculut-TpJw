require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot elder raise miss pulse install pave army gather'; 
let testAccounts = [
"0x94cade9f9aef3eedd4dfcccf87cc2aa311377737dbe22f0084391d09bc91cb12",
"0xf737d8b5cf6da21acb7708155cd6c5575373570dd6c29eb2746ccf52076c9afe",
"0x93eb25ce435a53a5913cc596f7342fba161f2b7373ab59c4a07833637fcf4e48",
"0xfdefd4b2a8d29425ab1e309ecde99e3d485ca7d4777011ff4f126c12454be32d",
"0x84a0aafe0d4c197b5ed0a65b2f42b8b2c9ec53b5c7903502d47016071e640b16",
"0x76e8b775b8f9574541cbe5b387a13a3eebd8a1a459929e326fa6c8b551a9b335",
"0x2bd0a7f1b31abc89cae40dbbb93b1accc22ab081a75478872bb6866ad24c8cb1",
"0x3e4a31ba3daa09d00b47784b8d2a7879b83e9523700513de6ba01bdd229ccaae",
"0x8aa25dac4308788bc301bdf362db64884cde7047393d7a33178296bff62e2a35",
"0x76bbb2e0e2d98295cf9499663963c88b08c25a69c4a9c3e52e3d04e88437b342"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

