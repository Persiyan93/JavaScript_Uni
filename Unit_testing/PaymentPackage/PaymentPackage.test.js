let assert = require('chai').assert;
let PaymentPackage = require("./PaymentPackage");
describe('PaymentPackage', function () {
    it('initialize with invalid name throw exception', function () {
        assert.throw(() => { PaymentPackage(23, 23) }, Error);
    });
    it('initialize with empty name throw exception', function () {
        assert.throw(() => { PaymentPackage('', 23) }, Error);
    });
    it('initialize with two valid arguments', function () {
        assert.exists(new PaymentPackage('test', 20));
    })
    it('name getter should work properly', function () {
        let package = new PaymentPackage('Test', 20);
        assert.equal(package.name, 'Test');
    });

    it('try to set value with string throw Error', function () {
        let package = new PaymentPackage('Test', 20);
        assert.throw(() => { package.value = 'test' }, Error);
    });

    it('try to set value with negative number throw Error', function () {
        let package = new PaymentPackage('Test', 20);
        assert.throw(() => { package.value = -40 }, Error);
    });
    it('try to set active  with nonboolen value throw Error', function () {
        let package = new PaymentPackage('Test', 20);
        assert.throw(() => { package.active = 'Test' }, Error);
    });
    it('try to set Vat  with string value throw Error', function () {
        let package = new PaymentPackage('Test', 20);
        assert.throw(() => { package.VAT = 'Test' }, Error);
    });
    it('try to set Vat  with negatirve number  throw Error', function () {
        let package = new PaymentPackage('Test', 20);
        assert.throw(() => { package.VAT = -40 }, Error);
    });
    it('Vat getter should return value of Vat', function () {
        let package = new PaymentPackage('Test', 20);
      assert.equal(package.VAT,20);
    });
    it('Active getter should return value of active', function () {
        let package = new PaymentPackage('Test', 20);
      assert.equal(package.active,true);
    });
   

    



})