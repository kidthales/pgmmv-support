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
