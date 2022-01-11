import cliWorkspaces from "@webiny/cli-plugin-workspaces";
import cliWatch from "@webiny/cli-plugin-deploy-pulumi";

// Scaffolds.
import cliScaffold from "@webiny/cli-plugin-scaffold";
import cliScaffoldReactComponent from "@webiny/cli-plugin-scaffold-react-component";

export default {
    name: "plugins-repo-template",
    cli: {
        plugins: [
            cliWorkspaces(),
            cliWatch(),
            cliScaffold(),
            cliScaffoldReactComponent()
        ]
    }
};
