/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: "/img/weddingincartagena.png",
		title: 'Wedding In Cartagena',
		skills: ['JavaScript', 'Astro', 'CSS, Tailwind'],
		descripcion:
			'For the development of Wedding in Cartagena, I utilized HTML, CSS (including Flexbox and Grid for responsive layouts), JavaScript, and React to create interactive and dynamic applications with advanced techniques and best practices. Additionally, I incorporated the Astro framework to optimize resources, ensuring a seamless and fast user experience.I focused on creating a functional and aesthetically pleasing user interface, prioritizing simplicity to draw the attention of potential clients. This design was based on comprehensive competitor research to understand market trends and effective sales strategies.',
		demoURL: 'https://www.weddingincartagena.com/',
		repoURL: 'https://gitlab.com/uroboros2/weddingincartagena.com',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://www.weddingincartagena.com/_astro/values_16.BUHFBS_k_Z1eea2R.webp',
		title: 'LondriApp',
		skills: ['Figma', 'Astro', 'CSS, Tailwind'],
		descripcion:
			' In collaboration with my team, we conducted comprehensive market research to analyze potential competitors and identify the key features of existing solutions. This research helped us define the essentials for our MVP, complemented by interviews with various stakeholders to ensure alignment with user needs. With the basic requirements and competition shortcomings identified, we began prototyping low-fidelity designs. Through iterative processes, we improved usability and visibility across both desktop and mobile formats, ensuring a seamless user experience.',
		demoURL: 'https://www.figma.com/proto/K1iyedrXqy264RBLmDUDCj/Londri-Web-Final?node-id=0-1&t=TBJUr07nL8l9fMcQ-1',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});