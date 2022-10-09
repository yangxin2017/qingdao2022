<template>
  <div class="map-dt">
    <div id="mapContainer" ref="refChart"></div>
  </div>
</template>
<script>
import { DrawAllRoads, DrawTempLines, FlyGoToMain } from '@/utils/qd/qdline'
import { InitHeatMap } from '@/utils/qd/qdheatmap'
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let viewer = new this.Cesium.Viewer("mapContainer", {
        baseLayerPicker: false,
        // sceneMode: this.Cesium.SceneMode.SCENE2D,
        animation: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        homeButton: false,
        timeline: false,
        shouldAnimate: true,
        sceneModePicker: false,
        navigationHelpButton: false,
        requestRenderMode: false,
        selectionIndicator: false,
        infoBox: false,
        imageryProvider: new this.Cesium.TileMapServiceImageryProvider({
          // url: '/qd/map/tiles_new',
          url: '/qd/map/tiles',
          // rectangle: new this.Cesium.Rectangle(
          //   this.Cesium.Math.toRadians(-180.0),
          //   this.Cesium.Math.toRadians(-86.673),
          //   this.Cesium.Math.toRadians(180.0),
          //   this.Cesium.Math.toRadians(79.073))
        })
      });
      viewer.cesiumWidget.creditContainer.style.display = "none";
      viewer.scene.globe.baseColor = this.Cesium.Color.BLACK
      // viewer.scene.globe.atmosphereLightIntensity = 20
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(this.Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

      FlyGoToMain(viewer, this.Cesium)
      // 业务逻辑
      // 所有线路
      DrawAllRoads(viewer, this.Cesium)
      DrawTempLines(viewer, this.Cesium)
      // 热力图
      InitHeatMap(viewer, this.Cesium)
    },


    addLine(viewer, p1, p2) {
      let getCustomMaterialLine = (image, color) => {
        return this.CustomMaterialLine({
          image: image,
          color: color,
          duration: 2000
        })
      }
      viewer.entities.add({
        name: "Glowing blue line on the surface",
        polyline: {
          positions: this.Cesium.Cartesian3.fromDegreesArray([
            p1.x,
            p1.y,
            p2.x,
            p2.y,
          ]),
          width: 10,
          material: getCustomMaterialLine('/web/line.png', this.Cesium.Color.fromCssColorString("#f90"))
        },
      })
    },

    CustomMaterialLine(options) {
      let Cesium = this.Cesium
      var Color = Cesium.Color,
        defaultValue = Cesium.defaultValue,
        defined = Cesium.defined,
        defineProperties = Object.defineProperties,
        Event = Cesium.Event,
        createPropertyDescriptor = Cesium.createPropertyDescriptor,
        Property = Cesium.Property,
        Material = Cesium.Material,
        defaultColor = Color.WHITE,
        MaterialType =
          options.MaterialType || "wallType" + parseInt(Math.random() * 1000);
      // 创建自定义动态材质对象
      function PolylineCustomMaterialProperty(options) {
        options = defaultValue(options, defaultValue.EMPTY_OBJECT);
        // 定义内置属性
        this._definitionChanged = new Event();
        this._color = undefined;
        this._colorSubscription = undefined;
        this.color = options.color || Cesium.Color.BLUE;
        this.duration = options.duration || 1000;
        this._time = undefined;
      }
      // 定义材质对象默认属性
      defineProperties(PolylineCustomMaterialProperty.prototype, {
        isvarant: {
          get: function () {
            return false;
          },
        },
        definitionChanged: {
          get: function () {
            return this._definitionChanged;
          },
        },
        color: createPropertyDescriptor("color"),
      });
      // 材质对象需要有type函数 value函数 equals函数
      PolylineCustomMaterialProperty.prototype.getType = function (time) {
        return MaterialType;
      };
      PolylineCustomMaterialProperty.prototype.getValue = function (
        time,
        result
      ) {
        if (!defined(result)) {
          result = {};
        }
        result.color = Property.getValueOrClonedDefault(
          this._color,
          time,
          defaultColor,
          result.color
        );
        result.image = options.image;
        if (this._time === undefined) {
          this._time = time.secondsOfDay;
        }
        result.time = ((time.secondsOfDay - this._time) * 1000) / this.duration;
        return result;
      };
      PolylineCustomMaterialProperty.prototype.equals = function (other) {
        return (
          this === other || //
          (other instanceof PolylineCustomMaterialProperty &&
            Property.equals(this._color, other._color))
        );
      };
      // 将定义的材质对象添加到cesium的材质队列中
      Material._materialCache.addMaterial(MaterialType, {
        fabric: {
          type: MaterialType,
          uniforms: {
            color: options.color || new Cesium.Color(1.0, 0.0, 0.0, 0.5),
            image: options.image,
            time: options.color.time || 0,
          },
          // 动态材质shader
          source:
            "czm_material czm_getMaterial(czm_materialInput materialInput)\n\
                {\n\
                    czm_material material = czm_getDefaultMaterial(materialInput);\n\
                    vec2 st = materialInput.st;\n\
                    \n\
                    if(texture2D(image, vec2(0.0, 0.0)).a == 1.0){\n\
                        discard;\n\
                    }else{\n\
                        material.alpha = texture2D(image, vec2(1.0 - fract(time - st.s), st.t)).a * color.a;\n\
                    }\n\
                    \n\
                    material.diffuse = max(color.rgb * material.alpha * 3.0, color.rgb);\n\
                    \n\
                    return material;\n\
                }\n\
                ",
        },
        // 透明
        translucent: function (material) {
          return true;
        },
      });
      return new PolylineCustomMaterialProperty(options);
    },
  },
};
</script>
<style lang="scss" scoped>
.map-dt {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 80px;
  color: #fff;
  text-align: center;
  line-height: 900px;
  font-family: "HY";

  // background: url('@/assets/images/bg.jpg') no-repeat center center;
  // background-size: 100% 100%;
}
#mapContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
