export default function Button({ children, ...otherProps }) {
	return (
		<button {...otherProps} type="button">
			{children}
		</button>
	);
}
