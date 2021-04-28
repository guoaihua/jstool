import decamelizeKeys from '../core/decamelize';
var expect = require("chai").expect;

describe("decamelizeKeys", function(){
    describe('base type', function() {
        it("should return captchaId  when given captcha_id ", function(){
            expect(decamelizeKeys("captcha_id")).to.equal("captcha_id");
        })

        it("should return 1 when given 1 ", function(){
            expect(decamelizeKeys("")).to.equal("");
        })

        it("should return null when given null ", function(){
            expect(decamelizeKeys(null)).to.equal(null);
        })
    });

    describe('plain object', function(){

        const obj =  {
            "captchaId": {
                aadaAd: "adadAdadad_ada"
            }
        };

        obj.__proto__.customName = "adad";

        it("should return obj  when given obj ", function(){
            expect(decamelizeKeys(obj)).deep.to.equal({
                "captcha_id": {
                    aada_ad: "adadAdadad_ada"
                }
            });
        })

        it("should return null when given null ", function(){
            expect(decamelizeKeys(null)).to.equal(null);
        })
    })

    describe('objectArr', function(){
        it("should return  decamelize objectArr when given objectArr ", function(){
            expect(decamelizeKeys({
                "captchaId": [1,2,3, "adaAd"]
            })).deep.to.equal({
                "captcha_id": [1,2,3, "adaAd"]
            });
        })

        it("should return obj arr when given arr ", function(){
            expect(decamelizeKeys({
                "captchaId": [1,2,3, "adaAd", {
                    "captchaId": {
                        aadaAd: "adadAdadad_ada"
                    }
                }]
            })).deep.to.equal({
                "captcha_id": [1,2,3, "adaAd", {
                    "captcha_id": {
                        aada_ad: "adadAdadad_ada"
                    }
                }]
            });
        })
    })
})