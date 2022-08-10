/**
 * @file PGMMV plugin that provides a global storage for your common switches &
 * variables.
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
            PLUGIN_NAME: 'Global Storage Plugin',
            PLUGIN_DESCRIPTION: 'Provides a global storage for your common switches & variables.',
            PLUGIN_AUTHOR: 'kidthales <kidthales@agogpixel.com>',
            PLUGIN_HELP: 'Only supports common switches & variables.',
            ACTION_COMMAND_NAME_SAVE_SWITCH: 'Save Switch',
            ACTION_COMMAND_DESCRIPTION_SAVE_SWITCH: 'Save switch value to global storage.',
            ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH: 'Switch:',
            ACTION_COMMAND_NAME_LOAD_SWITCH: 'Load Switch',
            ACTION_COMMAND_DESCRIPTION_LOAD_SWITCH: 'Load switch value from global storage.',
            ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH: 'Switch:'
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
     * @type {{switches: Record<number, boolean>}}
     */
    internalData = {
      switches: {}
    },
    /**
     * @const
     */
    parameterId = {},
    /**
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     */
    parameters = [],
    /**
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     */
    localizedParameters,
    /**
     * @const
     */
    actionCommandId = {
      saveSwitch: {
        id: 2,
        parameterId: {
          switch: 0
        }
      },
      loadSwitch: {
        id: 3,
        parameterId: {
          switch: 0
        }
      }
    },
    /**
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     */
    actionCommands = [
      {
        id: actionCommandId.saveSwitch.id,
        name: 'loca(ACTION_COMMAND_NAME_SAVE_SWITCH)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_SAVE_SWITCH)',
        parameter: [
          {
            id: actionCommandId.saveSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: 0,
            withNewButton: true,
            defaultValue: -1
          }
        ]
      },
      {
        id: actionCommandId.loadSwitch.id,
        name: 'loca(ACTION_COMMAND_NAME_LOAD_SWITCH)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_LOAD_SWITCH)',
        parameter: [
          {
            id: actionCommandId.loadSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: 0,
            withNewButton: false,
            defaultValue: -1
          }
        ]
      }
    ],
    /**
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     */
    localizedActionCommands,
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
            return localizedActionCommands
              ? localizedActionCommands
              : (localizedActionCommands = locaManager.processCommandOrConditionLocale(actionCommands));
          case 'linkCondition':
            return [];
          case 'autoTile':
          default:
            break;
        }
      },
      initialize: function () {},
      finalize: function () {},
      setParamValue: function () {},
      setInternal: function () {},
      call: function call() {},
      execActionCommand: function (actionCommandIndex, parameter) {
        /**
         * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand}
         */
        var actionCommand = self.getInfo('actionCommand')[actionCommandIndex],
          normalizedParameters = normalizeParameters(parameter, actionCommand.parameter),
          switchId,
          value;
        switch (actionCommand.id) {
          case actionCommandId.saveSwitch.id:
            switchId = normalizedParameters[actionCommandId.saveSwitch.parameterId.switch];
            if (switchId > 0) {
              value = Agtk.switches.get(switchId).getValue();
              internalData.switches[switchId] = value;
              Agtk.plugins.reload(self, self.id, locaManager.getLocale(), internalData);
            }
            break;
          case actionCommandId.loadSwitch.id:
            switchId = normalizedParameters[actionCommandId.loadSwitch.parameterId.switch];
            if (switchId > 0 && typeof internalData[switchId] === 'boolean') {
              Agtk.switches.get(switchId).setValue(internalData[switchId]);
            }
            break;
          default:
            break;
        }
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
      }
    };
  return self;
})();
