let assert = require('chai').assert;
let stringBuilder = require('./StringBuilder');
let stBuilder = require('./StringBuilder');
describe('String Builder test', function () {
    it('initialize StringBuilder with empty constructor', function () {
        stringBuilder=new stBuilder();
        assert.exists(stringBuilder);
    });
    it('initialize StringBuilder with string in constuctor ', function () {
        stringBuilder=new stBuilder('Test');
        assert.equal(stringBuilder.toString(),'Test');
    })
    
})