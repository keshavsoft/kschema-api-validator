import fs from "fs";
import path from "path";

const parseInput = (input) => {

    const parts = input.split("/");

    if (parts.length !== 4) {
        console.log("Invalid route structure");

        return null;
    };

    const [root, version, tableName, command] = parts;

    return { root, version, tableName, command };
};

const validateInput = ({ inRouteObject }) => {

    if (!inRouteObject) return false;

    const folders = [
        inRouteObject.root,
        inRouteObject.version,
        inRouteObject.tableName,
        inRouteObject.command
    ];

    let currentPath = process.cwd();

    for (let i = 0; i < folders.length; i++) {

        const folderName = folders[i];

        if (!fs.existsSync(path.join(currentPath, folderName))) {

            console.log(
                `${folderName} folder missing at location ${
                    currentPath.replace(process.cwd(), "").replaceAll("\\", "/") || "/"
                }`
            );

            return false;
        };

        currentPath = path.join(currentPath, folderName);
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