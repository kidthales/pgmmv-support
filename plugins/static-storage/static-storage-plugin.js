/**
 * @file PGMMV plugin that provides static storage for your switches &
 * variables.
 * @author kidthales <kidthales@agogpixel.com>
 * @license MIT
 */
(function () {
  /**
   * Default static file slot.
   *
   * @const
   * @private
   */
  var kDefaultStaticFileSlot = -1337,
    /**
     * Default debounce value (in frames).
     *
     * @const
     * @private
     */
    kDefaultDebounceValue = 3,
    /**
     * Minimum debounce value (in frames).
     *
     * @const
     * @private
     */
    kMinDebounceValue = 3,
    /**
     * Maximum debounce value (in frames).
     *
     * @const
     * @private
     */
    kMaxDebounceValue = 3600,
    /**
     * Default unset ID value.
     *
     * @const
     * @private
     */
    kDefaultUnsetIdValue = -1,
    /**
     * Custom switch ID start value.
     *
     * @const
     * @private
     */
    kCustomSwitchIDStartValue = 2000,
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
            PLUGIN_NAME: 'Static Storage Plugin',

            /** Required. */
            PLUGIN_DESCRIPTION: 'Provides static storage for your switches & variables.',

            /** Required. */
            PLUGIN_AUTHOR: 'kidthales <kidthales@agogpixel.com>',

            /** Required. */
            PLUGIN_HELP:
              "Provides static storage for your switches & variables. Leverages the PGMMV file slot system.\n\nParameters:\n  - Static File Slot. Required. Make sure this is set to a value that will not be used by your game's save system.\n    Default: " +
              kDefaultStaticFileSlot +
              '\n  - Debounce. Required. Number of frames to wait when transitioning to & from the Static File Slot while saving data.\n    Default: ' +
              kDefaultDebounceValue +
              '; Min: ' +
              kMinDebounceValue +
              '; Max: ' +
              kMaxDebounceValue +
              '\n  - Load Proxy. Required. Plugin will create an object instance from this object ID for use with initial load from the Static File Slot. Object instance is destroyed upon completion of initial load.\n    Default: ' +
              kDefaultUnsetIdValue +
              '\n  - Lock Switch Source. Optional. See Lock Switch. If used, this should be set to your Project Common switches.\n    Default: ' +
              kDefaultUnsetIdValue +
              '\n  - Lock Switch. Optional. Plugin will set this switch when performing save & load operations against the Static File Slot.\n    You can use this in your game to ensure you are not saving & loading from the incorrect file slot.\n    Default: ' +
              kDefaultUnsetIdValue,

            PARAMETER_NAME_STATIC_FILE_SLOT: 'Static File Slot!:',
            PARAMETER_NAME_DEBOUNCE: 'Debounce!:',
            PARAMETER_NAME_LOAD_PROXY: 'Load Proxy!:',
            PARAMETER_NAME_LOCK_SWITCH_SOURCE: 'Lock Switch Source?:',
            PARAMETER_NAME_LOCK_SWITCH: 'Lock Switch?:',

            ACTION_COMMAND_NAME_SAVE_VARIABLE: 'Save Variable',
            ACTION_COMMAND_DESCRIPTION_SAVE_VARIABLE: 'Save variable value to static storage.',
            ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE: 'Variable Source!:',
            ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE: 'Variable!:',

            ACTION_COMMAND_NAME_LOAD_VARIABLE: 'Load Variable',
            ACTION_COMMAND_DESCRIPTION_LOAD_VARIABLE: 'Load variable value from static storage.',
            ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE: 'Variable Source!:',
            ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE: 'Variable!:',

            ACTION_COMMAND_NAME_SAVE_SWITCH: 'Save Switch',
            ACTION_COMMAND_DESCRIPTION_SAVE_SWITCH: 'Save switch value to static storage.',
            ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH_SOURCE: 'Switch Source!:',
            ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH: 'Switch!:',

            ACTION_COMMAND_NAME_LOAD_SWITCH: 'Load Switch',
            ACTION_COMMAND_DESCRIPTION_LOAD_SWITCH: 'Load switch value from static storage.',
            ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH_SOURCE: 'Switch Source!:',
            ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH: 'Switch!:'
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
          },

          /**
           * Localize action commands or link conditions in place.
           *
           * @param {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[] | import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]} commandsOrConditions Non-localized action commands or link conditions.
           * @returns {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[] | import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]} Localized action commands or link conditions.
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
     * Plugin parameter IDs. So we don't use 'magic values' throughout the code.
     *
     * @const
     * @private
     */
    parameterId = {
      /**
       * File slot plugin parameter ID.
       *
       * @const
       */
      staticFileSlot: 0,

      /**
       * Debounce plugin parameter ID.
       *
       * @const
       */
      debounce: 1,

      /**
       * Lock switch parameter ID.
       *
       * @const
       */
      lockSwitch: 2,

      /**
       * Lock switch source parameter ID.
       *
       * @const
       */
      lockSwitchSource: 102,

      /**
       * Load proxy parameter ID.
       *
       * @const
       */
      loadProxy: 3
    },
    /**
     * Plugin parameters.
     *
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     * @const
     * @private
     */
    parameters = [
      // Static file slot parameter.
      {
        id: parameterId.staticFileSlot,
        name: 'loca(PARAMETER_NAME_STATIC_FILE_SLOT)',
        type: 'Number',
        defaultValue: kDefaultStaticFileSlot
      },
      // Debounce parameter.
      {
        id: parameterId.debounce,
        name: 'loca(PARAMETER_NAME_DEBOUNCE)',
        type: 'Number',
        minimumValue: kMinDebounceValue,
        maximumValue: kMaxDebounceValue,
        defaultValue: kDefaultDebounceValue
      },
      // Load proxy parameter.
      {
        id: parameterId.loadProxy,
        name: 'loca(PARAMETER_NAME_LOAD_PROXY)',
        type: 'ObjectId',
        defaultValue: kDefaultUnsetIdValue
      },
      // Lock switch source parameter.
      {
        id: parameterId.lockSwitchSource,
        name: 'loca(PARAMETER_NAME_LOCK_SWITCH_SOURCE)',
        type: 'SwitchVariableObjectId',
        option: [''],
        defaultValue: kDefaultUnsetIdValue
      },
      // Lock switch parameter.
      {
        id: parameterId.lockSwitch,
        name: 'loca(PARAMETER_NAME_LOCK_SWITCH)',
        type: 'SwitchId',
        referenceId: parameterId.lockSwitchSource,
        withNewButton: true,
        defaultValue: kDefaultUnsetIdValue
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
     * Plugin action command IDs with corresponding parameter IDs. So we don't
     * use 'magic values' throughout the code.
     *
     * @const
     * @private
     */
    actionCommandId = {
      /**
       * Save variable action command.
       *
       * @const
       */
      saveVariable: {
        /**
         * Save variable action command ID.
         *
         * @const
         */
        id: 0,

        /**
         * Save variable action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Save variable action command variable parameter ID.
           *
           * @const
           */
          variable: 0,

          /**
           * Save variable action command variable source parameter ID.
           *
           * @const
           */
          variableSource: 100
        }
      },

      /**
       * Load variable action command ID.
       *
       * @const
       */
      loadVariable: {
        /**
         * Load variable action command ID.
         *
         * @const
         */
        id: 1,

        /**
         * Load variable action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Load variable action command variable parameter ID.
           *
           * @const
           */
          variable: 0,

          /**
           * Load variable action command variable source parameter ID.
           *
           * @const
           */
          variableSource: 100
        }
      },

      /**
       * Save switch action command.
       *
       * @const
       */
      saveSwitch: {
        /**
         * Save switch action command ID.
         *
         * @const
         */
        id: 2,

        /**
         * Save switch action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Save switch action command switch parameter ID.
           *
           * @const
           */
          switch: 0,

          /**
           * Save switch action command switch source parameter ID.
           *
           * @const
           */
          switchSource: 100
        }
      },

      /**
       * Load switch action command.
       *
       * @const
       */
      loadSwitch: {
        /**
         * Load switch action command ID.
         *
         * @const
         */
        id: 3,

        /**
         * Load switch action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Load switch action command switch parameter ID.
           *
           * @const
           */
          switch: 0,

          /**
           * Load switch action command switch source parameter ID.
           *
           * @const
           */
          switchSource: 100
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
      // Save variable action command.
      {
        id: actionCommandId.saveVariable.id,
        name: 'loca(ACTION_COMMAND_NAME_SAVE_VARIABLE)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_SAVE_VARIABLE)',
        parameter: [
          // Variable source parameter.
          {
            id: actionCommandId.saveVariable.parameterId.variableSource,
            name: 'loca(ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kDefaultUnsetIdValue
          },
          // Variable parameter.
          {
            id: actionCommandId.saveVariable.parameterId.variable,
            name: 'loca(ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.saveVariable.parameterId.variableSource,
            withNewButton: true,
            defaultValue: kDefaultUnsetIdValue
          }
        ]
      },
      // Load variable action command.
      {
        id: actionCommandId.loadVariable.id,
        name: 'loca(ACTION_COMMAND_NAME_LOAD_VARIABLE)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_LOAD_VARIABLE)',
        parameter: [
          // Variable source parameter.
          {
            id: actionCommandId.loadVariable.parameterId.variableSource,
            name: 'loca(ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kDefaultUnsetIdValue
          },
          // Variable parameter.
          {
            id: actionCommandId.loadVariable.parameterId.variable,
            name: 'loca(ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.loadVariable.parameterId.variableSource,
            withNewButton: false,
            defaultValue: kDefaultUnsetIdValue
          }
        ]
      },
      // Save switch action command.
      {
        id: actionCommandId.saveSwitch.id,
        name: 'loca(ACTION_COMMAND_NAME_SAVE_SWITCH)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_SAVE_SWITCH)',
        parameter: [
          // Switch source parameter.
          {
            id: actionCommandId.saveSwitch.parameterId.switchSource,
            name: 'loca(ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kDefaultUnsetIdValue
          },
          // Switch parameter.
          {
            id: actionCommandId.saveSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: actionCommandId.saveSwitch.parameterId.switchSource,
            withNewButton: true,
            defaultValue: kDefaultUnsetIdValue
          }
        ]
      },
      // Load switch action command.
      {
        id: actionCommandId.loadSwitch.id,
        name: 'loca(ACTION_COMMAND_NAME_LOAD_SWITCH)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_LOAD_SWITCH)',
        parameter: [
          // Switch source parameter.
          {
            id: actionCommandId.loadSwitch.parameterId.switchSource,
            name: 'loca(ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kDefaultUnsetIdValue
          },
          // Switch parameter.
          {
            id: actionCommandId.loadSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: actionCommandId.loadSwitch.parameterId.switchSource,
            withNewButton: false,
            defaultValue: kDefaultUnsetIdValue
          }
        ]
      }
    ],
    /**
     * Assigned our localized action commands.
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     * @const
     */
    localizedActionCommands,
    /**
     * Plugin internal data. This is the data structure which our variables &
     * switches interact with for save & load.
     *
     * @type {Record<string, number | boolean>}
     * @private
     */
    internalData = {},
    /**
     * Is internal data initially loaded from static file slot?
     *
     * @private
     */
    isInternalDataLoaded = false,
    /**
     * Flag error at plugin scope.
     *
     * @private
     */
    isError = false,
    /**
     * Reference to Static File Slot plugin parameter value.
     *
     * @type {number}
     * @private
     */
    staticFileSlot,
    /**
     * Reference to Debounce plugin parameter value.
     *
     * @type {number}
     * @private
     */
    debounce,
    /**
     * Reference to object instance that performs initial load from Static File
     * Slot.
     *
     * @type {import("pgmmv/agtk/object-instances/object-instance").AgtkObjectInstance | undefined}
     * @private
     */
    loadProxy,
    /**
     * Optional lock switch object.
     *
     * @type {import("pgmmv/agtk/switches/switch").AgtkSwitch | undefined}
     * @private
     */
    lockSwitch,
    /**
     * IO controller.
     *
     * @const
     * @private
     */
    ioController = (function () {
      /**
       * IO controller state ID.
       *
       * @const
       * @private
       */
      var stateId = {
          ready: 0,
          debounceSavePhase1: 1,
          debounceLoadPhase1: 2,
          debounceSavePhase2: 3,
          debounceLoadPhase2: 4
        },
        /**
         * Is save requested?
         *
         * @private
         */
        isSaveRequested = false,
        /**
         * Is load requested?
         *
         * @private
         */
        isLoadRequested = false,
        /**
         * Debounce duration accumulator.
         *
         * @private
         */
        accumulator = 0,
        /**
         * IO controller current state.
         *
         * @private
         */
        state = stateId.ready,
        /**
         * IO controller API.
         *
         * @public
         */
        self = {
          update: function () {
            switch (state) {
              case stateId.ready:
                if (isLoadRequested) {
                  // TODO
                } else if (isSaveRequested) {
                  // TODO
                }
                break;
              case stateId.debounceLoadPhase1:
                break;
              default:
                break;
            }
          }
        };

      // IO controller ready!
      return self;
    })(),
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
     * Generate key for indexing into the internalData object.
     *
     * @param objectId Object ID.
     * @param variableId Variable ID.
     * @returns {string} Key unique key generated from object & variable IDs.
     * @private
     */
    generateKey = function (
      /** @type {number} */
      objectId,
      /** @type {number} */
      variableId
    ) {
      return objectId + ',' + variableId;
    },
    /**
     * Resolve the switch/variable source object to either the Project Common
     * identifier (`0`) or an appropriate object instance.
     *
     * @param switchVariableObjectId Suitable values are:
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
    resolveSwitchVariableObject = function (
      /** @type {number} switchVariableObjectId */
      switchVariableObjectId,
      /** @type {number} instanceId */
      instanceId
    ) {
      var instance = Agtk.objectInstances.get(instanceId),
        pId;

      switch (switchVariableObjectId) {
        case Agtk.constants.switchVariableObjects.ProjectCommon:
          return switchVariableObjectId;
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
     * Set internal data & flag for save.
     *
     * @param switchOrVariableSource Object instance or Project Common
     * identifier.
     * @param switchOrVariableId Switch or variable ID.
     * @param type 'switches' or 'variables'.
     */
    setInternalData = function (
      /** @type {import("pgmmv/agtk/object-instances/object-instance").AgtkObjectInstance | 0 } */
      switchOrVariableSource,
      /** @type {number} */
      switchOrVariableId,
      /** @type {'variables' | 'switches'} */
      type
    ) {
      var projectCommon = Agtk.constants.switchVariableObjects.ProjectCommon,
        key = generateKey(
          switchOrVariableSource === projectCommon ? switchOrVariableSource : switchOrVariableSource.objectId,
          switchOrVariableId
        ),
        accessor =
          switchOrVariableSource === projectCommon
            ? Agtk[type].get(switchOrVariableId)
            : switchOrVariableSource[type].get(switchOrVariableId);
      internalData[key] = accessor.getValue();
      // TODO: Signal IO controller ...
      //isSaveRequested = true;
    },
    /**
     * Execute save variable action command.
     *
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execSaveVariable = function (
      /** @type {number} */
      variableObjectId,
      /** @type {number} */
      variableId,
      /** @type {number} */
      instanceId
    ) {
      // TODO
      /*var target = resolveSwitchVariableObject(variableObjectId, instanceId);
      if (target !== Agtk.constants.actionCommands.UnsetObject) {
        setInternalData(target, variableId, 'variables');
      }*/
      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute load variable action command.
     *
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execLoadVariable = function (
      /** @type {number} */
      variableObjectId,
      /** @type {number} */
      variableId,
      /** @type {number} */
      instanceId
    ) {
      // TODO
      /*var target = resolveSwitchVariableObject(variableObjectId, instanceId),
        key;
      if (target === Agtk.constants.actionCommands.UnsetObject) {
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
      } else if (!isInternalDataLoaded) {
        if (!isLoadRequested && !loadProxy) {
          isLoadRequested = true;
          loadProxy = Agtk.objectInstances.get(instanceId);
        }
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
      }
      key = generateKey(target, variableId);
      if (target === Agtk.constants.switchVariableObjects.ProjectCommon) {
        Agtk.variables.get(variableId).setValue(internalData[key]);
      } else {
        target.execCommandSwitchVariableChange({
          swtch: false,
          variableObjectId: target.objectId,
          variableQualifierId: Agtk.constants.qualifier.QualifierWhole,
          variableId: variableId,
          variableAssignOperator: Agtk.constants.assignments.VariableAssignOperatorSet,
          assignValue: internalData[key]
        });
      }*/
      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute save switch action command.
     *
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execSaveSwitch = function (
      /** @type {number} */
      switchObjectId,
      /** @type {number} */
      switchId,
      /** @type {number} */
      instanceId
    ) {
      // TODO
      /*var target = resolveSwitchVariableObject(switchObjectId, instanceId);
      if (target !== Agtk.constants.actionCommands.UnsetObject) {
        setInternalData(target, switchId, 'switches');
      }*/
      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute load switch action command.
     *
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execLoadSwitch = function (
      /** @type {number} */
      switchObjectId,
      /** @type {number} */
      switchId,
      /** @type {number} */
      instanceId
    ) {
      // TODO
      /*var target = resolveSwitchVariableObject(switchObjectId, instanceId),
        key;
      if (target === Agtk.constants.actionCommands.UnsetObject) {
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
      } else if (!isInternalDataLoaded) {
        if (!isLoadRequested && !loadProxy) {
          isLoadRequested = true;
          loadProxy = Agtk.objectInstances.get(instanceId);
        }
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
      }
      key = generateKey(target, switchId);
      if (target === Agtk.constants.switchVariableObjects.ProjectCommon) {
        Agtk.switches.get(switchId).setValue(internalData[key]);
      } else {
        target.execCommandSwitchVariableChange({
          swtch: true,
          switchObjectId: target.objectId,
          switchQualifierId: Agtk.constants.qualifier.QualifierWhole,
          switchId: switchId,
          switchValue: internalData[key]
        });
      }*/
      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Static storage plugin API.
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
            return internalData;
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

      initialize: function () {},

      finalize: function () {},

      setParamValue: function (paramValue) {
        /** @type {Record<number,import("type-fest").JsonValue>} */
        var np,
          /** @type {number} */
          lpObjectId,
          /** @type {number} */
          lpInstanceId,
          /** @type {number | undefined} */
          lssId,
          /** @type {number | undefined} */
          lsId;

        if (inEditor()) {
          return;
        }

        np = normalizeParameters(paramValue, self.getInfo('parameter'));
        staticFileSlot = np[parameterId.staticFileSlot];
        debounce = np[parameterId.debounce];
        lpObjectId = np[parameterId.loadProxy];
        lssId = np[parameterId.lockSwitchSource];
        lsId = np[parameterId.lockSwitch];

        if (isNaN(staticFileSlot)) {
          Agtk.log('[Static Storage Plugin] error: file slot is NaN');
          isError = true;
        }

        if (isNaN(debounce)) {
          Agtk.log('[Static Storage Plugin] error: debounce is NaN');
          isError = true;
        }

        if (isNaN(lpObjectId)) {
          Agtk.log('[Static Storage Plugin] error: load proxy object ID is NaN');
          isError = true;
        } else if (lpObjectId <= 0) {
          Agtk.log('[Static Storage Plugin] error: invalid load proxy object ID: ' + lpObjectId);
          isError = true;
        }

        /*if (!isError) {
          // Create load proxy.
          lpInstanceId = Agtk.actionCommands.objectCreate(lpObjectId, 0, 0, 0);

          if (isNaN(lpInstanceId)) {
            Agtk.log('[Static Storage Plugin] error: load proxy instance ID is NaN');
            isError = true;
          } else if (lpInstanceId <= 0) {
            Agtk.log('[Static Storage Plugin] error: invalid load proxy object ID: ' + lpInstanceId);
            isError = true;
          }
        }*/

        /*if (!isError) {
          // Get load proxy object instance reference.
          loadProxy = Agtk.objectInstances.get(lpInstanceId);

          if (!loadProxy) {
            Agtk.log('[Static Storage Plugin] error: load proxy instance is not defined');
            isError = true;
          }
        }*/

        if (isError) {
          Agtk.log('[Static Storage Plugin] a critical error occurred: deactivating plugin');
          return;
        }

        // Setup lock switch.
        if (!isNaN(lssId) && lssId !== Agtk.constants.actionCommands.UnsetObject) {
          if (lssId !== Agtk.constants.switchVariableObjects.ProjectCommon) {
            Agtk.log(
              '[Static Storage Plugin] warning: invalid lock switch source ID: ' +
                lssId +
                '; expected: ' +
                Agtk.constants.switchVariableObjects.ProjectCommon
            );
          } else if (isNaN(lsId)) {
            Agtk.log('[Static Storage Plugin] warning: lock switch ID is NaN');
          } else if (lsId < kCustomSwitchIDStartValue) {
            Agtk.log(
              '[Static Storage Plugin] warning: invalid lock switch ID: ' +
                lsId +
                '; expected value >= ' +
                kCustomSwitchIDStartValue
            );
          } else {
            lockSwitch = Agtk.switches.get(lsId);

            if (!lockSwitch) {
              Agtk.log('[Static Storage Plugin] warning: lock switch is not defined');
            }
          }
        }

        // TODO: Request static file load...
      },

      setInternal: function (data) {
        internalData = data;
        isInternalDataLoaded = true;
        loadProxy = undefined;
      },

      call: function call() {},

      update: function (delta) {
        if (isError) {
          return;
        }

        // TODO: Manage file slot change + file operation + file slot change operation...
        /*switch (pluginState) {
          case pluginStateId.ready:
            // TODO: old file slot...
            if (isLoadRequested) {
              Agtk.variables.get(Agtk.variables.FileSlotId).setValue(staticFileSlot);
              pluginState = pluginStateId.debounceLoadPhase1;
            } else if (isSaveRequested) {
              Agtk.variables.get(Agtk.variables.FileSlotId).setValue(staticFileSlot);
              pluginState = pluginStateId.debounceSavePhase1;
            }
            break;
          case pluginStateId.debounceLoadPhase1:
            accumulator += delta;
            if (accumulator >= debounce) {
              if (Agtk.variables.get(Agtk.variables.FileSlotId).getValue() === staticFileSlot) {
                // TODO: Check file..?
                loadProxy.execCommandFileLoad({
                  projectCommonSwitches: false,
                  projectCommonVariables: false,
                  sceneAtTimeOfSave: false,
                  objectsStatesInSceneAtTimeOfSave: false,
                  effectType: Agtk.constants.actionCommands.fileLoad.None,
                  duration300: 0
                });
                isLoadRequested = false;
              }
              pluginState = pluginStateId.ready;
              accumulator = 0;
            }
            break;
          case pluginStateId.debounceSavePhase1:
            break;
          default:
            break;
        }*/
      },

      execActionCommand: function (actionCommandIndex, parameter, objectId, instanceId) {
        /**
         * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand}
         */
        var actionCommand,
          /** @type {Record<number,import("type-fest").JsonValue>} */
          np;

        if (isError) {
          Agtk.log('[Static Storage Plugin] error: skipping action command');
          return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
        }

        actionCommand = self.getInfo('actionCommand')[actionCommandIndex];
        np = normalizeParameters(parameter, actionCommand.parameter);

        switch (actionCommand.id) {
          case actionCommandId.saveVariable.id:
            return execSaveVariable(
              np[actionCommandId.saveVariable.parameterId.variable],
              np[actionCommandId.saveVariable.parameterId.variableSource],
              instanceId
            );
          case actionCommandId.loadVariable.id:
            return execLoadVariable(
              np[actionCommandId.loadVariable.parameterId.variable],
              np[actionCommandId.loadVariable.parameterId.variableSource],
              instanceId
            );
          case actionCommandId.saveSwitch.id:
            return execSaveSwitch(
              np[actionCommandId.saveSwitch.parameterId.switch],
              np[actionCommandId.saveSwitch.parameterId.switchSource],
              instanceId
            );
          case actionCommandId.loadSwitch.id:
            return execLoadSwitch(
              np[actionCommandId.loadSwitch.parameterId.switch],
              np[actionCommandId.loadSwitch.parameterId.switchSource],
              instanceId
            );
          default:
            break;
        }

        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
      }
    };

  // Plugin ready!
  return self;
})();
