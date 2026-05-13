import fs from "fs";

const validateTable = ({ parsedObject, allPaths }) => {

    if (!fs.existsSync(allPaths.tablePath)) {

        console.log(
            `${parsedObject.tableName} folder missing at location ${parsedObject.root}/${parsedObject.version}`
        );

        return false;
    };

    return true;
};

export default validateTable;