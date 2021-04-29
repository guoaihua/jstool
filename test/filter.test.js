var expect = require("chai").expect;
import _filter from '../core/filter';

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