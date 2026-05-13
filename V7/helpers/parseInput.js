const parseInput = (input) => {

    const parts = input.split("/");

    if (parts.length !== 4) {
        console.log("Invalid route structure");

        return null;
    };


    
    const [root, version, tableName, command] = parts;

    return {
        root,
        version,
        tableName,
        command
    };
};



export default parseInput;