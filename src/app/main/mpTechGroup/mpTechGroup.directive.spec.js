import mpTechGroupDirective from './mpTechGroup.directive.js';

describe('app::main::directive mpTechGroup', () => {

    let sut;

    beforeEach(() => {
        sut = mpTechGroupDirective();
    });

    it('should be used as element', () => {
        sut.restrict.should.equal('E');
    });

    it('should replace custom tags', () => {
       sut.replace.should.be.true;
    });

    describe('scope', () => {

        it('should be binded to tech', () => {
            sut.scope.techGroup.should.equal('=');
        });

    });

});