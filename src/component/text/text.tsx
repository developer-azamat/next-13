import { FC } from 'react'
import { TextProps } from './text.props'
import stylyles from "./text.module.css"

const Text : FC <TextProps> = ({text}) => {
	return (
		<div className={stylyles.text}>{text}</div>
	)
}

export default Text