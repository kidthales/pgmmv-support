/**
 * @file PGMMV plugin that provides a global variable for your scripts.
 * @author kidthales <kidthales@agogpixel.com>
 * @license MIT
 */
(function () {
  /**
   * @const
   */
  var locaManager = (function () {
      var locaData = {
          en: {
            PLUGIN_NAME: 'Global Variable Plugin',
            PLUGIN_DESCRIPTION: 'Provides a global variable for your scripts.',
            PLUGIN_AUTHOR: 'kidthales <kidthales@agogpixel.com>',
            PLUGIN_HELP: 'Variable name must be a valid JavaScript identifier',
            PARAMETER_NAME_GLOBAL_VARIABLE_NAME: 'Global Variable Name:',
            PARAMETER_DEFAULT_VALUE_GLOBAL_VARIABLE_NAME: 'MyGlobal',
            PARAMETER_NAME_GLOBAL_VARIABLE_VALUE: 'Global Variable Value:'
          }
        },
        locaDefault = 'en',
        inlineRegex = /^loca\((.+)\)$/,
        locaCurrent = locaDefault,
        self = {
          /**
           * @param {string} key
           * @returns {string}
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
           * @returns {string}
           */
          getLocale: function () {
            return locaCurrent;
          },
          /**
           * @param {string} locale
           */
          setLocale: function (locale) {
            locaCurrent = locale;
          },
          /**
           * @param {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]} parameters
           * @returns {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
           */
          processParameterLocale: function (parameters) {
            var pLen = parameters.length,
              i = 0,
              j = 0,
              p,
              m,
              cpLen,
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
          },
          /**
           * @param {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[] | import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]} commandsOrConditions
           * @returns {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[] | import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]}
           */
          processCommandOrConditionLocale: function (commandsOrConditions) {
            var len = commandsOrConditions.length,
              i = 0,
              c,
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
              self.processParameterLocale(c.parameter);
            }
            return commandsOrConditions;
          }
        };
      return self;
    })(),
    /**
     * @const
     */
    parameterId = {
      globalVariableName: 0,
      globalVariableValue: 1
    },
    /**
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     */
    parameters = [
      {
        id: parameterId.globalVariableName,
        name: 'loca(PARAMETER_NAME_GLOBAL_VARIABLE_NAME)',
        type: 'String',
        defaultValue: 'loca(PARAMETER_DEFAULT_VALUE_GLOBAL_VARIABLE_NAME)'
      },
      {
        id: parameterId.globalVariableValue,
        name: 'loca(PARAMETER_NAME_GLOBAL_VARIABLE_VALUE)',
        type: 'Json',
        defaultValue: {}
      }
    ],
    /**
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     */
    localizedParameters,
    /**
     * @const
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
      'false'
    ],
    /**
     * @returns {boolean}
     */
    inEditor = function () {
      return !Agtk || typeof Agtk.log !== 'function';
    },
    /**
     * @returns {Record<number,import("type-fest").JsonValue>}
     */
    normalizeParameters = function (
      /**
       * @type {import("pgmmv/agtk/plugins/plugin").AgtkParameterValue[]}
       */
      paramValue,
      /**
       * @type {import("pgmmv/agtk/plugins/plugin").AgtkParameterValue[]}
       */
      defaults
    ) {
      var normalized = {},
        len = defaults.length,
        i = 0,
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
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkPlugin}
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
              : (localizedParameters = locaManager.processParameterLocale(parameters));
          case 'internal':
            return {};
          case 'actionCommand':
            return [];
          case 'linkCondition':
            return [];
          case 'autoTile':
            return [];
          default:
            break;
        }
      },
      initialize: function () {},
      finalize: function () {},
      setParamValue: function (paramValue) {
        var isError = false,
          normalizedParameters,
          globalVariableName,
          globalVariableValue;
        if (inEditor()) {
          return;
        }
        normalizedParameters = normalizeParameters(paramValue, self.getInfo('parameter'));
        globalVariableName = trim(normalizedParameters[parameterId.globalVariableName]);
        globalVariableValue = JSON.parse(normalizedParameters[parameterId.globalVariableValue]);
        if (!globalVariableName) {
          Agtk.log('[Global Variable Plugin] error: global variable name is empty');
          isError = true;
        } else if (~reservedWords.indexOf(globalVariableName)) {
          Agtk.log(
            "[Global Variable Plugin] error: global variable name is a reserved word: '" + globalVariableName + "'"
          );
          isError = true;
        } else if (/\s/g.test(globalVariableName)) {
          Agtk.log(
            "[Global Variable Plugin] error: global variable name contains whitespace: '" + globalVariableName + "'"
          );
          isError = true;
        }
        if (isError) {
          Agtk.log('[Global Variable Plugin] error: skipping global variable injection');
          return;
        }
        window[globalVariableName] = globalVariableValue;
      },
      setInternal: function () {},
      call: function call() {}
    };
  return self;
})();
