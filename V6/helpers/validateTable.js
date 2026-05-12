import fs from "fs";
import buildPaths from "../utils/buildPaths.js";

const validateTable = ({ inRouteObject }) => {

    const { tablePath } = buildPaths({
        inRouteObject
    });

    if (!fs.existsSync(tablePath)) {

        console.log(
            `${inRouteObject.tableName} folder missing at location ${inRouteObject.root}/${inRouteObject.version}`
        );

        return false;
    };

    return true;
};

export default validateTable;