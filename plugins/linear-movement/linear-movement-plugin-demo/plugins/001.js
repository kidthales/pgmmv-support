/**
 * @file PGMMV plugin that provides action commands for translating an object
 * instance to an (x,y) coordinate pair, each of which is read from a variable.
 * @author kidthales <kidthales@agogpixel.com>
 * @version 1.1.0
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
    kPluginVendorKey = 'linearMovement',
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
     * Minimum tween duration.
     *
     * @const
     * @private
     */
    kMinTweenDuration = 0,
    /**
     * Default tween duration.
     *
     * @const
     * @private
     */
    kDefaultTweenDuration = 0,
    /**
     * Tween duration decimal places.
     *
     * @const
     * @private
     */
    kTweenDurationDecimals = 3,
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
            PLUGIN_NAME: 'Linear Movement Plugin',

            /** Required. */
            PLUGIN_DESCRIPTION: 'Move to coordinates stored in variables.',

            /** Required. */
            PLUGIN_AUTHOR: 'kidthales <kidthales@agogpixel.com>',

            /** Required. */
            PLUGIN_HELP:
              'Provides action commands for translating an object instance to an (x,y) coordinate pair, each of which is read from a variable.',

            ACTION_COMMAND_NAME_MOVE_TO_VARIABLE_COORDINATES: 'Move To Variable Coordinates',
            ACTION_COMMAND_DESCRIPTION_MOVE_TO_VARIABLE_COORDINATES:
              "Move object instance to coordinates stored in variables. Uses object instance's set move speed (Move Speed %).",
            ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE_SOURCE:
              'X Coordinate\nVariable Source!:',
            ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE: 'X Coordinate Variable!:',
            ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE_SOURCE:
              'Y Coordinate\nVariable Source!:',
            ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE: 'Y Coordinate Variable!:',
            ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE: 'Coordinate Space!:',
            ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_WORLD:
              'World',
            ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_CAMERA:
              'Camera',

            ACTION_COMMAND_NAME_TWEEN_TO_VARIABLE_COORDINATES: 'Tween To Variable Coordinates',
            ACTION_COMMAND_DESCRIPTION_TWEEN_TO_VARIABLE_COORDINATES:
              "Tween object instance to coordinates stored in variables. Uses specified duration (in seconds) to determine object instance's move speed.",
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE_SOURCE:
              'X Coordinate\nVariable Source!:',
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE:
              'X Coordinate Variable!:',
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE_SOURCE:
              'Y Coordinate\nVariable Source!:',
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE:
              'Y Coordinate Variable!:',
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_DURATION: 'Duration!:',
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE: 'Coordinate Space!:',
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_WORLD:
              'World',
            ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_CAMERA:
              'Camera'
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
       * Move to variable coordinates action command.
       *
       * @const
       */
      moveToVariableCoordinates: {
        /**
         * Move to variable coordinates action command ID.
         *
         * @const
         */
        id: 0,

        /**
         * Move to variable coordinates action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Move to variable coordinates action command x coordinate variable
           * parameter ID.
           *
           * @const
           */
          xCoordinateVariable: 0,

          /**
           * Move to variable coordinates action command x coordinate variable
           * source parameter ID.
           *
           * @const
           */
          xCoordinateVariableSource: 100,

          /**
           * Move to variable coordinates action command x coordinate variable
           * parameter ID.
           *
           * @const
           */
          yCoordinateVariable: 1,

          /**
           * Move to variable coordinates action command x coordinate variable
           * source parameter ID.
           *
           * @const
           */
          yCoordinateVariableSource: 101,

          /**
           * Move to variable coordinates action command coordinate space
           * parameter.
           *
           * @const
           */
          coordinateSpace: {
            /**
             * Move to variable coordinates action command coordinate space
             * parameter ID.
             *
             * @const
             */
            id: 2,

            /**
             * Move to variable coordinates action command coordinate space
             * parameter custom parameter IDs.
             *
             * @const
             */
            parameterId: {
              /**
               * Move to variable coordinates action command coordinate space
               * parameter world custom parameter ID.
               *
               * @const
               */
              world: 0,

              /**
               * Move to variable coordinates action command coordinate space
               * parameter camera custom parameter ID.
               *
               * @const
               */
              camera: 1
            }
          }
        }
      },

      /**
       * Tween to variable coordinates action command.
       */
      tweenToVariableCoordinates: {
        /**
         * Tween to variable coordinates action command ID.
         *
         * @const
         */
        id: 2,

        /**
         * Tween to variable coordinates action command parameter IDs.
         *
         * @const
         */
        parameterId: {
          /**
           * Tween to variable coordinates action command x coordinate variable
           * parameter ID.
           *
           * @const
           */
          xCoordinateVariable: 0,

          /**
           * Tween to variable coordinates action command x coordinate variable
           * source parameter ID.
           *
           * @const
           */
          xCoordinateVariableSource: 100,

          /**
           * Tween to variable coordinates action command x coordinate variable
           * parameter ID.
           *
           * @const
           */
          yCoordinateVariable: 1,

          /**
           * Tween to variable coordinates action command x coordinate variable
           * source parameter ID.
           *
           * @const
           */
          yCoordinateVariableSource: 101,

          /**
           * Tween to variable coordinates action command duration parameter ID.
           */
          duration: 2,

          /**
           * Tween to variable coordinates action command coordinate space
           * parameter.
           *
           * @const
           */
          coordinateSpace: {
            /**
             * Tween to variable coordinates action command coordinate space
             * parameter ID.
             *
             * @const
             */
            id: 3,

            /**
             * Tween to variable coordinates action command coordinate space
             * parameter custom parameter IDs.
             *
             * @const
             */
            parameterId: {
              /**
               * Tween to variable coordinates action command coordinate space
               * parameter world custom parameter ID.
               *
               * @const
               */
              world: 0,

              /**
               * Tween to variable coordinates action command coordinate space
               * parameter camera custom parameter ID.
               *
               * @const
               */
              camera: 1
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
      // Move to variable coordinates action command.
      {
        id: actionCommandId.moveToVariableCoordinates.id,
        name: 'loca(ACTION_COMMAND_NAME_MOVE_TO_VARIABLE_COORDINATES)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_MOVE_TO_VARIABLE_COORDINATES)',
        parameter: [
          // X coordinate variable source parameter.
          {
            id: actionCommandId.moveToVariableCoordinates.parameterId.xCoordinateVariableSource,
            name: 'loca(ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // X coordinate variable parameter.
          {
            id: actionCommandId.moveToVariableCoordinates.parameterId.xCoordinateVariable,
            name: 'loca(ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.moveToVariableCoordinates.parameterId.xCoordinateVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          // Y coordinate variable source parameter.
          {
            id: actionCommandId.moveToVariableCoordinates.parameterId.yCoordinateVariableSource,
            name: 'loca(ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Y coordinate variable parameter.
          {
            id: actionCommandId.moveToVariableCoordinates.parameterId.yCoordinateVariable,
            name: 'loca(ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.moveToVariableCoordinates.parameterId.yCoordinateVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          // Coordinate space parameter.
          {
            id: actionCommandId.moveToVariableCoordinates.parameterId.coordinateSpace.id,
            name: 'loca(ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE)',
            type: 'CustomId',
            defaultValue: actionCommandId.moveToVariableCoordinates.parameterId.coordinateSpace.parameterId.world,
            customParam: [
              // World space.
              {
                id: actionCommandId.moveToVariableCoordinates.parameterId.coordinateSpace.parameterId.world,
                name: 'loca(ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_WORLD)'
              },
              // Camera space.
              {
                id: actionCommandId.moveToVariableCoordinates.parameterId.coordinateSpace.parameterId.camera,
                name: 'loca(ACTION_COMMAND_MOVE_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_CAMERA)'
              }
            ]
          }
        ]
      },

      // Tween to variable coordinates action command.
      {
        id: actionCommandId.tweenToVariableCoordinates.id,
        name: 'loca(ACTION_COMMAND_NAME_TWEEN_TO_VARIABLE_COORDINATES)',
        description: 'loca(ACTION_COMMAND_DESCRIPTION_TWEEN_TO_VARIABLE_COORDINATES)',
        parameter: [
          // X coordinate variable source parameter.
          {
            id: actionCommandId.tweenToVariableCoordinates.parameterId.xCoordinateVariableSource,
            name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // X coordinate variable parameter.
          {
            id: actionCommandId.tweenToVariableCoordinates.parameterId.xCoordinateVariable,
            name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_X_COORDINATE_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.tweenToVariableCoordinates.parameterId.xCoordinateVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          // Y coordinate variable source parameter.
          {
            id: actionCommandId.tweenToVariableCoordinates.parameterId.yCoordinateVariableSource,
            name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE_SOURCE)',
            type: 'SwitchVariableObjectId',
            option: ['SelfObject', 'ParentObject'],
            defaultValue: kUnsetId
          },
          // Y coordinate variable parameter.
          {
            id: actionCommandId.tweenToVariableCoordinates.parameterId.yCoordinateVariable,
            name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_Y_COORDINATE_VARIABLE)',
            type: 'VariableId',
            referenceId: actionCommandId.tweenToVariableCoordinates.parameterId.xCoordinateVariableSource,
            withNewButton: true,
            defaultValue: kUnsetId
          },
          // Duration parameter.
          {
            id: actionCommandId.tweenToVariableCoordinates.parameterId.duration,
            name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_DURATION)',
            type: 'Number',
            decimals: kTweenDurationDecimals,
            minimumValue: kMinTweenDuration,
            defaultValue: kDefaultTweenDuration
          },
          // Coordinate space parameter.
          {
            id: actionCommandId.tweenToVariableCoordinates.parameterId.coordinateSpace.id,
            name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE)',
            type: 'CustomId',
            defaultValue: actionCommandId.tweenToVariableCoordinates.parameterId.coordinateSpace.parameterId.world,
            customParam: [
              // World space.
              {
                id: actionCommandId.tweenToVariableCoordinates.parameterId.coordinateSpace.parameterId.world,
                name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_WORLD)'
              },
              // Camera space.
              {
                id: actionCommandId.tweenToVariableCoordinates.parameterId.coordinateSpace.parameterId.camera,
                name: 'loca(ACTION_COMMAND_TWEEN_TO_VARIABLE_COORDINATES_PARAMETER_NAME_COORDINATE_SPACE_CUSTOM_PARAMETER_NAME_CAMERA)'
              }
            ]
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
     * Execute move to variable coordinates action command.
     *
     * @param xVariableSourceId Project Common identifier or object ID (Self or
     * Parent).
     * @param xVariableId Variable ID.
     * @param yVariableSourceId Project Common identifier or object ID (Self or
     * Parent).
     * @param yVariableId Variable ID.
     * @param instanceId ID of object instance executing this action command.
     * @param isCameraSpace Set to `true` to move with respect to camera space.
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execMoveToVariableCoordinates = function (
      /** @type {number} */
      xVariableSourceId,
      /** @type {number} */
      xVariableId,
      /** @type {number} */
      yVariableSourceId,
      /** @type {number} */
      yVariableId,
      /** @type {number} */
      instanceId,
      /** @type {boolean} */
      isCameraSpace
    ) {
      var xSource = resolveVariableObject(xVariableSourceId, instanceId),
        ySource = resolveVariableObject(yVariableSourceId, instanceId);

      if (xSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('move to variable coordinates action command executed with unset x coordinate variable source');
      } else if (ySource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('move to variable coordinates action command executed with unset y coordinate variable source');
      } else if (xVariableId < 1) {
        logWarning('move to variable coordinates command executed with invalid x coordinate variable ID');
      } else if (yVariableId < 1) {
        logWarning('move to variable coordinates command executed with invalid y coordinate variable ID');
      } else {
        Agtk.objectInstances.get(instanceId).execCommandObjectMove({
          moveType: Agtk.constants.actionCommands.objectMove.MoveToPosition,
          posX: resolveVariableValue(xSource, xVariableId),
          posY: resolveVariableValue(ySource, yVariableId),
          targettingType: Agtk.constants.actionCommands.objectMove.TargettingById,
          targetObjectId: Agtk.constants.actionCommands.SelfObject,
          moveInDisplayCoordinates: !!isCameraSpace,
          useObjectParameter: true
        });
      }

      return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
    },
    /**
     * Execute tween to variable coordinates action command.
     *
     * @param xVariableSourceId Project Common identifier or object ID (Self or
     * Parent).
     * @param xVariableId Variable ID.
     * @param yVariableSourceId Project Common identifier or object ID (Self or
     * Parent).
     * @param yVariableId Variable ID.
     * @param duration Tween duration in seconds.
     * @param instanceId ID of object instance executing this action command.
     * @param isCameraSpace Set to `true` to move with respect to camera space.
     * @returns {import("pgmmv/agtk/constants/action-commands/command-behavior").AgtkCommandBehavior['CommandBehaviorNext']}
     */
    execTweenToVariableCoordinates = function (
      /** @type {number} */
      xVariableSourceId,
      /** @type {number} */
      xVariableId,
      /** @type {number} */
      yVariableSourceId,
      /** @type {number} */
      yVariableId,
      /** @type {number} */
      duration,
      /** @type {number} */
      instanceId,
      /** @type {boolean} */
      isCameraSpace
    ) {
      var xSource = resolveVariableObject(xVariableSourceId, instanceId),
        ySource = resolveVariableObject(yVariableSourceId, instanceId);

      if (xSource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('tween to variable coordinates action command executed with unset x coordinate variable source');
      } else if (ySource === Agtk.constants.actionCommands.UnsetObject) {
        logWarning('tween to variable coordinates action command executed with unset y coordinate variable source');
      } else if (xVariableId < 1) {
        logWarning('tween to variable coordinates command executed with invalid x coordinate variable ID');
      } else if (yVariableId < 1) {
        logWarning('tween to variable coordinates command executed with invalid y coordinate variable ID');
      } else {
        Agtk.objectInstances.get(instanceId).execCommandObjectMove({
          moveType: Agtk.constants.actionCommands.objectMove.MoveToPosition,
          posX: resolveVariableValue(xSource, xVariableId),
          posY: resolveVariableValue(ySource, yVariableId),
          targettingType: Agtk.constants.actionCommands.objectMove.TargettingById,
          targetObjectId: Agtk.constants.actionCommands.SelfObject,
          moveInDisplayCoordinates: !!isCameraSpace,
          useObjectParameter: false,
          moveDuration300: kDuration300 * duration
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

        if (!window[kVendorGlobalKey][kPluginVendorKey]) {
          window[kVendorGlobalKey][kPluginVendorKey] = {
            execMoveToVariableCoordinates: execMoveToVariableCoordinates,
            execTweenToVariableCoordinates: execTweenToVariableCoordinates
          };
        }
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
          case actionCommandId.moveToVariableCoordinates.id:
            return execMoveToVariableCoordinates(
              np[actionCommandId.moveToVariableCoordinates.parameterId.xCoordinateVariableSource],
              np[actionCommandId.moveToVariableCoordinates.parameterId.xCoordinateVariable],
              np[actionCommandId.moveToVariableCoordinates.parameterId.yCoordinateVariableSource],
              np[actionCommandId.moveToVariableCoordinates.parameterId.yCoordinateVariable],
              instanceId,
              np[actionCommandId.moveToVariableCoordinates.parameterId.coordinateSpace.id] ===
                actionCommandId.moveToVariableCoordinates.parameterId.coordinateSpace.parameterId.camera
            );

          case actionCommandId.tweenToVariableCoordinates.id:
            return execTweenToVariableCoordinates(
              np[actionCommandId.tweenToVariableCoordinates.parameterId.xCoordinateVariableSource],
              np[actionCommandId.tweenToVariableCoordinates.parameterId.xCoordinateVariable],
              np[actionCommandId.tweenToVariableCoordinates.parameterId.yCoordinateVariableSource],
              np[actionCommandId.tweenToVariableCoordinates.parameterId.yCoordinateVariable],
              np[actionCommandId.tweenToVariableCoordinates.parameterId.duration],
              instanceId,
              np[actionCommandId.tweenToVariableCoordinates.parameterId.coordinateSpace.id] ===
                actionCommandId.tweenToVariableCoordinates.parameterId.coordinateSpace.parameterId.camera
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
