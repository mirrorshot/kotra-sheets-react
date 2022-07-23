const execa = require("execa");
const fs = require("fs");

(async () => {
    try {
        await execa("git", ["checkout", "--orphan", "pages"]);
        console.log("Building...");
        await execa("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await execa("git", ["--work-tree", folderName, "add", "--all"]);
        await execa("git", ["--work-tree", folderName, "commit", "-m", "pages"]);
        console.log("Pushing to pages...");
        await execa("git", ["push", "origin", "HEAD:pages", "--force"]);
        await execa("rm", ["-r", folderName]);
        await execa("git", ["checkout", "-f", "main"]);
        await execa("git", ["branch", "-D", "pages"]);
        console.log("Successfully deployed");
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();