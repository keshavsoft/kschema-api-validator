import fs from "fs";

const validateRoot = ({ parsedObject, allPaths }) => {

    if (!fs.existsSync(allPaths.rootPath)) {

        console.log(
            `${parsedObject.root} folder missing at location ${process.cwd()}`
        );

        return false;
    };

    return true;
};

export default validateRoot;