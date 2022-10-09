import * as features from '@/assets/data/qdFullRoads.json'
import * as routes from '@/assets/data/a.json'

const colors = ['#f00', '#0f0', '#ff0']

export function DrawAllRoadsFeatures(viewer, Cesium) {
  const instances = []
  let index = 1
  for (let f of features.geometries) {
    if (f.type == 'LineString') {
      let arr = []
      for (let a of f.coordinates) {
        arr.push(a[0], a[1])
      }
      if (arr.length > 3 && arr.length % 2 == 0) {
        const geometry = new Cesium.PolylineGeometry({
          positions : Cesium.Cartesian3.fromDegreesArray(arr),
          width : 2.0
        })
        
        let inx = parseInt(Math.random() * 3)

        const ins = new Cesium.GeometryInstance({
          geometry : geometry,
          attributes : {
            color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(colors[inx]))
          },
          id : 'line' + (index++)
        })
        instances.push(ins)
      }
    } else {
      console.log(1)
    }
  }
  const primitive = new Cesium.Primitive({
    geometryInstances: instances,
    appearance: new Cesium.PolylineColorAppearance({
      translucent : false
    })
  })
  viewer.scene.primitives.add(primitive)

}

export function DrawAllRoads(viewer, Cesium) {
  const instances = []
  let index = 1
  
  for (let f of routes.default) {
    let ps = []
    for (let p of f.points) {
      ps.push(Number(p))
    }
    let arr = ps
    if (arr.length > 3 && arr.length % 2 == 0) {
      const geometry = new Cesium.PolylineGeometry({
        positions : Cesium.Cartesian3.fromDegreesArray(arr),
        width : 2.0
      })
      
      let inx = parseInt(Math.random() * 3)

      const ins = new Cesium.GeometryInstance({
        geometry : geometry,
        attributes : {
          color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(colors[inx]))
        },
        id : 'line' + (index++)
      })
      instances.push(ins)
    }
  }
  const primitive = new Cesium.Primitive({
    geometryInstances: instances,
    appearance: new Cesium.PolylineColorAppearance({
      translucent : false
    })
  })
  viewer.scene.primitives.add(primitive)

}

