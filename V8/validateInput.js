import parseInput from "./helpers/parseInput.js";

import validateRoot from "./helpers/validateRoot.js";
import validateVersion from "./helpers/validateVersion.js";
import validateTable from "./helpers/validateTable.js";
import validateEndpoint from "./helpers/validateEndpoint.js";

import buildPaths from "./utils/buildPaths.js";

const validateInput = ({ route }) => {

    const parsedObject = parseInput(route);

    if (!parsedObject) {
        return false;
    };

    const allPaths = buildPaths({
        parsedObject
    });

    if (!validateRoot({
        parsedObject,
        allPaths
    })) {
        return false;
    };

    if (!validateVersion({
        parsedObject,
        allPaths
    })) {
        return false;
    };

    if (!validateTable({
        parsedObject,
        allPaths
    })) {
        return false;
    };

    if (!validateEndpoint({
        parsedObject,
        allPaths
    })) {
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

    validateInput({
        route
    });
};

startFunc();