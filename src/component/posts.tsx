import { PostType } from '@/interface'
import Link from 'next/link'
import { FC } from "react"

const Posts: FC<{data : PostType[]}> = ({data}) => {
	return (
		<>
			<table>
				<thead>
					<th>ID</th>
					<th>Body</th>
				</thead>
				<tbody>
					{data.map(c => (
						<tr key={c.id}>
							<td>{c.id}</td>
							<td>
								<Link href={`/posts/${c.id}`}>{c.body}</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Posts
