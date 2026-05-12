import fs from "fs";
import buildPaths from "../utils/buildPaths.js";

const validateRoot = ({ inRouteObject }) => {

    const { rootPath } = buildPaths({
        inRouteObject
    });

    if (!fs.existsSync(rootPath)) {

        console.log(
            `${inRouteObject.root} folder missing at location ${process.cwd()}`
        );

        return false;
    };

    return true;
};

export default validateRoot;