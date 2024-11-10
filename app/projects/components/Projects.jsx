const staticProjects = [
	{
		_id: "1",
		title: "MercApp",
		description: "Tienda Online desarrollada para trabajo de grado DAW.",
		createdAt: "2024-11-05",
		images: ["/mercApp.png"],
		liveUrl: "",
		repoUrl: "",
		stack: ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "Google Auth", "Prisma"]
	  },
	{
	  _id: "2",
	  title: "Portal Interno",
	  description: "Monitoreo, registro y gestion operativa de la organización.",
	  createdAt: "2024-10-15",
	  images: ["/portal-interno.png"],
	  liveUrl: "",
	  repoUrl: "",
	  stack: ["React", "Next.js", "Tailwind CSS", "BigQuery API", "Secret Manager", "Sheet API"]
	},
	{
	  _id: "3",
	  title: "Proyector Digital",
	  description: "Exponiendo los formatos en escena.",
	  createdAt: "2024-08-30",
	  images: ["/proyector-digital.png"],
	  liveUrl: "https://www.atomik-pro.com/proyector-digital/index.html#/proyectorDigital",
	  repoUrl: "",
	  stack: ["Node.js", "Express", "MongoDB", "React JS", "CSS", "Sheet API", "Gmail API"]
	},
  ];
  
  import { ProjectItem } from "../../sections";  
  
  export function Projects() {
	return (
	  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
		{staticProjects
		  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
		  .map((project, index) => (
			<ProjectItem key={project._id} project={project} index={index} />
		  ))}
	  </div>
	);
  }