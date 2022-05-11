import React from 'react';
import Button from './Button';

const config = {
	title: 'Components/Button',
	component: Button,
};
export default config;

export function Primary() {
	return <Button>Click me</Button>;
}

export function Secondary() {
	return <Button color="secondary">Click me</Button>;
}
