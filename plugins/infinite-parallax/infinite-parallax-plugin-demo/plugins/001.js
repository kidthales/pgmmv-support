/**
 * @file Opinionated PGMMV plugin template.
 * @author kidthales <kidthales@agogpixel.com>
 * @version 0.0.0
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
    kPluginVendorKey = 'infiniteParallax',
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
            PLUGIN_NAME: 'Plugin Template',

            /** Required. */
            PLUGIN_DESCRIPTION: 'Plugin description.',

            /** Required. */
            PLUGIN_AUTHOR: 'Plugin Author',

            /** Required. */
            PLUGIN_HELP: 'Plugin help.'
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
    parameterId = {},
    /**
     * Plugin parameters.
     *
     * @type {import("pgmmv/agtk/plugins/plugin/parameter").AgtkParameter[]}
     * @const
     * @private
     */
    parameters = [],
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
    actionCommandId = {},
    /**
     * Plugin action commands.
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     * @const
     * @private
     */
    actionCommands = [],
    /**
     * Assigned our localized action commands.
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkActionCommand[]}
     * @const
     * @private
     */
    localizedActionCommands,
    /**
     * Plugin link condition IDs with corresponding parameter IDs. So we don't
     * use 'magic values' throughout the code.
     *
     * @const
     * @private
     */
    linkConditionId = {},
    /**
     * Plugin link conditions.
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]}
     * @const
     * @private
     */
    linkConditions = [],
    /**
     * Assigned our localized link conditions.
     *
     * @type {import("pgmmv/agtk/plugins/plugin").AgtkLinkCondition[]}
     * @const
     * @private
     */
    localizedLinkConditions,
    /**
     * Plugin internal data.
     *
     * @type {import("type-fest").JsonValue}
     * @private
     */
    internalData = {},
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
     * @type {import("./types").InfiniteParallaxLayerConstructor}
     */
    InfiniteParallaxLayer,
    /**
     *
     */
    createInfiniteParallaxLayerClass = function () {
      /**
       *
       * @returns
       */
      var getWinSize = function () {
          return cc.director.getWinSize();
        },
        getWinCenter = function () {
          var size = getWinSize();
          return cc.p(size.width / 2, size.height / 2);
        },
        /**
         *
         */
        setSpritePosition = function (
          /** @type {import("pgmmv/cc/sprite").CCSprite} */
          sprite,
          /**@type {import("pgmmv/cc/point").CCPoint} */
          position,
          /**@type {import("pgmmv/cc/point").CCPoint|undefined} */
          offset
        ) {
          offset = offset || cc.p();
          sprite.setPosition(position.x + offset.x, position.y + offset.y);
        };

      // Class definition.
      InfiniteParallaxLayer = cc.Layer.extend({
        /**
         * @type {typeof import("./types").InfiniteParallaxLayerSpriteWrapMode}
         */
        wrapMode: {
          LeftToRight: 1
        },

        /**
         *
         */
        ctor: function () {
          /** @type {import("./types").InfiniteParallaxLayer} */
          var self = this,
            /** @type {import("pgmmv/cc/size").CCSize} */
            size,
            /** @type {import("pgmmv/cc/sprite").CCSprite} */
            sprite;

          self._super();
          self.subLayers = [];

          size = getWinSize();
          self.renderTexture = new cc.RenderTexture(size.width, size.height);
          self.renderTexture.retain();
          //self.renderTexture.setAutoDraw(true);
          sprite = self.renderTexture.getSprite();
          setSpritePosition(sprite, cc.p(size.width / 2, size.height / 2));
          self.addChild(sprite);
        },

        /**
         *
         * @type {import("./types").InfiniteParallaxLayer['addSprite']}
         */
        addSprite: function (sprite, localZOrder, positionOffset, scaleOffset, wrapMode, loop, getDisplacement) {
          /** @type {import("./types").InfiniteParallaxLayer} */
          var self = this,
            subLayers = self.subLayers,
            /** @type {import("./types").InfiniteParallaxSubLayer} */
            subLayer,
            /** @type {number} */
            len,
            /** @type {number} */
            i,
            /** @type {number} */
            j;

          setSpritePosition(sprite, getWinCenter(), positionOffset);

          len = subLayers.push({
            localZOrder: localZOrder,
            wrapMode: wrapMode,
            sprite: sprite,
            offset: {
              position: cc.p(positionOffset),
              scale: cc.p(scaleOffset)
            },
            position: {
              start: sprite.getPosition(),
              current: sprite.getPosition()
            },
            loop: {
              max: cc.p(loop),
              current: cc.p()
            },
            getDisplacement: getDisplacement
          });

          // Insertion sort.
          for (i = 1; i < len; ++i) {
            j = i - 1;
            subLayer = subLayers[i];
            while (j >= 0 && subLayers[j].localZOrder > subLayer.localZOrder) {
              subLayers[j + 1] = subLayers[j--];
            }
            subLayers[j + 1] = subLayer;
          }
        },

        /**
         *
         * @param dt
         * @type {import("./types").InfiniteParallaxLayer['update']}
         */
        update: function (dt) {
          /** @type {import("./types").InfiniteParallaxLayer} */
          var self = this,
            subLayers = self.subLayers,
            /** @type {import("./types").InfiniteParallaxSubLayer} */
            subLayer,
            len = subLayers.length,
            /** @type {number} */
            i;

          try {
            //self.renderTexture.beginWithClear(0, 0, 0, 255);
            self.renderTexture.begin();

            for (i = 0; i < len; ++i) {
              subLayer = subLayers[i];
              cc.pAddIn(subLayer.position.current, subLayer.getDisplacement(cc.p(subLayer.position.current), dt));

              subLayer.sprite.setPosition(subLayer.position.current);
              subLayer.sprite.visit();
            }

            self.renderTexture.end();
            Agtk.log('ok');
          } catch (e) {}
        }
      });
    },
    para,
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
            return internalData;
          case 'actionCommand':
            return localizedActionCommands
              ? localizedActionCommands
              : (localizedActionCommands = locaManager.processCommandsOrConditions(actionCommands));
          case 'linkCondition':
            return localizedLinkConditions
              ? localizedLinkConditions
              : (localizedLinkConditions = locaManager.processCommandsOrConditions(linkConditions));
          case 'autoTile':
          default:
            break;
        }
      },

      initialize: function (data) {
        if (inEditor()) {
          return;
        }

        createInfiniteParallaxLayerClass();

        if (!window[kVendorGlobalKey]) {
          window[kVendorGlobalKey] = {};
        }

        window[kVendorGlobalKey][kPluginVendorKey] = {
          test: function (instanceId, imageId) {
            var instance = Agtk.objectInstances.get(instanceId),
              scene = Agtk.sceneInstances.getCurrent(),
              layer = scene.getLayerByIndex(instance.layerIndex);
            Agtk.log(instanceId);
            para = new InfiniteParallaxLayer();

            para.addSprite(
              new cc.Sprite(cc.textureCache.addImage(Agtk.images.get(imageId).filename)),
              0,
              cc.p(),
              cc.p(),
              //InfiniteParallaxLayer.wrapMode.LeftToRight,
              1,
              cc.p(),
              function () {
                return cc.p(-1, 0);
              }
            );

            layer.addChild(para);
          }
        };
      },

      finalize: function () {},

      setParamValue: function (paramValue) {
        /** @type {Record<number,import("type-fest").JsonValue>} */
        var np;

        if (inEditor()) {
          return;
        }

        np = normalizeParameters(paramValue, self.getInfo('parameter'));
      },

      setInternal: function (data) {
        internalData = data;
      },

      call: function () {},

      update: function (delta) {
        if (para) {
          para.update(delta);
        }
      }

      /*execActionCommand: function (
        actionCommandIndex,
        parameter,
        objectId,
        instanceId,
        actionId,
        commandId,
        commonActionStatus,
        sceneId
      ) {},*/

      /*execLinkCondition: function (
        linkConditionIndex,
        parameter,
        objectId,
        instanceId,
        actionLinkId,
        commonActionStatus
      ) {},*/
    };

  // Plugin is ready!
  return self;
})();
