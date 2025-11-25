'use client'

import Head from 'next/head'

export default function SEO({
	title,
	description,
	canonical,
	ogImage = '/og-image.jpg',
	noindex = false,
}) {
	const siteTitle = 'Front Ridge Construction'
	const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
	const siteUrl = 'https://frontridge.ca'
	const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

	return (
		<Head>
			<title>{fullTitle}</title>
			<meta
				name='description'
				content={description}
			/>
			<link
				rel='canonical'
				href={canonicalUrl}
			/>

			{noindex && (
				<meta
					name='robots'
					content='noindex,nofollow'
				/>
			)}

			<meta
				property='og:title'
				content={fullTitle}
			/>
			<meta
				property='og:description'
				content={description}
			/>
			<meta
				property='og:url'
				content={canonicalUrl}
			/>
			<meta
				property='og:image'
				content={`${siteUrl}${ogImage}`}
			/>
			<meta
				property='og:type'
				content='website'
			/>
			<meta
				property='og:site_name'
				content={siteTitle}
			/>
			<meta
				property='og:locale'
				content='en_CA'
			/>

			<meta
				name='twitter:card'
				content='summary_large_image'
			/>
			<meta
				name='twitter:title'
				content={fullTitle}
			/>
			<meta
				name='twitter:description'
				content={description}
			/>
			<meta
				name='twitter:image'
				content={`${siteUrl}${ogImage}`}
			/>
		</Head>
	)
}
