let assert = require('chai').assert
let myLib = require('./isOddOrEven');
describe('isOddOrEven', function () {
    it('should return undefined with passed number ', function () {
        assert.equal(myLib.isOddOrEven(3), undefined,);
    })
    it('should return undefined with object argument', function () {
        assert.equal(myLib.isOddOrEven({ test: 3 }), undefined);

    })
    it('should return odd with odd length',function(){
        assert.equal(myLib.isOddOrEven('test2'),'odd')
    })
    it('should return even with even length',function(){
        assert.equal(myLib.isOddOrEven('test'),'even')
    })
});
