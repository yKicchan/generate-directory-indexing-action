import * as core from "@actions/core";
import type { Path } from "glob";

const html = /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Index of {{location}}</title>
  {{css}}
</head>
<body>
  <h1>Index of {{location}}</h1>
  {{list}}
</body>
</html>
`;

export function generateHTML(dir: Path, css: string, list: string) {
	const result = html.replaceAll("{{location}}", dir.name).replace("{{css}}", css).replace("{{list}}", list);
	core.debug(`- Generated ${dir.parentPath}${dir.name}/index.html: ${result}`);
	return result;
}