/**
 * @file PGMMV plugin that provides a global variable for your scripts.
 * @author kidthales <kidthales@agogpixel.com>
 * @version 1.0.1
 * @license MIT
 */
(function () {
  /**
   * Default global variable name.
   *
   * @const
   * @private
   */
  var kDefaultGlobalVariableName = 'MyGlobal',
    /**
     * Default global variable value.
     *
     * @const
     * @private
     */
    kDefaultGlobalVariableValue = {},
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
            PLUGIN_NAME: 'Global Variable Plugin',

            /** Required. */
            PLUGIN_DESCRIPTION: 'Provides a global variable for your scripts.',

            /** Required. */
            PLUGIN_AUTHOR: 'kidthales <kidthales@agogpixel.com>',

            /** Required. */
            PLUGIN_HELP:
              'Provides a global variable for your scripts.\n\nParameters:\n  - Global Variable Name. Required. Must be a valid JavaScript identifier.\n    Default: ' +
              kDefaultGlobalVariableName +
              '\n  - Global Variable Value. Required. Must be a valid JSON value.\n    Default: ' +
              JSON.stringify(kDefaultGlobalVariableValue),

            PARAMETER_NAME_GLOBAL_VARIABLE_NAME: 'Global Variable Name!:',
            PARAMETER_DEFAULT_VALUE_GLOBAL_VARIABLE_NAME: kDefaultGlobalVariableName,
            PARAMETER_NAME_GLOBAL_VARIABLE_VALUE: 'Global Variable Value!:'
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
              j = 0,
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

                  for (; j < cpLen; ++j) {
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
          }
        };

      // Localization manager is ready!
      return self;
    })(),
    /**
     * Plugin parameter IDs. So we don't use 'magic values' throughout the code.
     *
     * @const
     * @private
     */
    parameterId = {
      /**
       * Global variable name plugin parameter ID.
       *
       * @const
       */
      globalVariableName: 0,

      /**
       * Global variable value plugin parameter ID.
       *
       * @const
       */
      globalVariableValue: 1
    },
    /**
     * Plugin parameters.
     *
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     * @const
     * @private
     */
    parameters = [
      // Global variable name parameter.
      {
        id: parameterId.globalVariableName,
        name: 'loca(PARAMETER_NAME_GLOBAL_VARIABLE_NAME)',
        type: 'String',
        defaultValue: 'loca(PARAMETER_DEFAULT_VALUE_GLOBAL_VARIABLE_NAME)'
      },
      // Global variable value parameter.
      {
        id: parameterId.globalVariableValue,
        name: 'loca(PARAMETER_NAME_GLOBAL_VARIABLE_VALUE)',
        type: 'Json',
        defaultValue: kDefaultGlobalVariableValue
      }
    ],
    /**
     * Assigned our localized plugin parameters.
     *
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     * @private
     */
    localizedParameters,
    /**
     * Global variable name MUST NOT be one of these.
     *
     * @const
     * @private
     */
    reservedWords = [
      'break',
      'case',
      'catch',
      'continue',
      'debugger',
      'default',
      'delete',
      'do',
      'else',
      'finally',
      'for',
      'function',
      'if',
      'in',
      'instanceof',
      'new',
      'return',
      'switch',
      'this',
      'throw',
      'try',
      'typeof',
      'var',
      'void',
      'while',
      'with',
      'class',
      'const',
      'enum',
      'export',
      'extends',
      'import',
      'super',
      'implements',
      'interface',
      'let',
      'package',
      'private',
      'protected',
      'public',
      'static',
      'yield',
      'null',
      'true',
      'false',
      'Agtk',
      'cc',
      'jsb',
      'window'
    ],
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
     * Log plugin error message.
     *
     * @param msg The error message.
     */
    logError = function (
      /** @type {string} */
      msg
    ) {
      if (inEditor()) {
        return;
      }
      Agtk.log('[' + locaManager.get('PLUGIN_NAME') + '] error: ' + msg);
    },
    /**
     * Global variable plugin API.
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
            return localizedParameters
              ? localizedParameters
              : (localizedParameters = locaManager.processParameters(parameters));
          case 'internal':
            return {};
          case 'actionCommand':
            return [];
          case 'linkCondition':
            return [];
          case 'autoTile':
          default:
            break;
        }
      },

      initialize: function () {},

      finalize: function () {},

      setParamValue: function (paramValue) {
        var isError = false,
          /** @type {Record<number,import("type-fest").JsonValue>} */
          np,
          /** @type {string} */
          name,
          /** @type {import("type-fest").JsonValue} */
          value;

        if (inEditor()) {
          return;
        }

        np = normalizeParameters(paramValue, self.getInfo('parameter'));
        name = np[parameterId.globalVariableName];
        value = JSON.parse(np[parameterId.globalVariableValue]);

        if (!name) {
          logError('global variable name is empty');
          isError = true;
        } else if (~reservedWords.indexOf(name)) {
          logError("global variable name is a reserved word: '" + name + "'");
          isError = true;
        } else if (/\s/g.test(name)) {
          logError("global variable name contains whitespace: '" + name + "'");
          isError = true;
        }

        if (isError) {
          logError('skipping global variable injection');
          return;
        }

        // Inject value into global variable!
        window[name.trim()] = value;
      },

      setInternal: function () {},

      call: function () {}
    };

  // Plugin is ready!
  return self;
})();
