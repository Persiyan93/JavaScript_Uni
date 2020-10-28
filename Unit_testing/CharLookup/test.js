let assert = require('chai').assert;
let lib = require('./lib');
describe('Char lookup', function () {
    it('should return undefined when passed with wrong first argument', function () {
        assert.equal(lib.lookupChar({ test: 2 }, 3), undefined);
    });
    
    
    it('should return udefined with floating point number as second arg',function () {

        assert.equal(lib.lookupChar('Test',2.2),undefined)
    });
    it('should return udefined with string as second arg',function () {

        assert.equal(lib.lookupChar('Test','Test'),undefined)
    });
    it('should return Incorrect index with bigger arg',function(){
        assert.equal(lib.lookupChar('test',7),'Incorrect index')
    })
    it('should return Incorrect index with negative number',function(){
        assert.equal(lib.lookupChar('Test',-3),'Incorrect index');
    })
    it('should work properly and return char element',function(){
        assert.equal(lib.lookupChar('Test',0),'T');
    })
    
})