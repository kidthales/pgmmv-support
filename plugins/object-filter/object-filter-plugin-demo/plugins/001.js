/**
 * @file PGMMV plugin that provides action commands for applying a filter effect
 * to an object instance, the value/intensity/level of which is read from a
 * variable.
 * @author kidthales <kidthales@agogpixel.com>
 * @version 1.0.1
 * @license MIT
 */
(function () {
  /**
   * Key used in window object to expose vendor specific APIs directly to
   * scripts.
   *
   * @const
   * @private
   */
  var kVendorGlobalKey = 'kt',
    /**
     * Key used in global vendor object to expose plugin specific APIs directly
     * to scripts
     *
     * @const
     * @private
     */
    kPluginVendorKey = 'objectFilter',
    /**
     * Default unset ID.
     *
     * @const
     * @private
     */
    kUnsetId = -1,
    /**
     * Duration300 constant.
     *
     * @const
     * @private
     */
    kDuration300 = 300,
    /**
     * Minimum duration.
     *
     * @const
     * @private
     */
    kMinDuration = 0,
    /**
     * Default duration.
     *
     * @const
     * @private
     */
    kDefaultDuration = 0,
    /**
     * Duration decimal places.
     *
     * @const
     * @private
     */
    kDurationDecimals = 3,
    /**
     * Minimum basic filter value.
     *
     * @const
     * @private
     */
    kMinBasicFilterValue = 0,
    /**
     * Maximum basic filter value.
     *
     * @const
     * @private
     */
    kMaxBasicFilterValue = 100,
    /**
     * Minimum RGBA value.
     *
     * @const
     * @private
     */
    kMinRGBAValue = 0,
    /**
     * Maximum RGBA value.
     *
     * @const
     * @private
     */
    kMaxRGBAValue = 255,
    /**
     * Minimum blink interval.
     *
     * @const
     * @private
     */
    kMinBlinkInterval = 0,
    /**
     * Localization manager. Responsible for mapping our localization keys to
     * their localized values.
     *
     * @const
     * @private
     */
    locaManager = (function () {
      /**
       * Localization data. Maps locale key to localized look up object. Track
       * all of your plugin localizations here.
       *
       * @const
       * @private
       */
      var locaData = {
          /** Default english localizations. */
          en: {
            /** Required. */
            PLUGIN_NAME: 'Object Filter Plugin',

            /** Required. */
            PLUGIN_DESCRIPTION: 'Apply filter effect with value/intensity/level read from a variable.',

            /** Required. */
            PLUGIN_AUTHOR: 'kidthales <kidthales@agogpixel.com>',

            /** Required. */
            PLUGIN_HELP:
              'Provides action commands for applying a filter effect to an object instance, the value/intensity/level of which is read from a variable.',

            ACTION_COMMAND_NAME_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE:
              'Apply Basic Filter Effect With Variable Value',
            ACTION_COMMAND_DESCRIPTION_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE:
              'Apply basic filter effect to object instance using value/intensity/level stored in variable.\n\n' +
              "Available filter effects: 'Noise', 'Mosaic', 'Monochrome', 'Sepia', 'Invert', 'Blur', 'Chromatic Aberration', 'Mosaic', & 'Transparency'.",
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT: 'Filter Effect:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_NOISE:
              'Noise',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MOSAIC:
              'Mosaic',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MONOCHROME:
              'Monochrome',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_SEPIA:
              'Sepia',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_INVERT:
              'Invert',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_BLUR:
              'Blur',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_CHROMATIC_ABERRATION:
              'Chromatic Aberration',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_DARKEN:
              'Darken',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_TRANSPARENCY:
              'Transparency',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_VALUE_VARIABLE_SOURCE:
              'Value Variable Source:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_VALUE_VARIABLE:
              'Value Variable:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_DURATION: 'Duration:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_ACTION_TARGET: 'Action Target:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF:
              'Object Self',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT:
              'Parent Object',

            ACTION_COMMAND_NAME_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS:
              'Apply Color Filter Effect With Variable Channels',
            ACTION_COMMAND_DESCRIPTION_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS:
              'Apply color filter effect to object instance using RGBA values stored in variables.',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_RED_CHANNEL_VARIABLE_SOURCE:
              'Red Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_RED_CHANNEL_VARIABLE:
              'Red Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE_SOURCE:
              'Green Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE:
              'Green Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE_SOURCE:
              'Blue Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE:
              'Blue Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE_SOURCE:
              'Alpha Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE:
              'Alpha Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_DURATION: 'Duration:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ACTION_TARGET:
              'Action Target:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF:
              'Object Self',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT:
              'Parent Object',

            ACTION_COMMAND_NAME_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL:
              'Apply Blink Filter Effect With Variable Interval',
            ACTION_COMMAND_DESCRIPTION_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL:
              'Apply blink filter effect to object instance using interval value stored in variable.',
            ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_INTERVAL_VARIABLE_SOURCE:
              'Interval Variable Source:',
            ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_INTERVAL_VARIABLE:
              'Interval Variable:',
            ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_ACTION_TARGET:
              'Action Target:',
            ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF:
              'Object Self',
            ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT:
              'Parent Object',

            ACTION_COMMAND_NAME_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION:
              'Apply Basic Filter Effect With Variable Value & Variable Duration',
            ACTION_COMMAND_DESCRIPTION_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION:
              'Apply basic filter effect to object instance using value/intensity/level stored in variable & duration stored in another variable.\n\n' +
              "Available filter effects: 'Noise', 'Mosaic', 'Monochrome', 'Sepia', 'Invert', 'Blur', 'Chromatic Aberration', 'Mosaic', & 'Transparency'.",
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT:
              'Filter Effect:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_NOISE:
              'Noise',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MOSAIC:
              'Mosaic',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MONOCHROME:
              'Monochrome',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_SEPIA:
              'Sepia',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_INVERT:
              'Invert',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_BLUR:
              'Blur',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_CHROMATIC_ABERRATION:
              'Chromatic Aberration',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_DARKEN:
              'Darken',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_TRANSPARENCY:
              'Transparency',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_VALUE_VARIABLE_SOURCE:
              'Value Variable Source:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_VALUE_VARIABLE:
              'Value Variable:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE_SOURCE:
              'Duration Variable Source:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE:
              'Duration Variable:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET:
              'Action Target:',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF:
              'Object Self',
            ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT:
              'Parent Object',

            ACTION_COMMAND_NAME_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION:
              'Apply Color Filter Effect With Variable Channels & Variable Duration',
            ACTION_COMMAND_DESCRIPTION_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION:
              'Apply color filter effect to object instance using RGBA values stored in variables & duration stored in another variable.',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_RED_CHANNEL_VARIABLE_SOURCE:
              'Red Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_RED_CHANNEL_VARIABLE:
              'Red Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE_SOURCE:
              'Green Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE:
              'Green Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE_SOURCE:
              'Blue Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE:
              'Blue Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE_SOURCE:
              'Alpha Channel Variable\nSource:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE:
              'Alpha Channel Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE_SOURCE:
              'Duration Variable Source:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE:
              'Duration Variable:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET:
              'Action Target:',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF:
              'Object Self',
            ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT:
              'Parent Object'
          }
        },
        /**
         * Default locale. Used as a fallback if a given loca key is not
         * found for currently set locale.
         *
         * @const
         * @private
         */
        locaDefault = 'en',
        /**
         * Special regex for matching loca keys we can inline in our plugin
         * parameters, etc.
         *
         * @const
         * @private
         * @example 'loca(MY_LOCA_KEY)'
         */
        inlineRegex = /^loca\((.+)\)$/,
        /**
         * Current locale.
         *
         * @private
         */
        locaCurrent = locaDefault,
        /**
         * Localization manager API.
         *
         * @public
         */
        self = {
          /**
           * Get localized string for specified key. Look up is performed in this order:
           *   1. Current locale (ie. 'en_CA').
           *   2. Current locale prefix (ie. 'en').
           *   3. Default locale.
           *
           * @param {string} key Loca key.
           * @returns {string} Localized string when successful, loca key otherwise.
           */
          get: function (key) {
            var locaCurrentShort = locaCurrent.substring(0, 2);
            return locaData[locaCurrent] && typeof locaData[locaCurrent][key] === 'string'
              ? locaData[locaCurrent][key]
              : locaData[locaCurrentShort] && typeof locaData[locaCurrentShort][key] === 'string'
              ? locaData[locaCurrentShort][key]
              : locaData[locaDefault] && typeof locaData[locaDefault][key] === 'string'
              ? locaData[locaDefault][key]
              : key;
          },

          /**
           * Get current locale.
           *
           * @returns {string} Current locale.
           */
          getLocale: function () {
            return locaCurrent;
          },

          /**
           * Set current locale.
           *
           * @param {string} locale Locale to set.
           */
          setLocale: function (locale) {
            locaCurrent = locale;
          },

          /**
           * Localize plugin parameters in place.
           *
           * @param {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]} parameters Non-localized plugin parameters.
           * @returns {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]} Localized plugin parameters.
           */
          processParameters: function (parameters) {
            var pLen = parameters.length,
              i = 0,
              j,
              /** @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter} */
              p,
              /** @type {RegExpMatchArray | null} */
              m,
              /** @type {number} */
              cpLen,
              /** @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkCustomIdParameterParameter} */
              cp;

            for (; i < pLen; ++i) {
              p = parameters[i];
              m = p.name.match(inlineRegex);

              if (m && m.length > 1) {
                p.name = self.get(m[1]);
              }

              switch (p.type) {
                case 'String':
                case 'MultiLineString':
                  m = p.defaultValue.match(inlineRegex);

                  if (m && m.length > 1) {
                    p.defaultValue = self.get(m[1]);
                  }

                  break;

                case 'CustomId':
                  cpLen = p.customParam.length;

                  for (j = 0; j < cpLen; ++j) {
                    cp = p.customParam[j];
                    m = cp.name.match(inlineRegex);
                    if (m && m.length > 1) {
                      cp.name = self.get(m[1]);
                    }
                  }

                  break;

                default:
                  break;
              }
            }

            return parameters;
          },

          /**
           * Localize action commands or link conditions in place.
           *
           * @param {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[] | import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]} commandsOrConditions
           * Non-localized action commands or link conditions.
           * @returns {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[] | import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]}
           * Localized action commands or link conditions.
           */
          processCommandsOrConditions: function (commandsOrConditions) {
            var len = commandsOrConditions.length,
              i = 0,
              /** @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand | import("pgmmv/agtk/constants/link-condition").AgtkLinkCondition} */
              c,
              /** @type {RegExpMatchArray | null} */
              m;

            for (; i < len; ++i) {
              c = commandsOrConditions[i];
              m = c.name.match(inlineRegex);

              if (m && m.length > 1) {
                c.name = self.get(m[1]);
              }

              m = c.description.match(inlineRegex);

              if (m && m.length > 1) {
                c.description = self.get(m[1]);
              }

              self.processParameters(c.parameter);
            }

            return commandsOrConditions;
          }
        };

      // Localization manager is ready!
      return self;
    })(),
    /**
     * Plugin action command IDs with corresponding parameter IDs. So we don't
     * use 'magic values' throughout the code.
     *
     * @const
     * @private
     */
    actionCommandId = {
      /**
       * Apply basic filter effect with variable value action command.
       *
       * @const
       */
      applyBasicFilterEffectWithVariableValue: {
        /**
         * Apply basic filter effect with variable value action command ID.
         *
         * @const
         */
        id: 0,

        /**
         * Apply basic filter effect with variable value action command
         * parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Apply basic filter effect with variable value action command filter
           * effect parameter.
           *
           * @const
           */
          filterEffect: {
            /**
             * Apply basic filter effect with variable value action command
             * filter effect parameter ID.
             *
             * @const
             */
            id: 0,

            /**
             * Apply basic filter effect with variable value action command
             * filter effect parameter custom parameter IDs.
             *
             * @const
             * @see {AgtkFilterEffectsValue}
             */
            parameterId: {
              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter noise custom parameter ID.
               *
               * @const
               */
              noise: 0,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter mosaic custom parameter ID.
               *
               * @const
               */
              mosaic: 1,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter monochrome custom parameter ID.
               *
               * @const
               */
              monochrome: 2,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter sepia custom parameter ID.
               *
               * @const
               */
              sepia: 3,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter invert custom parameter ID.
               *
               * @const
               */
              invert: 4,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter blur custom parameter ID.
               *
               * @const
               */
              blur: 5,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter chromatic aberration custom parameter
               * ID.
               *
               * @const
               */
              chromaticAberration: 6,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter darken custom parameter ID.
               *
               * @const
               */
              darken: 7,

              /**
               * Apply basic filter effect with variable value action command
               * filter effect parameter transparency custom parameter ID.
               *
               * @const
               */
              transparency: 10
            }
          },
          /**
           * Apply basic filter effect with variable value action command
           * value variable parameter ID.
           *
           * @const
           */
          valueVariable: 1,

          /**
           * Apply basic filter effect with variable value action command
           * value variable source parameter ID.
           *
           * @const
           */
          valueVariableSource: 101,

          /**
           * Apply basic filter effect with variable value action command
           * duration parameter ID.
           *
           * @const
           */
          duration: 2,

          /**
           * Apply basic filter effect with variable value action command action
           * target parameter.
           *
           * @const
           */
          actionTarget: {
            /**
             * Apply basic filter effect with variable value action command
             * action target parameter ID.
             *
             * @const
             */
            id: 3,

            /**
             * Apply basic filter effect with variable value action command
             * action target parameter custom parameter IDs.
             *
             * @const
             */
            parameterId: {
              /**
               * Apply basic filter effect with variable value action command
               * action target parameter object self custom parameter ID.
               *
               * @const
               */
              objectSelf: -2,

              /**
               * Apply basic filter effect with variable value action command
               * action target parameter parent object custom parameter ID.
               *
               * @const
               */
              parentObject: -7
            }
          }
        }
      },

      /**
       * Apply color filter effect with variable channels action command.
       */
      applyColorFilterEffectWithVariableChannels: {
        /**
         * Apply color filter effect with variable channels action command ID.
         *
         * @const
         */
        id: 1,

        /**
         * Apply color filter effect with variable channels action command
         * parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Apply color filter effect with variable channels action command red
           * channel variable parameter ID.
           *
           * @const
           */
          redChannelVariable: 0,

          /**
           * Apply color filter effect with variable channels action command red
           * channel variable source parameter ID.
           *
           * @const
           */
          redChannelVariableSource: 100,

          /**
           * Apply color filter effect with variable channels action command
           * green channel variable parameter ID.
           *
           * @const
           */
          greenChannelVariable: 1,

          /**
           * Apply color filter effect with variable channels action command
           * green channel variable source parameter ID.
           *
           * @const
           */
          greenChannelVariableSource: 101,

          /**
           * Apply color filter effect with variable channels action command
           * blue channel variable parameter ID.
           *
           * @const
           */
          blueChannelVariable: 2,

          /**
           * Apply color filter effect with variable channels action command
           * blue channel variable source parameter ID.
           *
           * @const
           */
          blueChannelVariableSource: 102,

          /**
           * Apply color filter effect with variable channels action command
           * alpha channel variable parameter ID.
           *
           * @const
           */
          alphaChannelVariable: 3,

          /**
           * Apply color filter effect with variable channels action command
           * alpha channel variable source parameter ID.
           *
           * @const
           */
          alphaChannelVariableSource: 103,

          /**
           * Apply color filter effect with variable channels action command
           * duration parameter ID.
           */
          duration: 4,

          /**
           * Apply color filter effect with variable channels action command
           * action target parameter.
           *
           * @const
           */
          actionTarget: {
            /**
             * Apply color filter effect with variable channels action command
             * action target parameter ID.
             *
             * @const
             */
            id: 5,

            /**
             * Apply color filter effect with variable channels action command
             * action target parameter custom parameter IDs.
             *
             * @const
             */
            parameterId: {
              /**
               * Apply color filter effect with variable channels action command
               * action target parameter object self custom parameter ID.
               *
               * @const
               */
              objectSelf: -2,

              /**
               * Apply color filter effect with variable channels action command
               * action target parameter parent object custom parameter ID.
               *
               * @const
               */
              parentObject: -7
            }
          }
        }
      },

      /**
       * Apply blink filter effect with variable interval action command.
       */
      applyBlinkFilterEffectWithVariableInterval: {
        /**
         * Apply blink filter effect with variable interval action command ID.
         *
         * @const
         */
        id: 2,

        /**
         * Apply blink filter effect with variable interval action command
         * parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Apply blink filter effect with variable interval action command
           * interval variable parameter ID.
           *
           * @const
           */
          intervalVariable: 0,

          /**
           * Apply blink filter effect with variable interval action command
           * interval variable source parameter ID.
           *
           * @const
           */
          intervalVariableSource: 100,

          /**
           * Apply blink filter effect with variable interval action command
           * action target parameter.
           *
           * @const
           */
          actionTarget: {
            /**
             * Apply blink filter effect with variable interval action command
             * action target parameter ID.
             *
             * @const
             */
            id: 1,

            /**
             * Apply blink filter effect with variable interval action command
             * action target parameter custom parameter IDs.
             *
             * @const
             */
            parameterId: {
              /**
               * Apply blink filter effect with variable interval action command
               * action target parameter object self custom parameter ID.
               *
               * @const
               */
              objectSelf: -2,

              /**
               * Apply blink filter effect with variable interval action command
               * action target parameter parent object custom parameter ID.
               *
               * @const
               */
              parentObject: -7
            }
          }
        }
      },

      /**
       * Apply basic filter effect with variable value and variable duration
       * action command.
       *
       * @const
       */
      applyBasicFilterEffectWithVariableValueAndVariableDuration: {
        /**
         * Apply basic filter effect with variable value and variable duration
         * action command ID.
         *
         * @const
         */
        id: 3,

        /**
         * Apply basic filter effect with variable value and variable duration
         * action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Apply basic filter effect with variable value and variable
           * duration action command filter effect parameter.
           *
           * @const
           */
          filterEffect: {
            /**
             * Apply basic filter effect with variable value and variable
             * duration action command filter effect parameter ID.
             *
             * @const
             */
            id: 0,

            /**
             * Apply basic filter effect with variable value and variable
             * duration action command filter effect parameter custom parameter
             * IDs.
             *
             * @const
             * @see {AgtkFilterEffectsValue}
             */
            parameterId: {
              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter noise custom
               * parameter ID.
               *
               * @const
               */
              noise: 0,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter mosaic custom
               * parameter ID.
               *
               * @const
               */
              mosaic: 1,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter monochrome
               * custom parameter ID.
               *
               * @const
               */
              monochrome: 2,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter sepia custom
               * parameter ID.
               *
               * @const
               */
              sepia: 3,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter invert custom
               * parameter ID.
               *
               * @const
               */
              invert: 4,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter blur custom
               * parameter ID.
               *
               * @const
               */
              blur: 5,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter chromatic
               * aberration custom parameter ID.
               *
               * @const
               */
              chromaticAberration: 6,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter darken custom
               * parameter ID.
               *
               * @const
               */
              darken: 7,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command filter effect parameter transparency
               * custom parameter ID.
               *
               * @const
               */
              transparency: 10
            }
          },
          /**
           * Apply basic filter effect with variable value and variable duration
           * action command value variable parameter ID.
           *
           * @const
           */
          valueVariable: 1,

          /**
           * Apply basic filter effect with variable value and variable duration
           * action command value variable source parameter ID.
           *
           * @const
           */
          valueVariableSource: 101,

          /**
           * Apply basic filter effect with variable value and variable duration
           * action command duration variable parameter ID.
           *
           * @const
           */
          durationVariable: 2,

          /**
           * Apply basic filter effect with variable value and variable duration
           * action command duration variable source parameter ID.
           *
           * @const
           */
          durationVariableSource: 102,

          /**
           * Apply basic filter effect with variable value and variable duration
           * action command action target parameter.
           *
           * @const
           */
          actionTarget: {
            /**
             * Apply basic filter effect with variable value and variable
             * duration action command action target parameter ID.
             *
             * @const
             */
            id: 3,

            /**
             * Apply basic filter effect with variable value and variable
             * duration action command action target parameter custom parameter
             * IDs.
             *
             * @const
             */
            parameterId: {
              /**
               * Apply basic filter effect with variable value and variable
               * duration action command action target parameter object self
               * custom parameter ID.
               *
               * @const
               */
              objectSelf: -2,

              /**
               * Apply basic filter effect with variable value and variable
               * duration action command action target parameter parent object
               * custom parameter ID.
               *
               * @const
               */
              parentObject: -7
            }
          }
        }
      },

      /**
       * Apply color filter effect with variable channels and variable duration
       * action command.
       */
      applyColorFilterEffectWithVariableChannelsAndVariableDuration: {
        /**
         * Apply color filter effect with variable channels and variable
         * duration action command ID.
         *
         * @const
         */
        id: 4,

        /**
         * Apply color filter effect with variable channels and variable
         * duration action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Apply color filter effect with variable channels and variable
           * duration action command red channel variable parameter ID.
           *
           * @const
           */
          redChannelVariable: 0,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command red channel variable source parameter ID.
           *
           * @const
           */
          redChannelVariableSource: 100,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command green channel variable parameter ID.
           *
           * @const
           */
          greenChannelVariable: 1,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command green channel variable source parameter ID.
           *
           * @const
           */
          greenChannelVariableSource: 101,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command blue channel variable parameter ID.
           *
           * @const
           */
          blueChannelVariable: 2,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command blue channel variable source parameter ID.
           *
           * @const
           */
          blueChannelVariableSource: 102,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command alpha channel variable parameter ID.
           *
           * @const
           */
          alphaChannelVariable: 3,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command alpha channel variable source parameter ID.
           *
           * @const
           */
          alphaChannelVariableSource: 103,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command duration variable parameter ID.
           */
          durationVariable: 4,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command duration variable source parameter ID.
           *
           * @const
           */
          durationVariableSource: 104,

          /**
           * Apply color filter effect with variable channels and variable
           * duration action command action target parameter.
           *
           * @const
           */
          actionTarget: {
            /**
             * Apply color filter effect with variable channels and variable
             * duration action command action target parameter ID.
             *
             * @const
             */
            id: 5,

            /**
             * Apply color filter effect with variable channels and variable
             * duration action command action target parameter custom parameter
             * IDs.
             *
             * @const
             */
            parameterId: {
              /**
               * Apply color filter effect with variable channels and variable
               * duration action command action target parameter object self
               * custom parameter ID.
               *
               * @const
               */
              objectSelf: -2,

              /**
               * Apply color filter effect with variable channels and variable
               * duration action command action target parameter parent object
               * custom parameter ID.
               *
               * @const
               */
              parentObject: -7
            }
          }
        }
      }
    },
    /**
     * Plugin action commands.
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     * @const
     * @private
     */
    actionCommands = [
      // Apply basic filter effect with variable value.
      {
        id: actionCommandId.applyBasicFilterEffectWithVariableValue.id,
        name: 'loca(ACTION_COMMAND_NAME_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE)',
        parameter: [
          // Action target parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.actionTarget.id,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_ACTION_TARGET)',
            type: 'CustomId',
            defaultValue:
              actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.actionTarget.parameterId.objectSelf,
            customParam: [
              // Object self.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.actionTarget.parameterId
                  .objectSelf,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF)'
              },
              // Parent object.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.actionTarget.parameterId
                  .parentObject,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT)'
              }
            ]
          },
          { id: -1, name: '', type: 'Embedded' },
          // Filter effect parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT)',
            type: 'CustomId',
            defaultValue:
              actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId.darken,
            customParam: [
              // Noise.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId.noise,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_NOISE)'
              },
              // Mosaic.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId.mosaic,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MOSAIC)'
              },
              // Monochrome.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId
                  .monochrome,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MONOCHROME)'
              },
              // Sepia.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId.sepia,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_SEPIA)'
              },
              // Invert.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId.invert,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_INVERT)'
              },
              // Blur.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId.blur,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_BLUR)'
              },
              // Chromatic aberration.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId
                  .chromaticAberration,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_CHROMATIC_ABERRATION)'
              },
              // Darken.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId.darken,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_DARKEN)'
              },
              // Transparency.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.parameterId
                  .transparency,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_TRANSPARENCY)'
              }
            ]
          },
          { id: -1, name: '', type: 'Embedded' },
          // Value variable source parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.valueVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_VALUE_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Value variable parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.valueVariable,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_VALUE_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.valueVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Duration parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.duration,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_PARAMETER_NAME_DURATION)',
            type: 'Number',
            decimals: kDurationDecimals,
            minimumValue: kMinDuration,
            defaultValue: kDefaultDuration
          }
        ]
      },
      // Apply color filter effect with variable channels.
      {
        id: actionCommandId.applyColorFilterEffectWithVariableChannels.id,
        name: 'loca(ACTION_COMMAND_NAME_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS)',
        parameter: [
          // Action target parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.actionTarget.id,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ACTION_TARGET)',
            type: 'CustomId',
            defaultValue:
              actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.actionTarget.parameterId
                .objectSelf,
            customParam: [
              // Object self.
              {
                id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.actionTarget.parameterId
                  .objectSelf,
                name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF)'
              },
              // Parent object.
              {
                id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.actionTarget.parameterId
                  .parentObject,
                name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT)'
              }
            ]
          },
          { id: -1, name: '', type: 'Embedded' },
          // Red channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.redChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_RED_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Red channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.redChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_RED_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.redChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Green channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.greenChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Green channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.greenChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.greenChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Blue channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.blueChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Blue channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.blueChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.blueChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Alpha channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.alphaChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Alpha channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.alphaChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.alphaChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Duration parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.duration,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_PARAMETER_NAME_DURATION)',
            type: 'Number',
            decimals: kDurationDecimals,
            minimumValue: kMinDuration,
            defaultValue: kDefaultDuration
          }
        ]
      },
      // Apply blink filter effect with variable interval.
      {
        id: actionCommandId.applyBlinkFilterEffectWithVariableInterval.id,
        name: 'loca(ACTION_COMMAND_NAME_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL)',
        parameter: [
          // Action target parameter.
          {
            id: actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.actionTarget.id,
            name: 'loca(ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_ACTION_TARGET)',
            type: 'CustomId',
            defaultValue:
              actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.actionTarget.parameterId
                .objectSelf,
            customParam: [
              // Object self.
              {
                id: actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.actionTarget.parameterId
                  .objectSelf,
                name: 'loca(ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF)'
              },
              // Parent object.
              {
                id: actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.actionTarget.parameterId
                  .parentObject,
                name: 'loca(ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT)'
              }
            ]
          },
          { id: -1, name: '', type: 'Embedded' },
          // Interval variable source parameter.
          {
            id: actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.intervalVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_INTERVAL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Interval variable parameter.
          {
            id: actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.intervalVariable,
            name: 'loca(ACTION_COMMAND_APPLY_BLINK_FILTER_EFFECT_WITH_VARIABLE_INTERVAL_PARAMETER_NAME_INTERVAL_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.intervalVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          }
        ]
      },
      // Apply basic filter effect with variable value and variable duration.
      {
        id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.id,
        name: 'loca(ACTION_COMMAND_NAME_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION)',
        description:
          'loca(ACTION_COMMAND_DESCRIPTION_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION)',
        parameter: [
          // Action target parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.actionTarget.id,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET)',
            type: 'CustomId',
            defaultValue:
              actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.actionTarget
                .parameterId.objectSelf,
            customParam: [
              // Object self.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.actionTarget
                  .parameterId.objectSelf,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF)'
              },
              // Parent object.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.actionTarget
                  .parameterId.parentObject,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT)'
              }
            ]
          },
          { id: -1, name: '', type: 'Embedded' },
          // Filter effect parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT)',
            type: 'CustomId',
            defaultValue:
              actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                .parameterId.darken,
            customParam: [
              // Noise.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.noise,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_NOISE)'
              },
              // Mosaic.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.mosaic,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MOSAIC)'
              },
              // Monochrome.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.monochrome,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_MONOCHROME)'
              },
              // Sepia.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.sepia,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_SEPIA)'
              },
              // Invert.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.invert,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_INVERT)'
              },
              // Blur.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.blur,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_BLUR)'
              },
              // Chromatic aberration.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.chromaticAberration,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_CHROMATIC_ABERRATION)'
              },
              // Darken.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.darken,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_DARKEN)'
              },
              // Transparency.
              {
                id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect
                  .parameterId.transparency,
                name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_FILTER_EFFECT_CUSTOM_PARAMETER_NAME_TRANSPARENCY)'
              }
            ]
          },
          { id: -1, name: '', type: 'Embedded' },
          // Value variable source parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId
              .valueVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_VALUE_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Value variable parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.valueVariable,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_VALUE_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId
                .valueVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Duration variable source parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId
              .durationVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Duration variable parameter.
          {
            id: actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.durationVariable,
            name: 'loca(ACTION_COMMAND_APPLY_BASIC_FILTER_EFFECT_WITH_VARIABLE_VALUE_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId
                .durationVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          }
        ]
      },
      // Apply color filter effect with variable channels and variable duration.
      {
        id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.id,
        name: 'loca(ACTION_COMMAND_NAME_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION)',
        description:
          'loca(ACTION_COMMAND_DESCRIPTION_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION)',
        parameter: [
          // Action target parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId.actionTarget
              .id,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET)',
            type: 'CustomId',
            defaultValue:
              actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId.actionTarget
                .parameterId.objectSelf,
            customParam: [
              // Object self.
              {
                id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .actionTarget.parameterId.objectSelf,
                name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_OBJECT_SELF)'
              },
              // Parent object.
              {
                id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .actionTarget.parameterId.parentObject,
                name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ACTION_TARGET_CUSTOM_PARAMETER_NAME_PARENT_OBJECT)'
              }
            ]
          },
          { id: -1, name: '', type: 'Embedded' },
          // Red channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .redChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_RED_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Red channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .redChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_RED_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                .redChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Green channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .greenChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Green channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .greenChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_GREEN_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                .greenChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Blue channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .blueChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Blue channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .blueChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_BLUE_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                .blueChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Alpha channel variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .alphaChannelVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Alpha channel variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .alphaChannelVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_ALPHA_CHANNEL_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                .alphaChannelVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          { id: -1, name: '', type: 'Embedded' },
          // Duration variable source parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .durationVariableSource,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Duration variable parameter.
          {
            id: actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
              .durationVariable,
            name: 'loca(ACTION_COMMAND_APPLY_COLOR_FILTER_EFFECT_WITH_VARIABLE_CHANNELS_AND_VARIABLE_DURATION_PARAMETER_NAME_DURATION_VARIABLE)',
            type: 'VariableId',
            referenceId:
              actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                .durationVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          }
        ]
      }
    ],
    /**
     * Assigned our localized action commands.
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     * @const
     * @private
     */
    localizedActionCommands,
    /**
     * Test if plugin is currently running in the editor.
     *
     * @returns {boolean} `true` when in editor, `false` otherwise.
     * @private
     */
    inEditor = function () {
      return !Agtk || typeof Agtk.log !== 'function';
    },
    /**
     * Normalize specified parameter values into a `<parameter ID>,<value>`
     * mapping. Missing parameter values will be assigned corresponding values
     * from the provided defaults, if available.
     *
     * @param paramValue Parameter values to normalize.
     * @param defaults Default parameter values available.
     * @returns Normalized `<parameter ID>,<value>` mapping.
     * @private
     */
    normalizeParameters = function (
      /** @type {import("pgmmv/agtk/plugins/plugin").AgtkParameterValue[]} */
      paramValue,
      /** @type {import("pgmmv/agtk/plugins/plugin").AgtkParameterValue[]} */
      defaults
    ) {
      /** @type {Record<number,import("type-fest").JsonValue>} */
      var normalized = {},
        len = defaults.length,
        i = 0,
        /** @type {import("pgmmv/agtk/plugins/plugin").AgtkParameterValue} */
        p;

      for (; i < len; ++i) {
        p = defaults[i];
        normalized[p.id] = p.type === 'Json' ? JSON.stringify(p.defaultValue) : p.defaultValue;
      }

      len = paramValue.length;

      for (i = 0; i < len; ++i) {
        p = paramValue[i];
        normalized[p.id] = p.value;
      }

      return normalized;
    },
    /**
     * Log plugin warning message.
     *
     * @param msg The warning message.
     */
    logWarning = function (
      /** @type {string} */
      msg
    ) {
      if (inEditor()) {
        return;
      }
      Agtk.log('[' + locaManager.get('PLUGIN_NAME') + '] warning: ' + msg);
    },
    /**
     * Resolve the variable source object to either the Project Common
     * identifier (`0`) or an appropriate object instance.
     *
     * @param variableObjectId Suitable values are:
     *   - 0: Project Common
     *   - -2: Self Object
     *   - -7: Parent Object
     * @returns {
     *   import("pgmmv/agtk/object-instances/object-instance").AgtkObjectInstance |
     *   import("pgmmv/agtk/constants/switch-variable-objects").AgtkSwitchVariableObjects['ProjectCommon'] |
     *   import("pgmmv/agtk/constants/action-commands").AgtkActionCommands['UnsetObject']
     * } Resolved switch/variable source, or `-1` when not resolved.
     * @private
     */
    resolveVariableObject = function (
      /** @type {number} variableObjectId */
      variableObjectId,
      /** @type {number} instanceId */
      instanceId
    ) {
      var instance = Agtk.objectInstances.get(instanceId),
        pId;

      switch (variableObjectId) {
        case Agtk.constants.switchVariableObjects.ProjectCommon:
          return variableObjectId;
        case Agtk.constants.switchVariableObjects.SelfObject:
          return instance;
        case Agtk.constants.switchVariableObjects.ParentObject:
          pId = instance.variables.get(Agtk.constants.objects.variables.ParentObjectInstanceIDId).getValue();
          if (pId !== Agtk.constants.actionCommands.UnsetObject) {
            return Agtk.objectInstances.get(pId);
          }
        // eslint-disable-next-line no-fallthrough
        default:
          break;
      }

      return Agtk.constants.actionCommands.UnsetObject;
    },
    /**
     * Resolve variable value using specified source and variable ID.
     *
     * @param variableSource Either the Project Common identifier (`0`) or an
     * appropriate object instance.
     * @param variableId The variable ID.
     * @returns {number}
     */
    resolveVariableValue = function (
      /** @type {import("pgmmv/agtk/object-instances/object-instance").AgtkObjectInstance | 0 } */
      variableSource,
      /** @type {number} */
      variableId
    ) {
      return (
        variableSource === Agtk.constants.switchVariableObjects.ProjectCommon
          ? Agtk.variables.get(variableId)
          : variableSource.variables.get(variableId)
      ).getValue();
    },
    /**
     * Execute apply basic filter effect with variable value action command.
     *
     * @param filterEffect Desired filter effect. Accepts the following:
     *   - 0: noise
     *   - 1: mosaic
     *   - 2: monochrome
     *   - 3: sepia
     *   - 4: invert
     *   - 5: blur
     *   - 6: chromatic aberration
     *   - 7: darken
     *   - 10: transparency
     * @param valueVariableSourceId Project Common identifier or object ID (Self
     * or Parent).
     * @param valueVariableId Variable ID.
     * @param duration Duration in seconds.
     * @param instanceId ID of object instance executing this action command.
     * @param actionTarget Object ID (Self or Parent).
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execApplyBasicFilterEffectWithVariableValue = function (
      /** @type {number} */
      filterEffect,
      /** @type {number} */
      valueVariableSourceId,
      /** @type {number} */
      valueVariableId,
      /** @type {number} */
      duration,
      /** @type {number} */
      instanceId,
      /** @type {number} */
      actionTarget
    ) {
      var basicEffects = [
          Agtk.constants.filterEffects.EffectNoise,
          Agtk.constants.filterEffects.EffectMosaic,
          Agtk.constants.filterEffects.EffectMonochrome,
          Agtk.constants.filterEffects.EffectSepia,
          Agtk.constants.filterEffects.EffectNegaPosiReverse,
          Agtk.constants.filterEffects.EffectDefocus,
          Agtk.constants.filterEffects.EffectChromaticAberration,
          Agtk.constants.filterEffects.EffectDarkness,
          Agtk.constants.filterEffects.EffectTransparency
        ],
        valueSource = resolveVariableObject(valueVariableSourceId, instanceId),
        actionTargetInstance = resolveVariableObject(
          actionTarget ? actionTarget : Agtk.constants.actionCommands.SelfObject,
          instanceId
        ),
        /** @type {import("pgmmv/agtk/object-instances/object-instance/action-command-config").AgtkObjectFilterEffect} */
        objectFilterEffect = {},
        /** @type {string} */
        key;

      if (!actionTargetInstance || actionTargetInstance === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('apply basic filter effect with variable value action command executed with invalid action target');
      } else if (valueSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply basic filter effect with variable value action command executed with unset value variable source'
        );
      } else if (valueVariableId < 1) {
        logWarning(
          'apply basic filter effect with variable value action command executed with invalid value variable ID'
        );
      } else if (!~basicEffects.indexOf(filterEffect)) {
        logWarning(
          'apply basic filter effect with variable value action command executed with invalid filter effect ID'
        );
      } else {
        objectFilterEffect.effectType = filterEffect;
        objectFilterEffect.duration300 = kDuration300 * duration;

        switch (filterEffect) {
          case Agtk.constants.filterEffects.EffectNoise:
            key = 'noise';
            break;
          case Agtk.constants.filterEffects.EffectMosaic:
            key = 'mosaic';
            break;
          case Agtk.constants.filterEffects.EffectMonochrome:
            key = 'monochrome';
            break;
          case Agtk.constants.filterEffects.EffectSepia:
            key = 'sepia';
            break;
          case Agtk.constants.filterEffects.EffectNegaPosiReverse:
            key = 'negaPosiReverse';
            break;
          case Agtk.constants.filterEffects.EffectDefocus:
            key = 'defocus';
            break;
          case Agtk.constants.filterEffects.EffectChromaticAberration:
            key = 'chromaticAberration';
            break;
          case Agtk.constants.filterEffects.EffectTransparency:
            key = 'transparency';
            break;
          case Agtk.constants.filterEffects.EffectDarkness:
          default:
            key = 'darkness';
            break;
        }

        objectFilterEffect[key] = cc.clampf(
          resolveVariableValue(valueSource, valueVariableId),
          kMinBasicFilterValue,
          kMaxBasicFilterValue
        );

        actionTargetInstance.execCommandObjectFilterEffect(objectFilterEffect);
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute apply color filter effect with variable channels action command.
     *
     * @param redChannelVariableSourceId Project Common identifier or object ID
     * (Self or Parent).
     * @param redChannelVariableId Variable ID.
     * @param greenChannelVariableSourceId Project Common identifier or object
     * ID (Self or Parent).
     * @param greenChannelVariableId Variable ID.
     * @param blueChannelVariableSourceId Project Common identifier or object ID
     * (Self or Parent).
     * @param blueChannelVariableId Variable ID.
     * @param alphaChannelVariableSourceId Project Common identifier or object
     * ID (Self or Parent).
     * @param alphaChannelVariableId Variable ID.
     * @param duration Duration in seconds.
     * @param instanceId ID of object instance executing this action command.
     * @param actionTarget Object ID (Self or Parent).
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execApplyColorFilterEffectWithVariableChannels = function (
      /** @type {number} */
      redChannelVariableSourceId,
      /** @type {number} */
      redChannelVariableId,
      /** @type {number} */
      greenChannelVariableSourceId,
      /** @type {number} */
      greenChannelVariableId,
      /** @type {number} */
      blueChannelVariableSourceId,
      /** @type {number} */
      blueChannelVariableId,
      /** @type {number} */
      alphaChannelVariableSourceId,
      /** @type {number} */
      alphaChannelVariableId,
      /** @type {number} */
      duration,
      /** @type {number} */
      instanceId,
      /** @type {number} */
      actionTarget
    ) {
      var redChannelSource = resolveVariableObject(redChannelVariableSourceId, instanceId),
        greenChannelSource = resolveVariableObject(greenChannelVariableSourceId, instanceId),
        blueChannelSource = resolveVariableObject(blueChannelVariableSourceId, instanceId),
        alphaChannelSource = resolveVariableObject(alphaChannelVariableSourceId, instanceId),
        actionTargetInstance = resolveVariableObject(
          actionTarget ? actionTarget : Agtk.constants.actionCommands.SelfObject,
          instanceId
        );

      if (!actionTargetInstance || actionTargetInstance === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels action command executed with invalid action target'
        );
      } else if (redChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels action command executed with unset red channel variable source'
        );
      } else if (greenChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels action command executed with unset green channel variable source'
        );
      } else if (blueChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels action command executed with unset blue channel variable source'
        );
      } else if (alphaChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels action command executed with unset alpha channel variable source'
        );
      } else if (redChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels action command executed with invalid red channel variable ID'
        );
      } else if (greenChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels action command executed with invalid green channel variable ID'
        );
      } else if (blueChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels action command executed with invalid blue channel variable ID'
        );
      } else if (alphaChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels action command executed with invalid alpha channel variable ID'
        );
      } else {
        actionTargetInstance.execCommandObjectFilterEffect({
          effectType: Agtk.constants.filterEffects.EffectFillColor,
          fillR: cc.clampf(resolveVariableValue(redChannelSource, redChannelVariableId), kMinRGBAValue, kMaxRGBAValue),
          fillG: cc.clampf(
            resolveVariableValue(greenChannelSource, greenChannelVariableId),
            kMinRGBAValue,
            kMaxRGBAValue
          ),
          fillB: cc.clampf(
            resolveVariableValue(blueChannelSource, blueChannelVariableId),
            kMinRGBAValue,
            kMaxRGBAValue
          ),
          fillA: cc.clampf(
            resolveVariableValue(alphaChannelSource, alphaChannelVariableId),
            kMinRGBAValue,
            kMaxRGBAValue
          ),
          duration300: kDuration300 * duration
        });
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute apply blink filter effect with variable interval action command.
     *
     * @param intervalVariableSourceId Project Common identifier or object ID
     * (Self or Parent).
     * @param intervalVariableId Variable ID.
     * @param instanceId ID of object instance executing this action command.
     * @param actionTarget Object ID (Self or Parent).
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execApplyBlinkFilterEffectWithVariableInterval = function (
      /** @type {number} */
      intervalVariableSourceId,
      /** @type {number} */
      intervalVariableId,
      /** @type {number} */
      instanceId,
      /** @type {number} */
      actionTarget
    ) {
      var intervalSource = resolveVariableObject(intervalVariableSourceId, instanceId),
        actionTargetInstance = resolveVariableObject(
          actionTarget ? actionTarget : Agtk.constants.actionCommands.SelfObject,
          instanceId
        );

      if (!actionTargetInstance || actionTargetInstance === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply blink filter effect with variable interval action command executed with invalid action target'
        );
      } else if (intervalSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply blink filter effect with variable interval action command executed with unset interval variable source'
        );
      } else if (intervalVariableId < 1) {
        logWarning(
          'apply blink filter effect with variable interval action command executed with invalid interval variable ID'
        );
      } else {
        actionTargetInstance.execCommandObjectFilterEffect({
          effectType: Agtk.constants.filterEffects.EffectBlink,
          blinkInterval300:
            kDuration300 *
            cc.clampf(resolveVariableValue(intervalSource, intervalVariableId), kMinBlinkInterval, Infinity)
        });
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute apply basic filter effect with variable value and variable
     * duration action command.
     *
     * @param filterEffect Desired filter effect. Accepts the following:
     *   - 0: noise
     *   - 1: mosaic
     *   - 2: monochrome
     *   - 3: sepia
     *   - 4: invert
     *   - 5: blur
     *   - 6: chromatic aberration
     *   - 7: darken
     *   - 10: transparency
     * @param valueVariableSourceId Project Common identifier or object ID (Self
     * or Parent).
     * @param valueVariableId Variable ID.
     * @param durationVariableSourceId Project Common identifier or object ID
     * (Self or Parent).
     * @param durationVariableId Variable ID.
     * @param instanceId ID of object instance executing this action command.
     * @param actionTarget Object ID (Self or Parent).
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execApplyBasicFilterEffectWithVariableValueAndVariableDuration = function (
      /** @type {number} */
      filterEffect,
      /** @type {number} */
      valueVariableSourceId,
      /** @type {number} */
      valueVariableId,
      /** @type {number} */
      durationVariableSourceId,
      /** @type {number} */
      durationVariableId,
      /** @type {number} */
      instanceId,
      /** @type {number} */
      actionTarget
    ) {
      var basicEffects = [
          Agtk.constants.filterEffects.EffectNoise,
          Agtk.constants.filterEffects.EffectMosaic,
          Agtk.constants.filterEffects.EffectMonochrome,
          Agtk.constants.filterEffects.EffectSepia,
          Agtk.constants.filterEffects.EffectNegaPosiReverse,
          Agtk.constants.filterEffects.EffectDefocus,
          Agtk.constants.filterEffects.EffectChromaticAberration,
          Agtk.constants.filterEffects.EffectDarkness,
          Agtk.constants.filterEffects.EffectTransparency
        ],
        valueSource = resolveVariableObject(valueVariableSourceId, instanceId),
        durationSource = resolveVariableObject(durationVariableSourceId, instanceId),
        actionTargetInstance = resolveVariableObject(
          actionTarget ? actionTarget : Agtk.constants.actionCommands.SelfObject,
          instanceId
        ),
        /** @type {import("pgmmv/agtk/object-instances/object-instance/action-command-config").AgtkObjectFilterEffect} */
        objectFilterEffect = {},
        /** @type {string} */
        key;

      if (!actionTargetInstance || actionTargetInstance === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply basic filter effect with variable value and variable duration action command executed with invalid action target'
        );
      } else if (valueSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply basic filter effect with variable value and variable duration action command executed with unset value variable source'
        );
      } else if (durationSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply basic filter effect with variable value and variable duration action command executed with unset duration variable source'
        );
      } else if (valueVariableId < 1) {
        logWarning(
          'apply basic filter effect with variable value and variable duration action command executed with invalid value variable ID'
        );
      } else if (durationVariableId < 1) {
        logWarning(
          'apply basic filter effect with variable value and variable duration action command executed with invalid duration variable ID'
        );
      } else if (!~basicEffects.indexOf(filterEffect)) {
        logWarning(
          'apply basic filter effect with variable value and variable duration action command executed with invalid filter effect ID'
        );
      } else {
        objectFilterEffect.effectType = filterEffect;
        objectFilterEffect.duration300 =
          kDuration300 * cc.clampf(resolveVariableValue(durationSource, durationVariableId), kMinDuration, Infinity);

        switch (filterEffect) {
          case Agtk.constants.filterEffects.EffectNoise:
            key = 'noise';
            break;
          case Agtk.constants.filterEffects.EffectMosaic:
            key = 'mosaic';
            break;
          case Agtk.constants.filterEffects.EffectMonochrome:
            key = 'monochrome';
            break;
          case Agtk.constants.filterEffects.EffectSepia:
            key = 'sepia';
            break;
          case Agtk.constants.filterEffects.EffectNegaPosiReverse:
            key = 'negaPosiReverse';
            break;
          case Agtk.constants.filterEffects.EffectDefocus:
            key = 'defocus';
            break;
          case Agtk.constants.filterEffects.EffectChromaticAberration:
            key = 'chromaticAberration';
            break;
          case Agtk.constants.filterEffects.EffectTransparency:
            key = 'transparency';
            break;
          case Agtk.constants.filterEffects.EffectDarkness:
          default:
            key = 'darkness';
            break;
        }

        objectFilterEffect[key] = cc.clampf(
          resolveVariableValue(valueSource, valueVariableId),
          kMinBasicFilterValue,
          kMaxBasicFilterValue
        );

        actionTargetInstance.execCommandObjectFilterEffect(objectFilterEffect);
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute apply color filter effect with variable channels and variable
     * duration action command.
     *
     * @param redChannelVariableSourceId Project Common identifier or object ID
     * (Self or Parent).
     * @param redChannelVariableId Variable ID.
     * @param greenChannelVariableSourceId Project Common identifier or object
     * ID (Self or Parent).
     * @param greenChannelVariableId Variable ID.
     * @param blueChannelVariableSourceId Project Common identifier or object ID
     * (Self or Parent).
     * @param blueChannelVariableId Variable ID.
     * @param alphaChannelVariableSourceId Project Common identifier or object
     * ID (Self or Parent).
     * @param alphaChannelVariableId Variable ID.
     * @param durationVariableSourceId Project Common identifier or object ID
     * (Self or Parent).
     * @param durationVariableId Variable ID.
     * @param instanceId ID of object instance executing this action command.
     * @param actionTarget Object ID (Self or Parent).
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execApplyColorFilterEffectWithVariableChannelsAndVariableDuration = function (
      /** @type {number} */
      redChannelVariableSourceId,
      /** @type {number} */
      redChannelVariableId,
      /** @type {number} */
      greenChannelVariableSourceId,
      /** @type {number} */
      greenChannelVariableId,
      /** @type {number} */
      blueChannelVariableSourceId,
      /** @type {number} */
      blueChannelVariableId,
      /** @type {number} */
      alphaChannelVariableSourceId,
      /** @type {number} */
      alphaChannelVariableId,
      /** @type {number} */
      durationVariableSourceId,
      /** @type {number} */
      durationVariableId,
      /** @type {number} */
      instanceId,
      /** @type {number} */
      actionTarget
    ) {
      var redChannelSource = resolveVariableObject(redChannelVariableSourceId, instanceId),
        greenChannelSource = resolveVariableObject(greenChannelVariableSourceId, instanceId),
        blueChannelSource = resolveVariableObject(blueChannelVariableSourceId, instanceId),
        alphaChannelSource = resolveVariableObject(alphaChannelVariableSourceId, instanceId),
        durationSource = resolveVariableObject(durationVariableSourceId, instanceId),
        actionTargetInstance = resolveVariableObject(
          actionTarget ? actionTarget : Agtk.constants.actionCommands.SelfObject,
          instanceId
        );

      if (!actionTargetInstance || actionTargetInstance === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with invalid action target'
        );
      } else if (redChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with unset red channel variable source'
        );
      } else if (greenChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with unset green channel variable source'
        );
      } else if (blueChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with unset blue channel variable source'
        );
      } else if (alphaChannelSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with unset alpha channel variable source'
        );
      } else if (durationSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with unset duration variable source'
        );
      } else if (redChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with invalid red channel variable ID'
        );
      } else if (greenChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with invalid green channel variable ID'
        );
      } else if (blueChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with invalid blue channel variable ID'
        );
      } else if (alphaChannelVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with invalid alpha channel variable ID'
        );
      } else if (durationVariableId < 1) {
        logWarning(
          'apply color filter effect with variable channels and variable duration action command executed with invalid duration variable ID'
        );
      } else {
        actionTargetInstance.execCommandObjectFilterEffect({
          effectType: Agtk.constants.filterEffects.EffectFillColor,
          fillR: cc.clampf(resolveVariableValue(redChannelSource, redChannelVariableId), kMinRGBAValue, kMaxRGBAValue),
          fillG: cc.clampf(
            resolveVariableValue(greenChannelSource, greenChannelVariableId),
            kMinRGBAValue,
            kMaxRGBAValue
          ),
          fillB: cc.clampf(
            resolveVariableValue(blueChannelSource, blueChannelVariableId),
            kMinRGBAValue,
            kMaxRGBAValue
          ),
          fillA: cc.clampf(
            resolveVariableValue(alphaChannelSource, alphaChannelVariableId),
            kMinRGBAValue,
            kMaxRGBAValue
          ),
          duration300:
            kDuration300 * cc.clampf(resolveVariableValue(durationSource, durationVariableId), kMinDuration, Infinity)
        });
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Plugin API
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkPlugin}
     * @public
     */
    self = {
      setLocale: function (locale) {
        locaManager.setLocale(locale);
      },

      getInfo: function (category) {
        switch (category) {
          case 'name':
            return locaManager.get('PLUGIN_NAME');
          case 'description':
            return locaManager.get('PLUGIN_DESCRIPTION');
          case 'author':
            return locaManager.get('PLUGIN_AUTHOR');
          case 'help':
            return locaManager.get('PLUGIN_HELP');
          case 'parameter':
            return [];
          case 'internal':
            return null;
          case 'actionCommand':
            return localizedActionCommands
              ? localizedActionCommands
              : (localizedActionCommands = locaManager.processCommandsOrConditions(actionCommands));
          case 'linkCondition':
            return [];
          case 'autoTile':
          default:
            break;
        }
      },

      initialize: function () {
        if (inEditor()) {
          return;
        }

        if (!window[kVendorGlobalKey]) {
          window[kVendorGlobalKey] = {};
        }

        window[kVendorGlobalKey][kPluginVendorKey] = {
          execApplyBasicFilterEffectWithVariableValue: function (c) {
            return execApplyBasicFilterEffectWithVariableValue(
              c.filterEffect,
              c.valueVariableSourceId,
              c.valueVariableId,
              c.duration,
              c.instanceId,
              c.actionTarget
            );
          },

          execApplyBasicFilterEffectWithVariableValueAndVariableDuration: function (c) {
            return execApplyBasicFilterEffectWithVariableValueAndVariableDuration(
              c.filterEffect,
              c.valueVariableSourceId,
              c.valueVariableId,
              c.durationVariableSourceId,
              c.durationVariableId,
              c.instanceId,
              c.actionTarget
            );
          },

          execApplyBlinkFilterEffectWithVariableInterval: function (c) {
            return execApplyBlinkFilterEffectWithVariableInterval(
              c.intervalVariableSourceId,
              c.intervalVariableId,
              c.instanceId,
              c.actionTarget
            );
          },

          execApplyColorFilterEffectWithVariableChannels: function (c) {
            return execApplyColorFilterEffectWithVariableChannels(
              c.redChannelVariableSourceId,
              c.redChannelVariableId,
              c.greenChannelVariableSourceId,
              c.greenChannelVariableId,
              c.blueChannelVariableSourceId,
              c.blueChannelVariableId,
              c.alphaChannelVariableSourceId,
              c.alphaChannelVariableId,
              c.duration,
              c.instanceId,
              c.actionTarget
            );
          },

          execApplyColorFilterEffectWithVariableChannelsAndVariableDuration: function (c) {
            return execApplyColorFilterEffectWithVariableChannelsAndVariableDuration(
              c.redChannelVariableSourceId,
              c.redChannelVariableId,
              c.greenChannelVariableSourceId,
              c.greenChannelVariableId,
              c.blueChannelVariableSourceId,
              c.blueChannelVariableId,
              c.alphaChannelVariableSourceId,
              c.alphaChannelVariableId,
              c.durationVariableSourceId,
              c.durationVariableId,
              c.instanceId,
              c.actionTarget
            );
          }
        };
      },

      finalize: function () {},

      setParamValue: function () {},

      setInternal: function () {},

      call: function () {},

      execActionCommand: function (actionCommandIndex, parameter, objectId, instanceId) {
        /**
         * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand}
         */
        var actionCommand,
          /** @type {Record<number,import("type-fest").JsonValue>} */
          np;

        actionCommand = self.getInfo('actionCommand')[actionCommandIndex];
        np = normalizeParameters(parameter, actionCommand.parameter);

        switch (actionCommand.id) {
          case actionCommandId.applyBasicFilterEffectWithVariableValue.id:
            return execApplyBasicFilterEffectWithVariableValue(
              np[actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.filterEffect.id],
              np[actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.valueVariableSource],
              np[actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.valueVariable],
              np[actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.duration],
              instanceId,
              np[actionCommandId.applyBasicFilterEffectWithVariableValue.parameterId.actionTarget.id]
            );

          case actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.id:
            return execApplyBasicFilterEffectWithVariableValueAndVariableDuration(
              np[
                actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.filterEffect.id
              ],
              np[
                actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId
                  .valueVariableSource
              ],
              np[actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.valueVariable],
              np[
                actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId
                  .durationVariableSource
              ],
              np[
                actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.durationVariable
              ],
              instanceId,
              np[actionCommandId.applyBasicFilterEffectWithVariableValueAndVariableDuration.parameterId.actionTarget.id]
            );

          case actionCommandId.applyBlinkFilterEffectWithVariableInterval.id:
            return execApplyBlinkFilterEffectWithVariableInterval(
              np[actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.intervalVariableSource],
              np[actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.intervalVariable],
              instanceId,
              np[actionCommandId.applyBlinkFilterEffectWithVariableInterval.parameterId.actionTarget.id]
            );

          case actionCommandId.applyColorFilterEffectWithVariableChannels.id:
            return execApplyColorFilterEffectWithVariableChannels(
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.redChannelVariableSource],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.redChannelVariable],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.greenChannelVariableSource],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.greenChannelVariable],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.blueChannelVariableSource],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.blueChannelVariable],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.alphaChannelVariableSource],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.alphaChannelVariable],
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.duration],
              instanceId,
              np[actionCommandId.applyColorFilterEffectWithVariableChannels.parameterId.actionTarget.id]
            );

          case actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.id:
            return execApplyColorFilterEffectWithVariableChannelsAndVariableDuration(
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .redChannelVariableSource
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .redChannelVariable
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .greenChannelVariableSource
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .greenChannelVariable
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .blueChannelVariableSource
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .blueChannelVariable
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .alphaChannelVariableSource
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .alphaChannelVariable
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .durationVariableSource
              ],
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId
                  .durationVariable
              ],
              instanceId,
              np[
                actionCommandId.applyColorFilterEffectWithVariableChannelsAndVariableDuration.parameterId.actionTarget
                  .id
              ]
            );

          default:
            break;
        }

        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
      }
    };

  // Plugin is ready!
  return self;
})();
