let assert = require('chai').assert;
let lib = require('./lib');
describe('Add five', function () {
    it('should return undefinede if parameter is string', function () {
        assert.equal(lib.mathEnforcer.addFive('dasd'), undefined)
    })
    it('should work properly with negative number', function () {
        assert.equal(lib.mathEnforcer.addFive(-3), 2)
    })
    it('should work properly with positive number', function () {
        assert.equal(lib.mathEnforcer.addFive(3), 8)
    })
})
describe('Subtract Ten', function () {
    it('should return undefined when it passed argument differnt from number',function(){
        assert.equal(lib.mathEnforcer.subtractTen('test'),undefined);
    })
    it('shoud work properly when pass number',function(){
        assert.equal(lib.mathEnforcer.subtractTen(10),0);
    })
    it('shoud work properly when pass  negative number',function(){
        assert.equal(lib.mathEnforcer.subtractTen(-3),-13);
    })
    
})
describe('Sum', function () {
    it('should return undefined when first argument is different from number',function(){
        assert.equal(lib.mathEnforcer.sum('test',5),undefined);
    })
    it('should return undefined when second argument is different from number',function(){
        assert.equal(lib.mathEnforcer.sum(3,'test'),undefined);
    })
    it('should work properly when pass numbers',function(){
        assert.equal(lib.mathEnforcer.sum(3,5),8);
    })
    it('should work properly when pass floating point number',function(){
        assert.closeTo(lib.mathEnforcer.sum(2.1,2.32),4.42,0);
    })
    it('should work properly with negative numbers',function(){
        assert.equal(lib.mathEnforcer.sum(-2,-3),-5)
    })
    
})