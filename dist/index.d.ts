import { ProtractorBrowser } from 'protractor';
export declare class ParallelInstanceHelper {
    private static ptorRunner;
    private static browser;
    /**
     * Helps in creating new ProtractorBrowser instance.
     * It creates instances based on capabilities present in configuration passed
     * @return ProtractorBrowser
     * @param configurationFile
     * @param waitForAngularEnabled
     */
    static createNewBrowser(configurationFile: any, waitForAngularEnabled?: boolean): Promise<ProtractorBrowser>;
    /**
     * It updates the global `browser` object with newly create driver instance
     */
    static updateGlobal(): Promise<void>;
}
