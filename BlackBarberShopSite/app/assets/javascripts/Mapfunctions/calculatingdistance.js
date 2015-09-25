function distancecalc(pos1, pos2){
    var pi = Math.PI
    var latradians = {lat1:(pos1.lat/180)*pi, lat2:(pos2.lat/180)*pi};
    var longradians = {long1:(pos1.lng/180)*pi, long2:(pos2.lng/180)*pi};


    var sinCalc = Math.sin(latradians.lat1)*Math.sin(latradians.lat2)
    var cosCalc = Math.cos(latradians.lat1)*Math.cos(latradians.lat2)*Math.cos(longradians.long2-longradians.long1)
    var cosPlusSinCalc = sinCalc + cosCalc
    var distanceInMiles = Math.acos(cosPlusSinCalc)*3959

return distanceInMiles

}
