import { ProtractorBrowser } from 'protractor';

const ProtractorConfigParser = require('protractor/built/configParser').ConfigParser;
const ProtractorRunner = require('protractor/built/runner').Runner;

export class ParallelInstanceHelper {
    private static ptorRunner: any;
    private static browser: any;

    /**
     * Helps in creating new ProtractorBrowser instance.
     * It creates instances based on capabilities present in configuration passed
     * @return ProtractorBrowser
     * @param configurationFile
     * @param waitForAngularEnabled
     */
    static async createNewBrowser(configurationFile: any,
                                  waitForAngularEnabled = false): Promise<ProtractorBrowser>  {

        const ptorConfig = new ProtractorConfigParser().config_;

        // append config properties
        Object.entries(configurationFile).forEach(
            ([key, value]) => ptorConfig[key] = value
        );

        // local preference
        ptorConfig.noGlobals = true;
        this.ptorRunner = new ProtractorRunner(ptorConfig);
        this.ptorRunner.driverprovider_.setupEnv();
        this.browser = await this.ptorRunner.createBrowser();

        // wait for binaries to respond
        await this.browser.sleep(5000);
        await this.browser.waitForAngularEnabled(waitForAngularEnabled);

        return this.browser as ProtractorBrowser;
    }

    /**
     * It updates the global `browser` object with newly create driver instance
     */
    static async updateGlobal() {
        this.ptorRunner.setupGlobals_(this.browser);
    }
}
