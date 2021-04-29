var expect = require("chai").expect;
import _filter from '../core/filter';
import _find from '../core/find';

describe('filter', () => {
    it('should return ["exuberant", "destruction", "present"] when given  ', () => {
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = _filter( words,word => word.length > 6);

        expect(result).deep.to.be.equal(["exuberant", "destruction", "present"]);
    });

    it('should return [12, 130, 44] when given [12, 5, 8, 130, 44] ', () => {
        function isBigEnough(element) {
            return element >= 10;
          }
          var filtered = _filter([12, 5, 8, 130, 44],isBigEnough);
          expect(filtered).deep.to.be.equal([12, 130, 44]);
    });
}); 

describe('find', () => {
    it('should return ', () => {
        var inventory = [
            {name: 'apples', quantity: 2},
            {name: 'bananas', quantity: 0},
            {name: 'cherries', quantity: 5}
        ];
        
        function findCherries(fruit) {
            return fruit.name === 'cherries';
        }
        
        console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
        
        expect(_find(inventory, findCherries)).deep.to.be.equal({ name: 'cherries', quantity: 5 });
    });

    it('should return undefined, not found when given [4, 6, 8, 12]', () => {
        function isPrime(element, index, array) {
            var start = 2;
            while (start <= Math.sqrt(element)) {
              if (element % start++ < 1) {
                return false;
              }
            }
            return element > 1;
          }   

          expect(_find([4, 6, 8, 12], isPrime)).to.be.equal(undefined)
    });


    it('should return 5, not found when given [4, 5, 8, 12]', () => {
        function isPrime(element, index, array) {
            var start = 2;
            while (start <= Math.sqrt(element)) {
              if (element % start++ < 1) {
                return false;
              }
            }
            return element > 1;
          }   

          expect(_find([4, 5, 8, 12], isPrime)).to.be.equal(5)
    });
});