export function DrawTempLines(viewer, Cesium) {
  let parr = [[120.30980369999999,36.0636437],[120.31108999999998,36.0636387],[120.31180819999999,36.0636503],[120.31244060000002,36.0636511],[120.3140126,36.0634896],[120.31484899999998,36.0633497],[120.31520039999998,36.0632909],[120.3188831,36.0626391],[120.32221669999998,36.0619351],[120.3227962,36.0615657],[120.32306909999998,36.0612128],[120.3234508,36.0607192],[120.3244006,36.060067],[120.32520670000001,36.0596305],[120.3257492,36.0595032],[120.3261093,36.0594454],[120.32702129999998,36.05934009999999],[120.3292461,36.0590119],[120.3309613,36.0588788],[120.3331245,36.0588341],[120.33498939999998,36.0589115],[120.3359262,36.0590049],[120.33649099999998,36.059093],[120.3373651,36.0592851],[120.33860540000002,36.05959],[120.3403501,36.0601473],[120.34084969999999,36.0603083],[120.3416947,36.0605624],[120.3426577,36.0607385],[120.3433061,36.0608205],[120.3437399,36.0608677],[120.3443073,36.0609016],[120.3447232,36.0608652],[120.3450709,36.060711],[120.3455288,36.0604778],[120.3460208,36.0597455],[120.3463302,36.0589698],[120.34705669999998,36.0576657],[120.3474759,36.0569211],[120.34781419999999,36.0560126],[120.3481728,36.0552244],[120.34856159999998,36.0546608],[120.3490202,36.0541894],[120.34977629999999,36.0536088],[120.3505586,36.0533707],[120.35119249999998,36.053186],[120.3519885,36.0530668],[120.35256709999999,36.0530634],[120.35477389999998,36.0535272],[120.35661599999999,36.0540019],[120.35823669999999,36.0543777],[120.3594817,36.0548142],[120.3611196,36.055507199999994],[120.36221680000001,36.0561674],[120.3640939,36.0573297],[120.36646819999999,36.0587814],[120.368883,36.0607139],[120.3701298,36.0617851],[120.37536699999998,36.064581],[120.37859569999999,36.06584169999999],[120.3810424,36.0662789],[120.38175209999999,36.0663721],[120.38274579999998,36.06664099999999],[120.38282550000001,36.06668319999999],[120.3836342,36.0670191],[120.38378659999998,36.0671097],[120.3839328,36.0672201],[120.38410209999999,36.0674331],[120.38422689999999,36.0676858],[120.38428239999999,36.0678941],[120.38432029999998,36.0680644],[120.38434999999998,36.068301],[120.3843473,36.0686566],[120.384328,36.0689795],[120.38424069999999,36.0694861],[120.3840746,36.0704391],[120.38330019999998,36.0728955],[120.38293589999999,36.0740727],[120.38053389999999,36.0814083],[120.38018139999998,36.08258419999999],[120.38015469999999,36.08288819999999],[120.38021919999998,36.0888821],[120.3802303,36.0908339],[120.38023560000002,36.0956329],[120.380249,36.10041549999999],[120.3794346,36.1016607],[120.3792731,36.10214609999999],[120.37913319999998,36.1026421],[120.37911429999998,36.1033914],[120.3792988,36.1041091],[120.3796713,36.1048251],[120.3801549,36.105353],[120.38056009999998,36.1057911],[120.3812458,36.1061631],[120.38208839999999,36.1065668],[120.38453919999999,36.10747],[120.3856859,36.107926799999994],[120.38681729999999,36.10851629999999],[120.38780799999999,36.10910119999999],[120.38873360000001,36.1099585],[120.38951969999998,36.1108211],[120.390583,36.1121623],[120.39182109999999,36.11375509999999],[120.3953694,36.1177923],[120.39694519999999,36.1196319],[120.39853389999999,36.121313199999996],[120.4027628,36.1252963],[120.4057536,36.1276332],[120.4079617,36.1293426],[120.41022949999999,36.1309514],[120.4181698,36.1367906],[120.41896139999999,36.1373206],[120.420062,36.1381633],[120.4208508,36.13892789999999],[120.4214943,36.139792899999996],[120.42190099999999,36.14146399999999],[120.4221117,36.14293459999999],[120.4222893,36.144273],[120.4223439,36.145139],[120.4223785,36.1456687],[120.4224739,36.1471268],[120.4226329,36.1493376],[120.4225935,36.1528008],[120.422667,36.1543472],[120.4227569,36.15517609999999],[120.42270629999999,36.155771],[120.4224409,36.1564028],[120.4220085,36.156948899999996],[120.4212212,36.15770679999999],[120.42018699999998,36.1585311],[120.4194606,36.1589293],[120.4098342,36.164093],[120.40072829999998,36.168797399999995],[120.39826240000001,36.1700694],[120.397225,36.1705696],[120.39650609999998,36.170826],[120.39559189999999,36.1709893],[120.39458919999998,36.1710988],[120.38841109999998,36.171744399999994],[120.3856786,36.172006],[120.38273939999999,36.172284899999994],[120.38216059999999,36.1722472],[120.3815839,36.1720991],[120.3810675,36.1718192],[120.37896290000002,36.1705887],[120.37823689999999,36.1702254],[120.37748869999999,36.1700227],[120.3763208,36.1698248],[120.37493879999998,36.1696377],[120.37291039999998,36.169472],[120.3686356,36.1690954]]
  let arr = []
  for (let o of parr) {
    arr.push(o[0])
    arr.push(o[1])
  }
  const geometry = new Cesium.CorridorGeometry({
    positions : Cesium.Cartesian3.fromDegreesArray(arr),
    width : 300.0,
    cornerType: Cesium.CornerType.MITERED
  })
  const ins = new Cesium.GeometryInstance({
    geometry : geometry,
    // attributes : {
    //   color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(colors[0]))
    // },
    id : 'line-tmp'
  })
  let instances = []
  instances.push(ins)
  const primitive = new Cesium.Primitive({
    geometryInstances: instances,
    appearance: new Cesium.MaterialAppearance({
      translucent : true,
      material: new Cesium.Material({
        fabric: {
          uniforms: {
          },
          materials: {
          },
          source: `
            czm_material czm_getMaterial(czm_materialInput materialInput) { 
              czm_material material = czm_getDefaultMaterial(materialInput); 
              vec2 st = materialInput.st;
              float pi = 3.1415;
              material.diffuse = vec3(1.0, 0.0, 0.0); 
              material.alpha = sin(st.t * pi) * 0.3; 
              return material; 
            }
            `,
        },
      })
    })
  })
  viewer.scene.primitives.add(primitive)
}

export function FlyGoToMain(viewer, Cesium){
  let pos = [-2605321.8379571326, 4457596.7081341725, 3733197.026940117]
  let dir = [-0.12216426499932008, -0.9138884224879402, 0.3871483483106699]
  let up = [-0.48629627937571107, 0.39515504534143414, 0.779338449459892]

  viewer.camera.flyTo({
    destination : new Cesium.Cartesian3(pos[0], pos[1], pos[2]),
    orientation : {
        direction : new Cesium.Cartesian3(dir[0], dir[1], dir[2]),
        up : new Cesium.Cartesian3(up[0], up[1], up[2])
    }
  })
}