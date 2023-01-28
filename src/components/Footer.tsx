const Footer = () => {
	return (
		<footer className="center mx-auto max-w-4xl">
			<p style={{ textShadow: "0 0 25px #000" }}>
				Mini project to learn/improve on{" "}
				<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
					TypeScript
				</a>
				,{" "}
				<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
					React
				</a>
				,{" "}
				<a href="https://tanstack.com/query/latest" target="_blank" rel="noreferrer">
					Tanstack Query
				</a>
				,{" "}
				<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
					TailWind
				</a>
				.<br />{" "}
				<a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
					Vite
				</a>{" "}
				and{" "}
				<a href="https://vercel.com/" target="_blank" rel="noreferrer">
					Vercel
				</a>{" "}
				make it stupid easy to develop and deploy.
			</p>
		</footer>
	);
};

export default Footer;
