import { ParallelInstanceHelper } from '../../src';
import { config } from '../../resources/protractor.conf';
import { browser, ProtractorBrowser } from 'protractor';

const PROTRACTOR_TITLE = 'Protractor - end-to-end testing for AngularJS';
const GOOGLE_TITLE = 'Google';
const PROTRACTOR_URL = 'https://www.protractortest.org/';
describe('Jasmine AllureEnvPropsAdder class Suite', () => {
    let newBrowser: ProtractorBrowser;

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(async () => {
        await newBrowser.close();
    });

    it('Check if a new browser is created on calling createNewBrowser()', async () => {
        newBrowser = await ParallelInstanceHelper.createNewBrowser(config);
        await newBrowser.get(newBrowser.baseUrl);
        expect(await newBrowser.getTitle()).toBe(GOOGLE_TITLE);
    });

    it('Check if waitForAngularEnabled works when true is passed', async () => {
        newBrowser = await ParallelInstanceHelper.createNewBrowser(config, true);
        await newBrowser.get(PROTRACTOR_URL);
        expect(await newBrowser.getTitle()).toBe(PROTRACTOR_TITLE);
    });

    it('Check if global protractor objects are updated when noGlobals=false', async () => {
        newBrowser = await ParallelInstanceHelper.createNewBrowser(config, false);
        await newBrowser.get(newBrowser.baseUrl);
        await ParallelInstanceHelper.updateGlobal();
        expect(await browser.getTitle()).toBe(GOOGLE_TITLE);
    });

    it('Check if global protractor objects are updated on angular=true && noGlobals=false', async () => {
        newBrowser = await ParallelInstanceHelper.createNewBrowser(config, true);
        await newBrowser.get(PROTRACTOR_URL);
        await ParallelInstanceHelper.updateGlobal();
        expect(await browser.getTitle()).toBe(PROTRACTOR_TITLE);
    });
});
