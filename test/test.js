var expect = require('expect.js');

describe('Should BIP32 derive a few keys and get their public address', function () {
    var getAddress = require('./../get_address.js'),
        seed = 'xprv9s21ZrQH143K2JF8RafpqtKiTbsbaxEeUaMnNHsm5o6wCW3z8ySyH4UxFVSfZ8n7ESu7fgir8imbZKLYVBxFPND1pniTZ81vKfd45EHKX73';

    it('should derive m/0 get the address', function () {
        expect(getAddress(seed, 'm/0')).to.be('1JqJ4WFvE3ZwaTfC2NHpKXRSHjLxJSfoML');
    });

    it('should derive m/1 get the address', function () {
        expect(getAddress(seed, 'm/1')).to.be('1JMXzbBRnL1G95nCEDLAMDdkWYiuJGBtxH');
    });

    it('should derive m/0/0 get the address', function () {
        expect(getAddress(seed, 'm/0/0')).to.be('1LpNMg5bpLfStunETxq6BQecf5Jc5kUvf1');
    });

    it('should derive m/1/0 get the address', function () {
        expect(getAddress(seed, 'm/1/0')).to.be('1HhUDTPgzF3McTu46gSqNKaVtkgvfkEp6n');
    });

    it('should derive m/1/1 get the address', function () {
        expect(getAddress(seed, 'm/1/1')).to.be('15Atr5XXgTxsEo2Q5YnhGoobjJ6faoRr1K');
    });
});
