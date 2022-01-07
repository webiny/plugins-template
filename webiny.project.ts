import cliWorkspaces from "@webiny/cli-plugin-workspaces";

// Scaffolds.
import cliScaffold from "@webiny/cli-plugin-scaffold";
import cliScaffoldReactComponent from "@webiny/cli-plugin-scaffold-react-component";

export default {
    name: "plugins-repo-template",
    cli: {
        plugins: [
            cliWorkspaces(),
            cliScaffold(),
            cliScaffoldReactComponent()
        ]
    }
};
