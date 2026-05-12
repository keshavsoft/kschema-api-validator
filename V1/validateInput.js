import path from "path";

const parseInput = (input) => {
    const parts = input.split("/");

    return {
        root: parts[0],
        version: parts[1],
        tableName: parts[2],
        command: parts[3]
    };
};

const validateInput = ({ inRouteObject, showLog = true }) => {
    console.log("inRouteObject : ", inRouteObject);
};

const startFunc = () => {
    const k1 = process.argv;

    console.log("k1", k1);
};

startFunc();
