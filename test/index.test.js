const assert = require('assert');
const numerals = require('../index');

describe('Roman', function () {

    describe('Function defined', function () {
        it('numerals should be a function', function () {
            assert.equal(typeof numerals, 'function');
        });

    });

    describe('Base values', function () {
        it('should return I for 1', function () {
            assert.equal(numerals(1), 'I');
        });
        it('should return V for 5', function () {
            assert.equal(numerals(5), 'V');
        });
        it('should return X for 10', function () {
            assert.equal(numerals(10), 'X');
        });
        it('should return L for 50', function () {
            assert.equal(numerals(50), 'L');
        });
        it('should return C for 100', function () {
            assert.equal(numerals(100), 'C');
        });
        it('should return D for 500', function () {
            assert.equal(numerals(500), 'D');
        });
        it('should return M for 1000', function () {
            assert.equal(numerals(1000), 'M');
        });
    });

    describe('Repeated base values', function () {
        it('should return II for 2', function () {
            assert.equal(numerals(2), 'II');
        });
        it('should return III for 3', function () {
            assert.equal(numerals(3), 'III');
        });
        it('should return XX for 20', function () {
            assert.equal(numerals(20), 'XX');
        });
        it('should return XXX for 30', function () {
            assert.equal(numerals(30), 'XXX');
        });
        it('should return CC for 200', function () {
            assert.equal(numerals(200), 'CC');
        });
        it('should return CCC for 300', function () {
            assert.equal(numerals(300), 'CCC');
        });
        it('should return MM for 2000', function () {
            assert.equal(numerals(2000), 'MM');
        });
        it('should return MMM for 3000', function () {
            assert.equal(numerals(3000), 'MMM');
        });
    });
    
    describe('Combine base values', function () {
        it('should return VI for 6', function () {
            assert.equal(numerals(6), 'VI');
        });
        it('should return VII for 7', function () {
            assert.equal(numerals(7), 'VII');
        });
        it('should return LX for 60', function () {
            assert.equal(numerals(60), 'LX');
        });
        it('should return CLX for 160', function () {
            assert.equal(numerals(160), 'CLX');
        });
    });

    describe('Subtractive notation', function () {
        it('should return IV for 4', function () {
            assert.equal(numerals(4), 'IV');
        });
        it('should return IX for 9', function () {
            assert.equal(numerals(9), 'IX');
        });
        it('should return XL for 40', function () {
            assert.equal(numerals(40), 'XL');
        });
        it('should return XC for 90', function () {
            assert.equal(numerals(90), 'XC');
        });
        it('should return CD for 400', function () {
            assert.equal(numerals(400), 'CD');
        });
        it('should return CM for 900', function () {
            assert.equal(numerals(900), 'CM');
        });
    });

    describe('Value tests', function () {
        it('should return XXXIX for 39', function () {
            assert.equal(numerals(39), 'XXXIX');
        });
        it('should return CCXLVI for 246', function () {
            assert.equal(numerals(246), 'CCXLVI');
        });
        it('should return CDXXI for 421', function () {
            assert.equal(numerals(421), 'CDXXI');
        });
        it('should return CLX for 160', function () {
            assert.equal(numerals(160), 'CLX');
        });
        it('should return CCVII for 207', function () {
            assert.equal(numerals(207), 'CCVII');
        });
        it('should return MLXVI for 1066', function () {
            assert.equal(numerals(1066), 'MLXVI');
        });
        it('should return MDCCLXXVI  for 1776', function () {
            assert.equal(numerals(1776), 'MDCCLXXVI');
        });
        it('should return MMXIX for 2019', function () {
            assert.equal(numerals(2019), 'MMXIX');
        });
    });
});
