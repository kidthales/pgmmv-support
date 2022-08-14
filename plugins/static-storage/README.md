# Static Storage Plugin

Provides static storage for your switches & variables.

> 🚧 **BETA** 🚧

> **_WARNING_**: Plugin leverages the Cocos JSB, so all platforms may not be supported!

## Parameters

-   **Static File Slot**
    -   Usually safe to ignore this parameter; however, make sure this is set to a unique value when using multiple instances of this plugin. Can also be adjusted to simulate a static data reset (if slot is not already in use).
    -   Default: `0`

## Action Commands

-   **Save Static Variable**
    -   Save variable value to static storage.
        -   _Parameters_:
            -   **Variable Source**
                -   Required.
                -   Must be one of:
                    -   Project Common (`0`)
                    -   Object Self (`-2`)
                    -   Parent Object (`-7`)
            -   **Variable**
                -   Required.
-   **Load Static Variable**
    -   Load variable value from static storage.
    -   If plugin has not completed initial static file load, this action command returns `CommandBehaviorBlock` until initial static file load is complete.
        -   _Parameters_:
            -   **Variable Source**
                -   Required.
                -   Must be one of:
                    -   Project Common (`0`)
                    -   Object Self (`-2`)
                    -   Parent Object (`-7`)
            -   **Variable**
                -   Required.
-   **Save Static Switch**
    -   Save switch value to static storage.
        -   _Parameters_:
            -   **Switch Source**
                -   Required.
                -   Must be one of:
                    -   Project Common (`0`)
                    -   Object Self (`-2`)
                    -   Parent Object (`-7`)
            -   **Switch**
                -   Required.
-   **Load Static Switch**
    -   Load switch value from static storage.
    -   If plugin has not completed initial static file load, this action command returns `CommandBehaviorBlock` until initial static file load is complete.
        -   _Parameters_:
            -   **Switch Source**
                -   Required.
                -   Must be one of:
                    -   Project Common (`0`)
                    -   Object Self (`-2`)
                    -   Parent Object (`-7`)
            -   **Switch**
                -   Required.

## Script API

Plugin also exposes the action command API to your scripts, under the `kt.staticStorage` global namespace.

-   `execSaveVariable(variableObjectId, variableId, instanceId)`
    -   Execute save static variable action command.
    -   _Parameters_:
        -   **variableObjectId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **variableId**: The variable ID.
        -   **instanceId**: ID of object instance (used for resolving Self or Parent variable source).
    -   Returns `CommandBehaviorNext`.
-   `execLoadVariable(variableObjectId, variableId, instanceId)`
    -   Execute load static variable action command.
    -   _Parameters_:
        -   **variableObjectId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **variableId**: The variable ID.
        -   **instanceId**: ID of object instance (used for resolving Self or Parent variable source).
    -   Returns `CommandBehaviorBlock` until initial static file load is complete. Otherwise, returns `CommandBehaviorNext`.
-   `execSaveSwitch(switchObjectId, switchId, instanceId)`
    -   Execute save static switch action command.
    -   _Parameters_:
        -   **switchObjectId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **switchId**: The switch ID.
        -   **instanceId**: ID of object instance (used for resolving Self or Parent switch source).
    -   Returns `CommandBehaviorNext`.
-   `execLoadSwitch(switchObjectId, switchId, instanceId)`
    -   Execute load static switch action command.
    -   _Parameters_:
        -   **switchObjectId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **switchId**: The switch ID.
        -   **instanceId**: ID of object instance (used for resolving Self or Parent switch source).
    -   Returns `CommandBehaviorBlock` until initial static file load is complete. Otherwise, returns `CommandBehaviorNext`.

Example:

```javascript
(function () {
    // Save current value in common variable with ID 2005.
    kt.staticStorage.execSaveVariable(0, 2005, instanceId);

    // Save current value in common switch with ID 2007.
    kt.staticStorage.execSaveSwitch(0, 2007, instanceId);
})();
```

## License

[MIT](../../LICENSE)
