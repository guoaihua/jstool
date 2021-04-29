var expect = require("chai").expect;
import _reduce from '../core/reduce';


describe("reduce", function(){
    it("should return 10 when given 1 + 2 + 3 + 4", function(){
        const array1 = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        expect(_reduce(array1,reducer)).to.be.equal(10);
    })

    it("should return 6 when given [{x: 1}, {x:2}, {x:3}]", function(){
        var sum = _reduce([{x: 1}, {x:2}, {x:3}], function (accumulator, currentValue) {
            return accumulator + currentValue.x;
        }, 0)
       expect(sum).to.be.equal(6)
    })

    // 数组去重
    it("should return  should return ['a', 'b', 'c','d', 'e'] when given ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']", function(){
        let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
        let myOrderedArray = _reduce(myArray, function(accumulator, cur){
            if(accumulator.indexOf(cur) === -1){
                accumulator.push(cur)
            }
            return accumulator
        },[]);

        expect(myOrderedArray).deep.to.be.equal(['a', 'b', 'c','e', 'd']);
    })
})