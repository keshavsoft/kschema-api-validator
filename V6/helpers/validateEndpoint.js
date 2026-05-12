import fs from "fs";
import buildPaths from "../utils/buildPaths.js";

const validateEndpoint = ({ inRouteObject }) => {

    const { endpointPath } = buildPaths({
        inRouteObject
    });

    if (!fs.existsSync(endpointPath)) {

        console.log(
            `${inRouteObject.command} folder missing at location ${inRouteObject.root}/${inRouteObject.version}/${inRouteObject.tableName}`
        );

        return false;
    };

    return true;
};

export default validateEndpoint;
