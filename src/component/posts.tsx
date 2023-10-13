import { PostType } from '@/interface'
import Link from 'next/link'
import { FC } from "react"

const Posts: FC<{data : PostType[]}> = ({data}) => {
	return (
		<>
			{data.map(c => (
				<div key={c.id}>
					<Link href={`/posts/${c.id}`}>{c.title}</Link>
				</div>
			))}
		</>
	)
	// console.log(data)
	// return <p>helloo</p>
}

export default Posts
