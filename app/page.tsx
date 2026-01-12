import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
	return (
		<div className="prose dark:prose-invert">
			{[...allPosts].sort((a, b) => {
				const dateA = new Date(a.date);
				const dateB = new Date(b.date)
				return dateA < dateB ? 1 : -1
			}).map((post) => (
				<article key={post._id}>
					<Link href={post.slug}>
						<h2 className="mb-0">{post.title}</h2>
					</Link>
					{post.description && <p className="mt-1 mb-0">{post.description}</p>}
					<span>{new Date(post.date).toLocaleDateString(undefined, {
						year: "numeric", month: "long", day: "numeric"
					})}</span>
				</article>
			))}
		</div>
	);
}
