import fs from "fs";

const validateVersion = ({ parsedObject, allPaths }) => {

    if (!fs.existsSync(allPaths.versionPath)) {

        console.log(
            `${parsedObject.version} folder missing at location ${parsedObject.root}`
        );

        return false;
    };

    return true;
};

export default validateVersion;