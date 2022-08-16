# Linear Movement Plugin

Provides action commands for translating an object instance to an (x,y) coordinate pair, each of which is read from a variable.

> 🚧 **BETA** 🚧

## Action Commands

-   **Move To Variable Coordinates**
    -   Move object instance to coordinates stored in variables.
    -   Uses object instance's set move speed (Move Speed %).
    -   _Parameters_:
        -   **X Coordinate Variable Source**
            -   Required.
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **X Coordinate Variable**
            -   Required.
        -   **Y Coordinate Variable Source**
            -   Required.
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Y Coordinate Variable**
            -   Required.
-   **Tween To Variable Coordinates**
    -   Tween object instance to coordinates stored in variables.
    -   Uses specified duration to determine object instance's move speed.
    -   _Parameters_:
        -   **X Coordinate Variable Source**
            -   Required.
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **X Coordinate Variable**
            -   Required.
        -   **Y Coordinate Variable Source**
            -   Required.
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Y Coordinate Variable**
            -   Required.
        -   **Duration**
            -   Duration of tween, in seconds.

## Script API

Plugin also exposes the action command API to your scripts, under the `kt.linearMovement` global namespace.

-   `execMoveToVariableCoordinates(xVariableSourceId, xVariableId, yVariableSourceId, yVariableId, instanceId)`
    -   Execute move to variable coordinates action command.
    -   _Parameters_:
        -   **xVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **xVariableId**: The variable ID.
        -   **yVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **yVariableId**: The variable ID.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
    -   Returns `CommandBehaviorNext`.
-   `execTweenToVariableCoordinates(xVariableSourceId, xVariableId, yVariableSourceId, yVariableId, duration, instanceId)`
    -   Execute tween to variable coordinates action command.
    -   _Parameters_:
        -   **xVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **xVariableId**: The variable ID.
        -   **yVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **yVariableId**: The variable ID.
        -   **duration**: Duration of tween, in seconds.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
    -   Returns `CommandBehaviorNext`.

Examples:

```javascript
(function () {
    // Move object instance (specified by instanceId) to (x,y) coordinates
    // specified in common variables with ID 2010 (x) & 2011 (y).
    kt.linearMovement.execMoveToVariableCoordinates(0, 2010, 0, 2011, instanceId);
})();
```

```javascript
(function () {
    // Tween object instance (specified by instanceId) to (x,y) coordinates
    // specified in common variables with ID 2010 (x) & 2011 (y) with a duration
    // of 752 milliseconds.
    kt.linearMovement.execTweenToVariableCoordinates(0, 2010, 0, 2011, 0.752 instanceId);
})();
```
