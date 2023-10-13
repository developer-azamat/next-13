import axios from 'axios';
async function getDetailedPost (id: string) {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	)

	return data
}

const PagePostDetail = async ({ params }: { params: { id: string } }) => {
	const data = await getDetailedPost(params.id)

	return (
		<div>
			<h2>{data.title} {params.id}</h2>
			<p>{data.body}</p>
		</div>
	)
}

export default PagePostDetail