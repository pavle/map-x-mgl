var u = require("./../utils/utils.js");
exports.geojsonTile = u.readTxt("./templates/sql/getGeojsonTile.sql");
exports.geojsonTileOverlap = u.readTxt("./templates/sql/getGeojsonTileOverlap.sql");
exports.viewData = u.readTxt("./templates/sql/getViewData.sql");
exports.userValidation = u.readTxt("./templates/sql/getUserValidation.sql");
exports.viewFull = u.readTxt("./templates/sql/getViewFull.sql");
exports.viewRowsId = u.readTxt("./templates/sql/getViewRowsId.sql");
exports.layerIntersectsCountry = u.readTxt("./templates/sql/getIntersectsCountry.sql");
exports.layerIntersectionCountry = u.readTxt("./templates/sql/getIntersectionCountry.sql");
exports.getSourceMetadata = u.readTxt("./templates/sql/getSourceMetadata.sql");
exports.getSourceStat = u.readTxt("./templates/sql/getSourceStat.sql");
exports.getViewMetadata = u.readTxt("./templates/sql/getViewMetadata.sql");
exports.getViewsByProject = u.readTxt("./templates/sql/getViewsByProject.sql");
exports.getViewsPublic = u.readTxt("./templates/sql/getViewsPublic.sql");
exports.getProjectViewsStates = u.readTxt("./templates/sql/getProjectViewsStates.sql");
