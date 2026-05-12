import fs from "fs";
import buildPaths from "../utils/buildPaths.js";

const validateVersion = ({ inRouteObject }) => {

    const { versionPath } = buildPaths({
        inRouteObject
    });

    if (!fs.existsSync(versionPath)) {

        console.log(
            `${inRouteObject.version} folder missing at location ${inRouteObject.root}`
        );

        return false;
    };

    return true;
};

export default validateVersion;