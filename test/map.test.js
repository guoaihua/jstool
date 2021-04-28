import _map from '../core/map';
var expect = require("chai").expect;


describe("map", function(){
    it("should return Array [2, 8, 18, 32] when given [1, 4, 9, 16] ", function(){
        expect(_map([1, 4, 9, 16], x => x * 2)).deep.to.be.equal([2, 8, 18, 32])
    })

     it("should return  [{1: 10}, {2: 20}, {3: 30}] when given obj", function(){
        var kvArray = [{key: 1, value: 10},
            {key: 2, value: 20},
            {key: 3, value: 30}];
    
        var reformattedArray = _map(kvArray, function(obj) {
            var rObj = {};
            rObj[obj.key] = obj.value;
            return rObj;
         });

         expect(reformattedArray).deep.to.be.equal([{1: 10}, {2: 20}, {3: 30}]);
     })
});