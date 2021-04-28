import camelizeKeys from '../core/camelize';
var expect = require("chai").expect;

describe("camelize", function(){
    describe('string', function() {
        it("should return captchaId  when given captcha_id ", function(){
            expect(camelizeKeys("captcha_id")).to.equal("captcha_id");
        })

        it("should return '' when given '' ", function(){
            expect(camelizeKeys("")).to.equal("");
        })
    });


    describe("obj", function(){

        it("should return lotNumber", function(){
            expect(camelizeKeys({
                captcha_id: "adadsad",
                custom: {
                    display_mode: "lightMode",
                    style: "lightMode"
                },
                target_mode:{}
            })).to.deep.equal({
                captchaId: "adadsad",
                custom: {
                    displayMode: "lightMode",
                    style: "lightMode"
                },
                targetMode:{}
            })
        })
    })

    describe("arr", function(){
        it("should return arr", function(){
            expect(camelizeKeys({
                arr: [
                    {
                       captcha_id: "adad" 
                    },
                    "_adad_adad",
                    {
                        _dada_id: "adad_ad"
                    },
                    1
                ],
            })).to.deep.equal({
                arr: [
                    {
                       captchaId: "adad" 
                    },
                    "_adad_adad",
                    {
                        _dadaId: "adad_ad"
                    },
                    1
                ]
            })
        })
    })

    describe("mix", function(){
        it("should return arr", function(){
            expect(camelizeKeys({
                arr: [
                    {
                       captcha_id: "adad" 
                    },
                    "_adad_adad",
                    {
                        _dada_id: "adad_ad"
                    },
                    1
                ],
                captcha_id: "adada",
                _adad: "_ad_ada",
                custom: {
                    display_mode: "lightMode",
                    style: "lightMode"
                },
                target_mode:{}
            })).to.deep.equal({
                arr: [
                    {
                       captchaId: "adad" 
                    },
                    "_adad_adad",
                    {
                        _dadaId: "adad_ad"
                    },
                    1
                ],
                captchaId: "adada",
                _adad: "_ad_ada",
                custom: {
                    displayMode: "lightMode",
                    style: "lightMode"
                },
                targetMode:{}
            })
        })
    })
})