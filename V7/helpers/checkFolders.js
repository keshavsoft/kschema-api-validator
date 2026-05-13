import fs from "fs";
import path from "path";

const checkFolders = ({ inRouteObject }) => {

    if (!inRouteObject) return false;

    const folders = [
        inRouteObject.root,
        inRouteObject.version,
        inRouteObject.tableName,
        inRouteObject.command
    ];

    let currentPath = process.cwd();

    for (let i = 0; i < folders.length; i++) {

        const folderName = folders[i];

        if (!fs.existsSync(path.join(currentPath, folderName))) {

            console.log(
                `${folderName} folder missing at location ${currentPath.replace(process.cwd(), "").replaceAll("\\", "/") || "/"
                }`
            );

            return false;
        };

        currentPath = path.join(currentPath, folderName);
    };

    console.log("Endpoint already exists");

    return true;
};

export default checkFolders;