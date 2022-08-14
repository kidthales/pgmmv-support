# Global Variable Plugin

Provides a global variable for your scripts.

Example with defaults:

```javascript
(function () {
    // Logs: '{}'.
    Agtk.log(JSON.parse(MyGlobal));
})();
```

## Parameters

-   **Global Variable Name**
    -   Required.
    -   Must be a valid JavaScript identifier.
    -   Default: `MyGlobal`
-   **Global Variable Value**
    -   Required.
    -   Must be a valid JSON value.
    -   Default: `{}`
