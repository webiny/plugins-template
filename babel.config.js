const { allWorkspaces } = require("@webiny/project-utils/workspaces");

module.exports = {
    babelrc: true,
    babelrcRoots: allWorkspaces()
};
