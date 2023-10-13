"use client"
import { PostType } from '@/interface'
import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Text from './text/text'
import Provider from '@/app/provider'

const Home = () => {
	const [posts, setPosts] = useState<PostType[]>([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				const { data } = await axios.get(
					'https://jsonplaceholder.typicode.com/posts?_limit=10'
				)

				setPosts(data)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		getData()
	}, [])
	return (
			<Provider>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					posts.map(c => (
						<div key={c.id}>
							<Link href={`/posts/${c.id}`}>{c.title}</Link>
						</div>
					))
				)}
				<Text text='home page is here' />
			</Provider>
		
	)
}

export default Home