(function () {
    var getAddress = require('./get_address.js'),
        args = process.argv.slice(2);

    if (args.length < 2) {
        throw new Error('Not enough arguments. Usage: node bip32.js <seed> <derivation path>');
    }

    process.stdout.write('Address: ' + getAddress.apply(this, args) + "\n");
}());
