/**
 * @file PGMMV plugin that provides static storage for your switches &
 * variables.
 * @author kidthales <kidthales@agogpixel.com>
 * @version 1.0.0-alpha
 * @license MIT
 */
(function () {
  /**
   * Variable accessor type value. Used in internalData key generation.
   *
   * @const
   * @private
   */
  var kVariableAccessorType = 0,
    /**
     * Switch accessor type value. Used in internalData key generation.
     *
     * @const
     * @private
     */
    kSwitchAccessorType = 1,
    /**
     * Save directory name.
     *
     * @const
     * @private
     */
    kStaticDirectoryName = 'save',
    /**
     * Save file name prefix.
     *
     * @const
     * @private
     */
    kStaticFileNamePrefix = '_kt_ssp_',
    /**
     * Default static file slot.
     *
     * @const
     * @private
     */
    kDefaultStaticFileSlot = 0,
    /**
     * Default unset ID.
     */
    kUnsetId = -1,
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
              'Provides static storage for your switches & variables. Leverages the PGMMV file slot system.\n\n' +
              'Parameters:\n  - Static File Slot. Required. Make sure this is set to a unique value when using multiple instances of this plugin.\n' +
              '    Default: ' +
              kDefaultStaticFileSlot,

            PARAMETER_NAME_STATIC_FILE_SLOT: 'Static File Slot!:',

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
      staticFileSlot: 0
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
      }
    ],
    /**
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
            defaultValue: kUnsetId
          },
          // Variable parameter.
          {
            id: actionCommandId.saveVariable.parameterId.variable,
            name: 'loca(ACTION_COMMAND_SAVE_VARIABLE_PARAMETER_NAME_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.saveVariable.parameterId.variableSource,
            withNewButton: true,
            defaultValue: kUnsetId
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
            defaultValue: kUnsetId
          },
          // Variable parameter.
          {
            id: actionCommandId.loadVariable.parameterId.variable,
            name: 'loca(ACTION_COMMAND_LOAD_VARIABLE_PARAMETER_NAME_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.loadVariable.parameterId.variableSource,
            withNewButton: false,
            defaultValue: kUnsetId
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
            defaultValue: kUnsetId
          },
          // Switch parameter.
          {
            id: actionCommandId.saveSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_SAVE_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: actionCommandId.saveSwitch.parameterId.switchSource,
            withNewButton: true,
            defaultValue: kUnsetId
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
            defaultValue: kUnsetId
          },
          // Switch parameter.
          {
            id: actionCommandId.loadSwitch.parameterId.switch,
            name: 'loca(ACTION_COMMAND_LOAD_SWITCH_PARAMETER_NAME_SWITCH)',
            type: 'SwitchId',
            referenceId: actionCommandId.loadSwitch.parameterId.switchSource,
            withNewButton: false,
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
     * Plugin internal data.
     *
     * @type {import("type-fest").JsonValue}
     * @private
     */
    internalData = {},
    /**
     * Is internal data loaded from static file?
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
     * Flag for one-time shutdown message.
     *
     * @private
     */
    shownShutdownMessage = false,
    /**
     * @type {ReturnType<typeof createIOController>}
     * @private
     */
    ioController,
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
    createIOController = function (staticFileSlot) {
      /**
       * IO controller state ID.
       *
       * @const
       * @private
       */
      var stateId = {
          /**
           * Initial load required.
           *
           * @const
           */
          init: -1,

          /**
           * Ready for save requests.
           *
           * @const
           */
          ready: 0,

          /**
           * Currently saving.
           *
           * @const
           */
          save: 1,

          /**
           * Creating static file directory.
           */
          createDir: 2
        },
        /**
         * IO controller current state.
         *
         * @private
         */
        state = stateId.init,
        /**
         * Is save requested?
         *
         * @private
         */
        isSaveRequested = false,
        /**
         * Path to static file directory.
         *
         * @const
         * @private
         */
        dirPath = Agtk.settings.projectPath + '/' + kStaticDirectoryName,
        /**
         * Path to static file.
         *
         * @const
         * @private
         */
        filePath = dirPath + '/' + kStaticFileNamePrefix + staticFileSlot + '.json',
        /**
         * JSB file operation result.
         *
         * @type {string | boolean}
         * @private
         */
        jsbResult,
        /**
         * JSON encoding of internalData.
         *
         * @type {string}
         * @private
         */
        json,
        /**
         * Current static file size.
         *
         * @type {number}
         * @private
         */
        fileSize,
        /**
         * JSON encoding size.
         *
         * @type {number}
         * @private
         */
        jsonSize,
        /**
         * Get the string byte length (UTF-8).
         *
         * @param str String to calculate byte length with.
         * @returns String byte length.
         * @private
         */
        getStringByteLength = function (str) {
          var s = str.length,
            i = s - 1,
            code;

          for (; i >= 0; --i) {
            code = str.charCodeAt(i);

            if (code > 0x7f && code <= 0x7ff) {
              s++;
            } else if (code > 0x7ff && code <= 0xffff) {
              s += 2;
            }

            if (code >= 0xdc00 && code <= 0xdfff) {
              // Trail surrogate.
              i--;
            }
          }

          return s;
        },
        /**
         * IO controller API.
         *
         * @public
         */
        self = {
          /**
           * Request internalData save to Static File Slot.
           *
           * @public
           */
          requestSave: function () {
            isSaveRequested = true;
          },

          /**
           * Update IO controller state.
           */
          update: function () {
            switch (state) {
              case stateId.init:
                Agtk.log('io init');
                if (jsb.fileUtils.isFileExist(filePath)) {
                  jsbResult = jsb.fileUtils.getStringFromFile(filePath);

                  if (!cc.isString(jsbResult)) {
                    logError('failed reading from: ' + filePath);
                    isError = true;
                    return;
                  }

                  try {
                    internalData = JSON.parse(jsbResult);
                  } catch (e) {
                    logError('failed parsing read result: ' + jsbResult);
                    isError = true;
                    return;
                  }

                  if (!cc.isObject(internalData)) {
                    logError('invalid parse result: expected object');
                    isError = true;
                    return;
                  }
                }

                // Load variable/switch action commands will stop blocking.
                isInternalDataLoaded = true;

                state = stateId.ready;
                break;

              case stateId.ready:
                if (isSaveRequested) {
                  isSaveRequested = false;

                  try {
                    // Encode.
                    json = JSON.stringify(internalData);
                  } catch (e) {
                    logError('failed encoding internalData');
                    isError = true;
                    return;
                  }

                  // Get byte length of our encoding (for comparison with file size).
                  jsonSize = getStringByteLength(json);

                  if (!jsb.fileUtils.isDirectoryExist(dirPath)) {
                    // Static directory does not exist. Create it!
                    fileSize = 0;
                    jsb.fileUtils.createDirectory(dirPath);
                    // Poll for directory create completion.
                    state = stateId.createDir;
                    return;
                  }

                  fileSize = jsb.fileUtils.getFileSize(filePath);

                  jsbResult = jsb.fileUtils.writeStringToFile(json, filePath);

                  if (!jsbResult) {
                    logError('failed writing to: ' + filePath);
                    isError = true;
                    return;
                  }

                  state = stateId.save;
                }

                break;

              case stateId.save:
                // Polling for file write completion.
                if (fileSize !== jsonSize) {
                  // JSON encoding and previous file size does not match - we
                  // can test for new file size to indicate write completion.
                  if (jsonSize === jsb.fileUtils.getFileSize(filePath)) {
                    state = stateId.ready;
                  }
                } else if (json === jsb.fileUtils.getStringFromFile(filePath)) {
                  // JSON encoding and previous file size matched so we need to
                  // compare content directly to indicate write completion.
                  state = stateId.ready;
                }

                break;

              case stateId.createDir:
                if (jsb.fileUtils.isDirectoryExist(dirPath)) {
                  // Static directory created, attempt save again.
                  isSaveRequested = true;
                  state = stateId.ready;
                }

                break;

              default:
                break;
            }
          }
        };

      // IO controller ready!
      return self;
    },
    /**
     * Generate key for indexing into the internalData object.
     *
     * @param objectId Object ID.
     * @param accessorType Switch or variable accessor type.
     * @param accessorId Switch or variable ID.
     * @returns {string} Key unique key generated from object & variable IDs.
     * @private
     */
    generateKey = function (
      /** @type {number} */
      objectId,
      /** @type {number} */
      accessorType,
      /** @type {number} */
      accessorId
    ) {
      return objectId + ',' + accessorType + ',' + accessorId;
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
          type === 'switches' ? kSwitchAccessorType : kVariableAccessorType,
          switchOrVariableId
        ),
        accessor =
          switchOrVariableSource === projectCommon
            ? Agtk[type].get(switchOrVariableId)
            : switchOrVariableSource[type].get(switchOrVariableId);

      internalData[key] = accessor.getValue();

      ioController.requestSave();
    },
    /**
     * Execute save variable action command.
     *
     * @param variableObjectId Project Common identifier or object ID (Self or
     * Parent).
     * @param variableId Variable ID.
     * @param instanceId ID of object instance executing this action command.
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
      var source = resolveSwitchVariableObject(variableObjectId, instanceId);

      if (source === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('save variable action command executed with unset variable source');
      } else if (variableId < 1) {
        logWarning('save variable action command executed with invalid variable ID');
      } else {
        setInternalData(source, variableId, 'variables');
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute load variable action command.
     *
     * @param variableObjectId Project Common identifier or object ID (Self or
     * Parent).
     * @param variableId Variable ID.
     * @param instanceId ID of object instance executing this action command.
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
      var projectCommon = Agtk.constants.switchVariableObjects.ProjectCommon,
        /** @type {import("pgmmv/agtk/object-instances/object-instance").AgtkObjectInstance | import("pgmmv/agtk/constants/switch-variable-objects").AgtkSwitchVariableObjects['ProjectCommon'] | import("pgmmv/agtk/constants/action-commands").AgtkActionCommands['UnsetObject']} */
        source,
        /** @type {string} */
        key;

      if (!isInternalDataLoaded) {
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
      }

      source = resolveSwitchVariableObject(variableObjectId, instanceId);

      if (source === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('load variable action command executed with unset variable source');
      } else if (variableId < 1) {
        logWarning('load variable action command executed with invalid variable ID');
      } else {
        key = generateKey(source === projectCommon ? source : source.objectId, kVariableAccessorType, variableId);

        if (internalData[key] !== undefined) {
          // Load the variable!
          if (source === projectCommon) {
            Agtk.variables.get(variableId).setValue(internalData[key]);
          } else {
            source.execCommandSwitchVariableChange({
              swtch: false,
              variableObjectId: source.objectId,
              variableQualifierId: Agtk.constants.qualifier.QualifierWhole,
              variableId: variableId,
              variableAssignOperator: Agtk.constants.assignments.VariableAssignOperatorSet,
              assignValue: internalData[key]
            });
          }
        }
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute save switch action command.
     *
     * @param switchObjectId Project Common identifier or object ID (Self or
     * Parent).
     * @param switchId Switch ID.
     * @param instanceId ID of object instance executing this action command.
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
      var source = resolveSwitchVariableObject(switchObjectId, instanceId);

      if (source === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('save switch action command executed with unset switch source');
      } else if (switchId < 1) {
        logWarning('save switch action command executed with invalid switch ID');
      } else {
        setInternalData(source, switchId, 'switches');
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute load switch action command.
     *
     * @param switchObjectId Project Common identifier or object ID (Self or
     * Parent).
     * @param switchId Switch ID.
     * @param instanceId ID of object instance executing this action command.
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
      var projectCommon = Agtk.constants.switchVariableObjects.ProjectCommon,
        /** @type {import("pgmmv/agtk/object-instances/object-instance").AgtkObjectInstance | import("pgmmv/agtk/constants/switch-variable-objects").AgtkSwitchVariableObjects['ProjectCommon'] | import("pgmmv/agtk/constants/action-commands").AgtkActionCommands['UnsetObject']} */
        source,
        /** @type {string} */
        key;

      if (!isInternalDataLoaded) {
        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorBlock;
      }

      source = resolveSwitchVariableObject(switchObjectId, instanceId);

      if (source === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('load switch action command executed with unset switch source');
      } else if (switchId < 1) {
        logWarning('load switch action command executed with invalid switch ID');
      } else {
        key = generateKey(source === projectCommon ? source : source.objectId, kSwitchAccessorType, switchId);

        if (internalData[key] !== undefined) {
          // Load the switch!
          if (source === projectCommon) {
            Agtk.switches.get(switchId).setValue(internalData[key]);
          } else {
            source.execCommandSwitchVariableChange({
              swtch: true,
              switchObjectId: source.objectId,
              switchQualifierId: Agtk.constants.qualifier.QualifierWhole,
              switchId: switchId,
              switchValue: internalData[key]
            });
          }
        }
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
            return localizedParameters
              ? localizedParameters
              : (localizedParameters = locaManager.processParameters(parameters));
          case 'internal':
            if (!inEditor()) {
              Agtk.log('getInternal');
            }
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

        Agtk.log('initialize');
      },

      finalize: function () {
        if (inEditor()) {
          return;
        }

        Agtk.log('finalize');
      },

      setParamValue: function (paramValue) {
        /** @type {Record<number,import("type-fest").JsonValue>} */
        var np;

        if (inEditor()) {
          return;
        }
        Agtk.log('setParamValue');
        np = normalizeParameters(paramValue, self.getInfo('parameter'));

        ioController = createIOController(np[parameterId.staticFileSlot]);
      },

      setInternal: function () {
        if (inEditor()) {
          return;
        }
        Agtk.log('setInternal');
      },

      call: function () {},

      update: function (delta) {
        if (isError) {
          if (shownShutdownMessage) {
            return;
          }

          logError('critical error has occurred: shutting down plugin!');
          shownShutdownMessage = true;
          return;
        }

        ioController && ioController.update(delta);
      },

      execActionCommand: function (actionCommandIndex, parameter, objectId, instanceId) {
        /**
         * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand}
         */
        var actionCommand,
          /** @type {Record<number,import("type-fest").JsonValue>} */
          np;

        if (isError) {
          logWarning('plugin deactivated: skipping action command');
          return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
        } else {
          actionCommand = self.getInfo('actionCommand')[actionCommandIndex];
          np = normalizeParameters(parameter, actionCommand.parameter);

          switch (actionCommand.id) {
            case actionCommandId.saveVariable.id:
              return execSaveVariable(
                np[actionCommandId.saveVariable.parameterId.variableSource],
                np[actionCommandId.saveVariable.parameterId.variable],
                instanceId
              );
            case actionCommandId.loadVariable.id:
              return execLoadVariable(
                np[actionCommandId.loadVariable.parameterId.variableSource],
                np[actionCommandId.loadVariable.parameterId.variable],
                instanceId
              );
            case actionCommandId.saveSwitch.id:
              return execSaveSwitch(
                np[actionCommandId.saveSwitch.parameterId.switchSource],
                np[actionCommandId.saveSwitch.parameterId.switch],
                instanceId
              );
            case actionCommandId.loadSwitch.id:
              return execLoadSwitch(
                np[actionCommandId.loadSwitch.parameterId.switchSource],
                np[actionCommandId.loadSwitch.parameterId.switch],
                instanceId
              );
            default:
              break;
          }
        }

        return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
      }
    };

  // Plugin is ready!
  return self;
})();
