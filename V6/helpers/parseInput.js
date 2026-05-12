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

export default parseInput;
