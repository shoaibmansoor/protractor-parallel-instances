exports.config = {
    restartBrowserBetweenTests: false,
    SELENIUM_PROMISE_MANAGER: true,
    allScriptsTimeout: 300000,
    getPageTimeout: 90000,
    suites: {
        unit: './test/**/*.ts',
    },
    directConnect:true,
    capabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        chromeOptions: {
            args: ['--headless',
                '--disable-gpu',
                '--window-size=1280x800',
                '--disable-dev-shm-usage',
                '--no-sandbox',
                '--disable-infobars']
        }
    },
    baseUrl: 'https://google.com',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        }
    }
};
