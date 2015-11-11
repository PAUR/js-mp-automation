import sut from './app.states';

describe('app::config states', () => {
    let $urlRouterProvider;

    beforeEach(() => {
        $urlRouterProvider = {
            otherwise : env.stub()
        };
    });

    it('should redirect to /dima by default', () => {
        sut($urlRouterProvider);
        $urlRouterProvider.otherwise.should.been.calledWith('/dima');
    });
    
});
