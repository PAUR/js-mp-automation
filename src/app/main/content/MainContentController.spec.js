import MainContentController from './MainContentController';

describe('app::main::controller MainContentController', () => {

    let sut;
    const TECH_GROUPS = [{}, {}, {}];

    beforeEach(() => {
        sut = new MainContentController(TECH_GROUPS);
    });

    it('should has tech groups on scope', () => {
       sut.techGroups.should.equal(TECH_GROUPS);
    });

});