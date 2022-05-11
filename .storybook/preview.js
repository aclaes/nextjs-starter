import GlobalStyle from "../components/GlobalStyle";

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];
