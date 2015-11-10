import mpTechDirective from './mpTech.directive.js';

describe('app::main::directive mpTech', () => {

    let sut;

    beforeEach(() => {
        sut = mpTechDirective();
    });

    it('should be used as element', () => {
        sut.restrict.should.equal('E');
    });

    it('should not replace custom tags', () => {
       sut.replace.should.be.false;
    });

    describe('scope', () => {

        it('should be binded to tech', () => {
            sut.scope.tech.should.equal('=');
        });

    });

});