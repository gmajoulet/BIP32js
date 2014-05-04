(function () {
    var bitcoin    = {},
        bitcore    = require('bitcore'),
        seed, derivationPath, key;

    bitcoin.BIP32   = bitcore.BIP32;
    bitcoin.Address = bitcore.Address;

    module.exports = function getAddress (seed, derivationPath) {
        key = (new bitcoin.BIP32(seed)).derive(derivationPath);

        return bitcoin.Address.fromPubKey(key.eckey.public).toString();
    };
}());
