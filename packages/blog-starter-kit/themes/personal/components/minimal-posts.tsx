import { PostFragment } from '../generated/graphql';
import { MinimalPostPreview } from './minimal-post-preview';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MinimalPosts = ({ posts }: Props) => {
	console.log('posts', posts);	
	return (
		<section className="flex w-full flex-col items-stretch gap-12 ">
			{posts.map((post) => (
				<MinimalPostPreview
					key={post.id}
					title={post.title}
					date={post.publishedAt}
					author={post.author}
					imageUrl={post.coverImage?.url || '/placeholder.jpg'}
					description={post.brief}
					slug={post.slug}
					commentCount={post.comments?.totalDocuments}
				/>
			))}
		</section>
	);
};
