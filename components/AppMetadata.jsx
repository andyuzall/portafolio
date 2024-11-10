const author = "Andy Uzal";
const description =
	"Desarrollador de Software y amante de los datos y la arquitectura de aplicaciones.";
const url = "https://andyuzal.tech/";
export const AppMetadata = {
	metadataBase: new URL("https://andyuzal.tech/"),
	title: {
		default: `Portafolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Andy Uzal",
		"Andy Uzal - software developer",
		"Frontend developer",
		"Backend developer",
		"Portafolio website",
		"Frontend Developer Portafolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	openGraph: {
		title: `${author} | Portafolio`,
		description: description,
		url: url,
		siteName: `${author} | Portafolio`,
		images: [
			{
				url: "https://andyuzal.tech/screenshot.webp",
				width: 800,
				height: 600,
				alt: "Mi portafolio personal"
			},
			{
				url: "https://andyuzal.tech/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "Mi portafolio personal"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
