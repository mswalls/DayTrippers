
    'use strict';
     
    // /**
    //  * @param {number} distance - distance (km) from the point represented by centerPoint
    //  * @param {array} centerPoint - two-dimensional array containing center coords [latitude, longitude]
    //  * @description
    //  *   Computes the bounding coordinates of all points on the surface of a sphere
    //  *   that has a great circle distance to the point represented by the centerPoint
    //  *   argument that is less or equal to the distance argument.
    //  *   Technique from: Jan Matuschek <http://JanMatuschek.de/LatitudeLongitudeBoundingCoordinates>
    //  * @author Alex Salisbury
    // */
    
    var lat=33.7489954;
    var lng=-80.62173;

    var minLat, maxLat, minLon, maxLon;

    // var getBoundingBox = 
function getBoundingBox(centerPoint, distance) {
    console.log(centerPoint);

      var MIN_LAT, MAX_LAT, MIN_LON, MAX_LON, R, radDist, degLat, degLon, radLat, radLon, deltaLon;
      if (distance < 0) {
        return 'Illegal arguments';
      }
      // helper functions (degrees<–>radians)
      Number.prototype.degToRad = function () {
        return this * (Math.PI / 180);
      };
      Number.prototype.radToDeg = function () {
        return (180 * this) / Math.PI;
      };
      // coordinate limits
      MIN_LAT = (-90).degToRad();
      MAX_LAT = (90).degToRad();
      MIN_LON = (-180).degToRad();
      MAX_LON = (180).degToRad();
      // Earth's radius (km)
      R = 6378.1;
      // angular distance in radians on a great circle
      radDist = distance / R;
      // center point coordinates (deg)
      degLat = centerPoint[0];
      degLon = centerPoint[1];
      // center point coordinates (rad)
      radLat = degLat.degToRad();
      radLon = degLon.degToRad();
      // minimum and maximum latitudes for given distance
      minLat = radLat - radDist;
      maxLat = radLat + radDist;
      // minimum and maximum longitudes for given distance
      minLon = void 0;
      maxLon = void 0;
      // define deltaLon to help determine min and max longitudes
      deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
      if (minLat > MIN_LAT && maxLat < MAX_LAT) {
        minLon = radLon - deltaLon;
        maxLon = radLon + deltaLon;
        if (minLon < MIN_LON) {
          minLon = minLon + 2 * Math.PI;
        }
        if (maxLon > MAX_LON) {
          maxLon = maxLon - 2 * Math.PI;
        }
      }
      // a pole is within the given distance
      else {
        minLat = Math.max(minLat, MIN_LAT);
        maxLat = Math.min(maxLat, MAX_LAT);
        minLon = MIN_LON;
        maxLon = MAX_LON;
      }
      return [
        minLon.radToDeg(),
        console.log("minLng " + minLon.radToDeg()),

        minLat.radToDeg(),
        console.log("minLat " + minLat.radToDeg()),

        maxLon.radToDeg(),
        console.log("maxLng " + maxLon.radToDeg()),

        maxLat.radToDeg(),
        console.log("maxLat " + maxLat.radToDeg())

      ];

    };

    getBoundingBox([lat,lng],300);

    //maxLat = Northern boundary
    //minLat = Southern boundary
    //maxLon = Eastern boundary
    //minLon = Western boundary

    // http://api.geonames.org/citiesJSON?north=36.44395688601068&south=31.054033913989322&east=-77.38003110725805&west=-83.86342889274196&lang=de&username=nmanderson314