import fs from "fs/promises";
import { themes } from "./themes";
import { toKebabCase } from "./utils";

async function main() {
  try {
    await fs.rm("./themes", { recursive: true, force: true });
    await fs.mkdir("./themes", { recursive: true });

    const packageJsonPath = "./package.json";
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
    packageJson.contributes = packageJson.contributes || {};
    packageJson.contributes.themes = [];

    for (const theme of themes) {
      try {
        const fileName = toKebabCase(
          `${theme.colors.name}-${theme.tokens.name}`
        );
        const path = `./themes/${fileName}.json`;
        const themeCompiled = {
          name: `${theme.colors.name} (${theme.tokens.name})`,
          colors: theme.colors.colors,
          tokenColors: theme.tokens.tokens,
        };

        console.log(`Writing theme to ${path}`);
        await fs.writeFile(path, JSON.stringify(themeCompiled, null, 2));

        packageJson.contributes.themes.push({
          label: themeCompiled.name,
          uiTheme: "vs-dark",
          path: `./themes/${fileName}.json`,
        });
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    }

    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
