import fs from "fs";
import path from "path";

const parseInput = (input) => {

    const parts = input.split("/");

    if (parts.length !== 4) {
        console.log("Invalid route structure");
        return null;
    };

    return {
        root: parts[0],
        version: parts[1],
        tableName: parts[2],
        command: parts[3]
    };
};

const validateInput = ({ inRouteObject }) => {

    if (!inRouteObject) {
        return false;
    };

    // Step 1 : Validate Root

    if (inRouteObject.root !== "Api") {
        console.log("Invalid root");
        return false;
    };

    // Step 2 : Validate Version

    if (!inRouteObject.version.startsWith("V")) {
        console.log("Invalid version");
        return false;
    };

    // Step 3 : Build Endpoint Path

    const endpointPath = path.join(
        process.cwd(),
        inRouteObject.root,
        inRouteObject.version,
        inRouteObject.tableName,
        inRouteObject.command
    );

    console.log("endpointPath :", endpointPath);

    // Step 4 : Check Existing Endpoint

    if (fs.existsSync(endpointPath)) {
        console.log("Endpoint already exists");
        return false;
    };

    console.log("Endpoint does not exist");
    console.log("Safe to generate");

    return true;
};

const startFunc = () => {

    const route = process.argv[2];

    if (!route) {
        console.log("Please provide route");
        return;
    };

    const parsedObject = parseInput(route);

    console.log("parsedObject :", parsedObject);

    validateInput({
        inRouteObject: parsedObject
    });
};

startFunc();