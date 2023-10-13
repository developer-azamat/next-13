import Posts from '@/component/posts'
import { PostType } from '@/interface'
import axios from 'axios'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const getData = async () => {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/posts?_limit=10'
	)

	return data
}

const PostsPage = async () => {
	const data: PostType[] = await getData()

	if (!data.length) {
		notFound()
	}

	return (
		<>
		<p>hello </p>
			<Posts data={data}/>
		</>
	)
}

export default PostsPage
