//region for PhantomJs v 1.9.x
import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
//endregion

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonAsPromised from 'sinon-as-promised';
import {Promise} from 'q';


global.env = null;
global.sinon = sinon;

chai.should();

chai.use(sinonChai);
sinonAsPromised(Promise);

beforeEach(() => {
    global.env = sinon.sandbox.create();
});

afterEach(() => {
    global.env.restore();
});
