# Scene Effect Plugin

Provides action commands for applying a scene effect, the value/intensity/level of which is read from a variable.

## Action Commands

-   **Apply Basic Scene Effect With Variable Value**
    -   Apply basic scene effect using value/intensity/level stored in variable.
    -   _Parameters_:
        -   **Layer Index**
            -   Must be one of:
                -   Foremost Layer + Menu (`-4`)
                -   Foremost layer (`-3`)
                -   Object Instance Layer (`-2`)
                -   All Layers In Scene (`-1`)
                -   Any Individual Layer (`0+`)
        -   **Scene Effect**
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
-   **Apply Color Scene Effect With Variable Channels**
    -   Apply color scene effect using RGBA values stored in variables.
    -   _Parameters_:
        -   **Layer Index**
            -   Must be one of:
                -   Foremost Layer + Menu (`-4`)
                -   Foremost layer (`-3`)
                -   Object Instance Layer (`-2`)
                -   All Layers In Scene (`-1`)
                -   Any Individual Layer (`0+`)
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
-   **Apply Blink Scene Effect With Variable Interval**
    -   Apply blink scene effect using interval value stored in variable.
    -   _Parameters_:
        -   **Layer Index**
            -   Must be one of:
                -   Foremost Layer + Menu (`-4`)
                -   Foremost layer (`-3`)
                -   Object Instance Layer (`-2`)
                -   All Layers In Scene (`-1`)
                -   Any Individual Layer (`0+`)
        -   **Interval Variable Source**
            -   Must be one of:
                -   Project Common (`0`)
                -   Object Self (`-2`)
                -   Parent Object (`-7`)
        -   **Interval Variable**
-   **Apply Basic Scene Effect With Variable Value & Variable Duration**
    -   Apply basic scene effect using value/intensity/level stored in variable & duration stored in another variable.
    -   _Parameters_:
        -   **Layer Index**
            -   Must be one of:
                -   Foremost Layer + Menu (`-4`)
                -   Foremost layer (`-3`)
                -   Object Instance Layer (`-2`)
                -   All Layers In Scene (`-1`)
                -   Any Individual Layer (`0+`)
        -   **Scene Effect**
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
-   **Apply Color Scene Effect With Variable Channels & Variable Duration**
    -   Apply color scene effect using RGBA values stored in variables & duration stored in another variable.
    -   _Parameters_:
        -   **Layer Index**
            -   Must be one of:
                -   Foremost Layer + Menu (`-4`)
                -   Foremost layer (`-3`)
                -   Object Instance Layer (`-2`)
                -   All Layers In Scene (`-1`)
                -   Any Individual Layer (`0+`)
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

Plugin also exposes the action command API to your scripts, under the `kt.sceneEffect` global namespace.

-   `execApplyBasicSceneEffectWithVariableValue(config)`
    -   Execute apply basic scene effect with variable value action command.
    -   _config_:
        -   **sceneEffect**: Desired scene effect. Accepts the following:
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
        -   **layerIndex**: Layer index (`-4`, `-3`, `-2`, `-1`, `0+`).
-   `execApplyColorSceneEffectWithVariableChannels(config)`
    -   Execute apply color scene effect with variable channels action command.
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
        -   **layerIndex**: Layer index (`-4`, `-3`, `-2`, `-1`, `0+`).
-   `execApplyBlinkSceneEffectWithVariableInterval(config)`
    -   Execute apply blink scene effect with variable interval action command.
    -   _config_:
        -   **intervalVariableSourceId**: Project Common identifier (`0`) or object ID (Self or Parent, `-2` or `-7` respectively).
        -   **intervalVariableId**: The variable ID.
        -   **instanceId**: ID of executing object instance (also used for resolving Self or Parent variable source).
        -   **layerIndex**: Layer index (`-4`, `-3`, `-2`, `-1`, `0+`).
-   `execApplyBasicSceneEffectWithVariableValueAndVariableDuration(config)`
    -   Execute apply basic scene effect with variable value and variable duration action command.
    -   _config_:
        -   **sceneEffect**: Desired scene effect. Accepts the following:
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
        -   **layerIndex**: Layer index (`-4`, `-3`, `-2`, `-1`, `0+`).
-   `execApplyColorSceneEffectWithVariableChannelsAndVariableDuration(config)`
    -   Execute apply color scene effect with variable channels and variable duration action command.
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
        -   **layerIndex**: Layer index (`-4`, `-3`, `-2`, `-1`, `0+`).

Examples:

```javascript
(function () {
    // Apply blink filter to foremost layer using interval specified in common
    // variables with ID 2010 (x).
    kt.sceneEffect.execApplyBasicSceneEffectWithVariableValue({
        intervalVariableSourceId: 0,
        intervalVariableId: 2010
        instanceId: instanceId,
        layerIndex: -3
    });
})();
```
