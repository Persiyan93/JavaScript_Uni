let assert = require('chai').assert;

let stBuilder = require('./StringBuilder');
before(() => stringBuilder = new stBuilder())
describe('String Builder test', function () {
    it('initialize StringBuilder with empty constructor', function () {

        assert.exists(stringBuilder);
    });
    it('initialize StringBuilder with string in constuctor ', function () {
        let string = new stBuilder('Test');
        assert.equal(string.toString(), 'Test');
    });
    it('initialize StringBuilder throw Error ', function () {

        assert.throw(() => { new stBuilder(2) }, Error)
    });

    it('append function should add string to inner array', function () {
        //Action
        stringBuilder.append('Test');
        //Assert
        assert.equal(stringBuilder._stringArray.length, 4);
    });
    it('append number throw Error', function () {
        assert.throw(() => { stringBuilder.append(23), Error });
    });
    it('prepend number throw Error', function () {
        assert.throw(() => { stringBuilder.prepend(23), Error });
    });
    it('prepend function should add string to inner array', function () {
        //Action
        stringBuilder.append('first');
        stringBuilder.prepend('Test');
        //Assert
        assert.equal(stringBuilder._stringArray.slice(0, 4).join(''), 'Test');
    });
    it('insertAt function should add string to inner array', function () {
        let string =new stBuilder();
        //Action
        string.append('first');
        string.insertAt('InsertAt',3);
        console.log
        
        
        //Assert
        assert.equal(string._stringArray.slice(3, 11).join(''), 'InsertAt');
    });
    it('insertAt number throw Error', function () {
        assert.throw(() => { stringBuilder.insertAt(23,2), Error });
    });
    it('remove function should remove string to inner array', function () {
        let string =new stBuilder();
        //Action
        string.append('first');
        string.remove(0,5);
      //Assert
        assert.equal(string._stringArray.length, 0);
    });
    it('remove function should remove string to inner array', function () {
        let string =new stBuilder();
        //Action
        string.append('first');
      
      //Assert
        assert.equal(string.toString(), 'first');
    });
    
    
    



})