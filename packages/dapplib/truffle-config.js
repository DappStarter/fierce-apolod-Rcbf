require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan radar script unique hunt canoe army gesture'; 
let testAccounts = [
"0x4ae82ec4ea0abe2996cc21258f686d492df3b087a312ec9ee267a597120db35a",
"0x6982026545fccd251b389f44c9c59b88c3e5e5d3d72ea538e91603845a41332f",
"0x2569c5f965ae16857f44d2bc6b0ccf665a35c240af1a49e4cb1d32788d6b7cdf",
"0x442da4ede814cf759006eb9397678ee28cb0cd05bd1199864fd9b7aa9e517178",
"0x05b4138928e1b795339eb082d7dd1539339cad3f82de040d39d523323242b1a9",
"0x627635db9a097f12345ac17bae7c1bde93b587a8e3abed51cd2ee2e518d10857",
"0x5c341d418e3c570f38446616de18b2f5dc5bfc6b0114d3c2c8ad4544b7a891f8",
"0xb7d0fe3c98f0ee3d8b47d4eccd4e91cf37efcfc128c9aaf311dad59119d4c122",
"0x5c78841de1f1e166355ed83f093d26a063db4b37f0585b13887f25289b83c6a8",
"0x35ce316b3bff6035ca154acd13ef75f24c675ea2fe727acd2e5f258029332ddb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


