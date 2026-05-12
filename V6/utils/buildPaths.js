import path from "path";

const buildPaths = ({ inRouteObject }) => {

    const rootPath = path.join(
        process.cwd(),
        inRouteObject.root
    );

    const versionPath = path.join(
        rootPath,
        inRouteObject.version
    );

    const tablePath = path.join(
        versionPath,
        inRouteObject.tableName
    );

    const endpointPath = path.join(
        tablePath,
        inRouteObject.command
    );

    return {
        rootPath,
        versionPath,
        tablePath,
        endpointPath
    };
};

export default buildPaths;
