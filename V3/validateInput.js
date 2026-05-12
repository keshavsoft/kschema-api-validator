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

    // ROOT PATH

    const rootPath = path.join(
        process.cwd(),
        inRouteObject.root
    );

    if (!fs.existsSync(rootPath)) {
        console.log("Api folder missing");

        return false;
    };

    // VERSION PATH

    const versionPath = path.join(
        rootPath,
        inRouteObject.version
    );

    if (!fs.existsSync(versionPath)) {
        console.log("Version folder missing");

        return false;
    };

    // TABLE PATH

    const tablePath = path.join(
        versionPath,
        inRouteObject.tableName
    );

    if (!fs.existsSync(tablePath)) {
        console.log("Table folder missing");

        return false;
    };

    // ENDPOINT PATH

    const endpointPath = path.join(
        tablePath,
        inRouteObject.command
    );

    if (!fs.existsSync(endpointPath)) {
        console.log("Endpoint folder missing");

        return false;
    };

    console.log("Endpoint already exists");

    return true;
};

const startFunc = () => {

    const route = process.argv[2];

    if (!route) {
        console.log("Please provide route");

        return;
    };

    const parsedObject = parseInput(route);

    validateInput({
        inRouteObject: parsedObject
    });
};

startFunc();