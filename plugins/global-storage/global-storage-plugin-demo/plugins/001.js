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
            ACTION_COMMAND_NAME_SAVE_VARIABLE: 'Save Variable',
            ACTION_COMMAND_DESCRIPTION_SAVE_VARIABLE: 'Save variable value to global storage.',
            ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE: 'Variable Source:',
            ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE: 'Variable:',
            ACTION_COMMAND_NAME_LOAD_VARIABLE: 'Load Variable',
            ACTION_COMMAND_DESCRIPTION_LOAD_VARIABLE: 'Load variable value from global storage.',
            ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE: 'Variable Source:',
            ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE: 'Variable:',
            ACTION_COMMAND_NAME_SAVE_SWITCH: 'Save Switch',
            ACTION_COMMAND_DESCRIPTION_SAVE_SWITCH: 'Save switch value to global storage.',
            ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH_SOURCE: 'Switch Source:',
            ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH: 'Switch:',
            ACTION_COMMAND_NAME_LOAD_SWITCH: 'Load Switch',
            ACTION_COMMAND_DESCRIPTION_LOAD_SWITCH: 'Load switch value from global storage.',
            ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH_SOURCE: 'Switch Source:',
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
     * @type {{variables: Record<number, number>, switches: Record<number, boolean>}}
     */
    internalData = {
      variables: {},
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
      saveVariable: {
        id: 0,
        parameterId: {
          variable: 0,
          variableSource: 100
        }
      },
      loadVariable: {
        id: 1,
        parameterId: {
          variable: 0,
          variableSource: 100
        }
      },
      saveSwitch: {
        id: 2,
        parameterId: {
          switch: 0,
          switchSource: 100
        }
      },
      loadSwitch: {
        id: 3,
        parameterId: {
          switch: 0,
          switchSource: 100
        }
      }
    },
    /**
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     */
    actionCommands = [
      {
        id: actionCommandId.saveVariable.id,
        name: 'loca(ACTION_COMMAND_NAME_SAVE_VARIABLE)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_SAVE_VARIABLE)',
        parameter: [
          {
            id: actionCommandId.saveVariable.parameterId.variableSource,
            name: 'loca(ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: [''],
            defaultValue: -1
          },
          {
            id: actionCommandId.saveVariable.parameterId.variable,
            name: 'loca(ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.saveVariable.parameterId.variableSource,
            withNewButton: true,
            defaultValue: -1
          }
        ]
      },
      {
        id: actionCommandId.loadVariable.id,
        name: 'loca(ACTION_COMMAND_NAME_LOAD_VARIABLE)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_LOAD_VARIABLE)',
        parameter: [
          {
            id: actionCommandId.loadVariable.parameterId.variableSource,
            name: 'loca(ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: [''],
            defaultValue: -1
          },
          {
            id: actionCommandId.loadVariable.parameterId.variable,
            name: 'loca(ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.loadVariable.parameterId.variableSource,
            withNewButton: false,
            defaultValue: -1
          }
        ]
      },
      {
        id: actionCommandId.saveSwitch.id,
        name: 'loca(ACTION_COMMAND_NAME_SAVE_SWITCH)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_SAVE_SWITCH)',
        parameter: [
          {
            id: actionCommandId.saveSwitch.parameterId.switchSource,
            name: 'loca(ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: [''],
            defaultValue: -1
          },
          {
            id: actionCommandId.saveSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: actionCommandId.saveSwitch.parameterId.switchSource,
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
            id: actionCommandId.loadSwitch.parameterId.switchSource,
            name: 'loca(ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: [''],
            defaultValue: -1
          },
          {
            id: actionCommandId.loadSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: actionCommandId.loadSwitch.parameterId.switchSource,
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
            if (!inEditor()) {
              Agtk.log('getInternal: ' + JSON.stringify(internalData));
            }
            return internalData;
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
      initialize: function (data) {
        if (!inEditor()) {
          Agtk.log('init: ' + JSON.stringify(data));
          self.setInternal(data);
        }
      },
      finalize: function () {},
      setParamValue: function () {},
      setInternal: function (data) {
        if (data) {
          Agtk.log('setInternal:' + JSON.stringify(data));
          internalData = data;
        }
      },
      call: function call() {},
      execActionCommand: function (actionCommandIndex, parameter) {
        /**
         * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand}
         */
        var actionCommand = self.getInfo('actionCommand')[actionCommandIndex],
          normalizedParameters = normalizeParameters(parameter, actionCommand.parameter),
          containerId,
          sourceId;
        switch (actionCommand.id) {
          case actionCommandId.saveVariable.id:
            containerId = normalizedParameters[actionCommandId.saveVariable.parameterId.variable];
            sourceId = normalizedParameters[actionCommandId.saveVariable.parameterId.variableSource];
            if (!sourceId && containerId > 0) {
              Agtk.log('saving');
              internalData.variables[containerId] = Agtk.variables.get(containerId).getValue();
              //Agtk.plugins.reload(self, self.id, locaManager.getLocale(), internalData);
            }
            break;
          case actionCommandId.loadVariable.id:
            containerId = normalizedParameters[actionCommandId.loadVariable.parameterId.variable];
            sourceId = normalizedParameters[actionCommandId.loadVariable.parameterId.variableSource];
            if (!sourceId && containerId > 0 && typeof internalData.variables[containerId] === 'number') {
              Agtk.log('loading');
              Agtk.variables.get(containerId).setValue(internalData.variables[containerId]);
            }
            break;
          case actionCommandId.saveSwitch.id:
            containerId = normalizedParameters[actionCommandId.saveSwitch.parameterId.switch];
            sourceId = normalizedParameters[actionCommandId.saveSwitch.parameterId.switchSource];
            if (!sourceId && containerId > 0) {
              internalData.switches[containerId] = Agtk.switches.get(containerId).getValue();
              //Agtk.plugins.reload(self, self.id, locaManager.getLocale(), internalData);
            }
            break;
          case actionCommandId.loadSwitch.id:
            containerId = normalizedParameters[actionCommandId.loadSwitch.parameterId.switch];
            sourceId = normalizedParameters[actionCommandId.loadSwitch.parameterId.switchSource];
            if (!sourceId && containerId > 0 && typeof internalData.switches[containerId] === 'boolean') {
              Agtk.switches.get(containerId).setValue(internalData.switches[containerId]);
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
