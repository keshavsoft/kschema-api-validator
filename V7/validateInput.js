import parseInput from "./helpers/parseInput.js";
import checkFolders from "./helpers/checkFolders.js";

const startFunc = () => {

    const route = process.argv[2];

    if (!route) {
        console.log("Please provide route");

        return;
    };

    const parsedObject = parseInput(route);

    checkFolders({
        inRouteObject: parsedObject
    });
};

startFunc();