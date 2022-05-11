import styled from 'styled-components';

const Button = styled.button`
	border: none;
	padding: 5px 10px;
	background-color: var(--${({ color = 'primary' }) => color}-color);
	color: white;
`;

export default Button;
