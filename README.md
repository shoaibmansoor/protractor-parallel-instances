protractor-parallel-instances
===

Node module to create browser instances on the fly. It accepts a protractor config file to create new instances

```shell
npm i protractor-parallel-instances --save-dev
```

# Usage

```typescript
// Typescript
import { config } from 'protractor.conf';
import { ParallelInstanceHelper } from 'protractor-parallel-instances';

// create new browser instance with imported config file
const newBrowser = await ParallelInstanceHelper.createNewBrowser(config);
await newBrowser.get('https://google.com');
```

```javascript
// Javascript: TODO
```

### Table of Contents

-   [ParallelInstanceHelper class][1]
    -   [createNewBrowser function][2]
        -   [Parameters][3]
    -   [updateGlobal function][4]

## ParallelInstanceHelper

### createNewBrowser

Helps in creating new ProtractorBrowser instance. Accepts protractor config file to create new instances

#### Parameters

-   `configurationFile` **any**
-   `waitForAngularEnabled` **[boolean]**

Returns **[Promise]\<ProtractorBrowser>**

### updateGlobal

Updates the global `browser` object with newly create driver instance
```typescript
await ParallelInstanceHelper.updateGlobal();
```

[1]: #parallelinstancehelper

[2]: #createnewbrowser

[3]: #parameters

[4]: #updateglobal