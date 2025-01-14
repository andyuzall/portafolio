import SqLite from "../public/assets/svg/sqlite.svg";
import PhpIcon from "../public/assets/svg/php.svg";
import NestIcon from "../public/assets/svg/nestjs.svg";
import PostgresIcon from "../public/assets/svg/postgresql.svg";
import BigqueryIcon from "../public/assets/svg/bigquery.svg";
import PythonIcon from "../public/assets/svg/python.svg";
import MuiIcon from "../public/assets/svg/mui.svg";
import NodeIcon from "../public/assets/svg/node.svg";
import GitIcon from "../public/assets/svg/git.svg";
import GitHubIcon from "../public/assets/svg/github.svg";
import FigmaIcon from "../public/assets/svg/figma.svg";
import TrelloIcon from "../public/assets/svg/trello.svg";
import VisualStudioIcon from "../public/assets/svg/vscode.svg";
import LookerIcon from "../public/assets/svg/looker.svg";
import GoogleSheetIcon from "../public/assets/svg/google-sheet.svg";
import HtmlIcon from "../public/assets/svg/html.svg";
import CssIcon from "../public/assets/svg/css.svg";
import JavascriptIcon from "../public/assets/svg/javascript.svg";
import ReactIcon from "../public/assets/svg/react.svg";
import NextJsIcon from "../public/assets/svg/next-js.svg";
import BootstrapIcon from "../public/assets/svg/bootstrap.svg";
import TypescriptIcon from "../public/assets/svg/typescript.svg";
import TailwindIcon from "../public/assets/svg/tailwind.svg";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <HtmlIcon width={32} height={32} /> },
			{ name: "CSS", icon: <CssIcon width={32} height={32} /> },
			{ name: "JS", icon: <JavascriptIcon width={32} height={32} /> },
			{ name: "Typescript", icon: <TypescriptIcon width={32} height={32} /> },
			{ name: "React", icon: <ReactIcon width={32} height={32} /> },
			{ name: "Next JS", icon: <NextJsIcon width={32} height={32} /> },
			{ name: "Tailwind CSS", icon: <TailwindIcon width={32} height={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "Bootstrap", icon: <BootstrapIcon width={32} height={32}  /> },
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "Nest JS", icon: <NestIcon width={40} height={40} /> },
			{ name: "Node JS", icon: <NodeIcon width={32} height={32} /> },
			{ name: "Python", icon: <PythonIcon width={32} height={32} /> },
			{ name: "PHP", icon: <PhpIcon width={40} height={40} /> },
		]
	},
	{
		category: "Bases de datos",
		items: [
			{ name: "SQL", icon: <SqLite width={32} height={32} /> },
			{ name: "Postgresql", icon: <PostgresIcon width={32} height={32} /> },
			{ name: "BigQuery", icon: <BigqueryIcon width={32} height={32} /> },
		]
	},
	{
		category: "Otras herramientas",
		items: [
			{ name: "Git", icon: <GitIcon width={32} height={32} /> },
			{ name: "Github", icon: <GitHubIcon width={32} height={32} /> },
			{ name: "Figma", icon: <FigmaIcon width={32} height={32} /> },
			{ name: "Trello", icon: <TrelloIcon width={32} height={32} /> },
			{ name: "VsCode", icon: <VisualStudioIcon width={32} height={32} /> },
			{ name: "Looker Studio", icon: <LookerIcon width={32} height={32} /> },
			{ name: "Spreadsheet", icon: <GoogleSheetIcon width={32} height={32} /> },
		]
	}
];
