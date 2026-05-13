import path from "path";

const buildPaths = ({ parsedObject }) => {

    const rootPath = path.join(
        process.cwd(),
        parsedObject.root
    );

    const versionPath = path.join(
        rootPath,
        parsedObject.version
    );

    const tablePath = path.join(
        versionPath,
        parsedObject.tableName
    );

    const endpointPath = path.join(
        tablePath,
        parsedObject.command
    );

    return {
        rootPath,
        versionPath,
        tablePath,
        endpointPath
    };
};

export default buildPaths;