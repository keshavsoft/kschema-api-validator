import parseInput from "./helpers/parseInput.js";
import validateRoot from "./helpers/validateRoot.js";
import validateVersion from "./helpers/validateVersion.js";
import validateTable from "./helpers/validateTable.js";
import validateEndpoint from "./helpers/validateEndpoint.js";

const validateInput = ({ inRouteObject }) => {

    if (!inRouteObject) {
        return false;
    };

    if (!validateRoot({ inRouteObject })) {
        return false;
    };

    if (!validateVersion({ inRouteObject })) {
        return false;
    };

    if (!validateTable({ inRouteObject })) {
        return false;
    };

    if (!validateEndpoint({ inRouteObject })) {
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