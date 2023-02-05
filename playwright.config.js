const { devices } = require('@playwright/test'); 

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // Option shared for all projects. 
    timeout: 30000, 
    use: {
        ignoreHTTPSErrors: true, 
    }, 

    //Option specific tot each project browser size 
    projects: [
        {
            name: 'Desktop Chromium', 
            use: { 
                browserName: 'chromium', 
                viewport: { width: 1280, height: 720 }, 

            },
        }, 
        {
            name: 'Desktop Safari',
            user: {
                browserName: 'webkit', 
                viewport: { width: 1280, height: 720 }, 
            }, 
        }, 
        {
            name: 'Desktop Firefox',
            user: {
                browserName: 'firefox', 
                viewport: { width: 1280, height: 720 }, 
            },    
        }, 
        {
            name: 'Mobile Chrome',
            user: {
                browserName: 'chromium', 
                ...devices['iPhone XR'], 
                viewport: { width: 414, height: 896 },  
            }, 
        },    
        {
            name:'Tablet Chrome', 
            use: {
                browserName: 'chromium', 
                ...devices ['iPad Air'], 
                viewport: { width: 890, height: 1180 }, 
            }, 
        }, 
    ]
}

module.exports = config; 
