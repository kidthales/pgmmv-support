# Object Filter Plugin

Provides action commands for applying a filter effect to an object instance, the value/intensity/level of which is read from a variable.

## Action Commands

-   **Apply Basic Filter Effect With Variable Value**
    -   Apply basic filter effect to object instance using value/intensity/level stored in variable.
    -   _Parameters_:
        -   **Action Target**
            -   Must be one of:
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Filter Effect**
            -   Must be one of:
                -   Noise (`0`)
                -   Mosaic (`1`)
                -   Monochrome (`2`)
                -   Sepia (`3`)
                -   Invert (`4`)
                -   Blur (`5`)
                -   Chromatic Aberration (`6`)
                -   Darken (`7`)
                -   Transparency (`10`)
        -   **Value Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Value Variable**
        -   **Duration**
            -   Duration of tween, in seconds.
-   **Apply Color Filter Effect With Variable Channels**
    -   Apply color filter effect to object instance using RGBA values stored in variables.
    -   _Parameters_:
        -   **Action Target**
            -   Must be one of:
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Red Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Red Channel Variable**
        -   **Green Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Green Channel Variable**
        -   **Blue Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Blue Channel Variable**
        -   **Alpha Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Alpha Channel Variable**
        -   **Duration**
            -   Duration of tween, in seconds.
-   **Apply Blink Filter Effect With Variable Interval**
    -   Apply blink filter effect to object instance using interval value stored in variable.
    -   _Parameters_:
        -   **Action Target**
            -   Must be one of:
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Interval Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Interval Variable**
-   **Apply Basic Filter Effect With Variable Value & Variable Duration**
    -   Apply basic filter effect to object instance using value/intensity/level stored in variable & duration stored in another variable.
    -   _Parameters_:
        -   **Action Target**
            -   Must be one of:
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Filter Effect**
            -   Must be one of:
                -   Noise (`0`)
                -   Mosaic (`1`)
                -   Monochrome (`2`)
                -   Sepia (`3`)
                -   Invert (`4`)
                -   Blur (`5`)
                -   Chromatic Aberration (`6`)
                -   Darken (`7`)
                -   Transparency (`10`)
        -   **Value Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Value Variable**
        -   **Duration Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Duration Variable**
-   **Apply Color Filter Effect With Variable Channels & Variable Duration**
    -   Apply color filter effect to object instance using RGBA values stored in variables & duration stored in another variable.
    -   _Parameters_:
        -   **Action Target**
            -   Must be one of:
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Red Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Red Channel Variable**
        -   **Green Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Green Channel Variable**
        -   **Blue Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Blue Channel Variable**
        -   **Alpha Channel Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Alpha Channel Variable**
        -   **Duration Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Duration Variable**

## Script API

Plugin also exposes the action command API to your scripts, under the `kt.objectFilter` global namespace.

-   `execApplyBasicFilterEffectWithVariableValue(config)`
    -   Execute apply basic filter effect with variable value action command.
    -   _config_:
        -   **filterEffect**: Desired filter effect. Accepts the following:
            -   `0`: noise
            -   `1`: mosaic
            -   `2`: monochrome
            -   `3`: sepia
            -   `4`: invert
            -   `5`: blur
            -   `6`: chromatic aberration
            -   `7`: darken
            -   `10`: transparency
        -   **valueVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **valueVariableId**: The variable ID.
        -   **duration**: Duration of tween, in seconds.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
        -   **actionTarget**: Optional. Object ID (Self or Parent, `-2` or `-7` respectively, default is `-2`).
-   `execApplyColorFilterEffectWithVariableChannels(config)`
    -   Execute apply color filter effect with variable channels action command.
    -   _config_:
        -   **redChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **redChannelVariableId**: The variable ID.
        -   **greenChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **greenChannelVariableId**: The variable ID.
        -   **blueChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **blueChannelVariableId**: The variable ID.
        -   **alphaChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **alphaChannelVariableId**: The variable ID.
        -   **duration**: Duration of tween, in seconds.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
        -   **actionTarget**: Optional. Object ID (Self or Parent, `-2` or `-7` respectively, default is `-2`).
-   `execApplyBlinkFilterEffectWithVariableInterval(config)`
    -   Execute apply blink filter effect with variable interval action command.
    -   _config_:
        -   **intervalVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **intervalVariableId**: The variable ID.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
        -   **actionTarget**: Optional. Object ID (Self or Parent, `-2` or `-7` respectively, default is `-2`).
-   `execApplyBasicFilterEffectWithVariableValueAndVariableDuration(config)`
    -   Execute apply basic filter effect with variable value and variable duration action command.
    -   _config_:
        -   **filterEffect**: Desired filter effect. Accepts the following:
            -   `0`: noise
            -   `1`: mosaic
            -   `2`: monochrome
            -   `3`: sepia
            -   `4`: invert
            -   `5`: blur
            -   `6`: chromatic aberration
            -   `7`: darken
            -   `10`: transparency
        -   **valueVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **valueVariableId**: The variable ID.
        -   **durationVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **durationVariableId**: The variable ID.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
        -   **actionTarget**: Optional. Object ID (Self or Parent, `-2` or `-7` respectively, default is `-2`).
-   `execApplyColorFilterEffectWithVariableChannelsAndVariableDuration(config)`
    -   Execute apply color filter effect with variable channels and variable duration action command.
    -   _config_:
        -   **redChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **redChannelVariableId**: The variable ID.
        -   **greenChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **greenChannelVariableId**: The variable ID.
        -   **blueChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **blueChannelVariableId**: The variable ID.
        -   **alphaChannelVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **alphaChannelVariableId**: The variable ID.
        -   **durationVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **durationVariableId**: The variable ID.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
        -   **actionTarget**: Optional. Object ID (Self or Parent, `-2` or `-7` respectively, default is `-2`).

Examples:

```javascript
(function () {
    // Apply blink filter to parent object using interval specified in common
    // variables with ID 2010 (x).
    kt.objectFilter.execMoveToVariableCoordinates({
        intervalVariableSourceId: 0,
        intervalVariableId: 2010
        instanceId: instanceId,
        actionTarget: -7
    });
})();
```
