"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { TimeLine } from "./TimeLine";
import { HeadingDivider } from "../../../components/HeadingDivider";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="Sobre mi" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							Soy Andy. Técnico Superior en Desarrollo de Aplicaciones Web, con un sólido
							conocimiento en tecnologías como React JS, NextJS, Node.js, SQL, BigQuery y Google Cloud.
						</p>
						<p>
							Actualmente, me desempeño como Head of Data en Atomik Pro, Trading Desk.
						</p>
						<p>Donde lidero equipos de trabajo remoto y gestiono proyectos estratégicos en el ámbito de la publicidad digital.</p>
						<p className="my-3.5">
							Cuento con una trayectoria destacada en la gestión de equipos distribuidos, utilizando
							metodologías ágiles para optimizar la
							colaboración y eficiencia.
						</p>
						<p>
						Mi perfil se caracteriza
						por una fuerte proactividad, excelentes
						habilidades comunicativas y una adaptabilidad
						constante frente a los cambios del entorno
						tecnológico.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
