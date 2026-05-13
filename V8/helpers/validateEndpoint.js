import fs from "fs";

const validateEndpoint = ({ parsedObject, allPaths }) => {

    if (!fs.existsSync(allPaths.endpointPath)) {

        console.log(
            `${parsedObject.command} folder missing at location ${parsedObject.root}/${parsedObject.version}/${parsedObject.tableName}`
        );

        return false;
    };

    return true;
};

export default validateEndpoint;