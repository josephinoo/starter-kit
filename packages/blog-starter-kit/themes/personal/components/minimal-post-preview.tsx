import Link from 'next/link';
import Image from 'next/image';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name' | 'profilePicture'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
	description: string;
	imageUrl: string;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount, description, imageUrl, author}: Props) => {
	const postURL = `/${slug}`;

	return (

		<article className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    src={imageUrl}
										width={100}
										height={100}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime= {date} className="text-gray-500">
										<DateFormatter dateString={date} />
                    </time>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href= {postURL} >
                        <span className="absolute inset-0" />
                        {title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600"> {description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <Image src={author.profilePicture || ""} alt="" className="h-10 w-10 rounded-full bg-gray-50" width={100} height={100}/>
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <Link href="">
                            <span className="absolute inset-0" />
                            {author.name}
                          </Link>
                        </p>
                        <p className="text-gray-600">Senior Software Engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

	);
};
