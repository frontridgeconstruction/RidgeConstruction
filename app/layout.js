import {Geist, Geist_Mono, Jost} from 'next/font/google'
import './globals.css'
import AppChrome from './components/app-chrome'
import {jsonLdOrganization, jsonLdLocalBusiness, jsonLdWebsite} from '@/lib/seo'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const jost = Jost({
	variable: '--font-jost',
	weight: ['400', '500', '700'],
	subsets: ['latin'],
})

export const metadata = {
	title: {
		default:
			'Front Ridge Construction | Premium Construction Services in Canada',
		template: '%s | Front Ridge Construction',
	},
	description:
		'Front Ridge Construction - Leading construction company in Canada specializing in restaurants, healthcare facilities, corporate offices, and commercial buildings. Professional construction services in Ontario with expert project management.',
	keywords: [
		'construction company Canada',
		'Front Ridge Construction',
		'Ontario construction services',
		'restaurant construction',
		'healthcare facility construction',
		'commercial construction Ontario',
		'corporate office construction',
		'construction contractors Canada',
		'building contractors Ontario',
		'Brampton construction company',
		'commercial renovations',
		'construction project management',
	],
	authors: [{name: 'Front Ridge Construction'}],
	creator: 'Front Ridge Construction',
	publisher: 'Front Ridge Construction',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://frontridge.ca'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Front Ridge Construction | Premium Construction Services in Canada',
		description:
			'Leading construction company in Canada specializing in restaurants, healthcare facilities, corporate offices, and commercial buildings.',
		url: 'https://frontridge.ca',
		siteName: 'Front Ridge Construction',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Front Ridge Construction - Building Excellence',
			},
		],
		locale: 'en_CA',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Front Ridge Construction | Premium Construction Service in Canada',
		description:
			'Leading construction company in Canada specializing in restaurants, healthcare facilities, and commercial buildings.',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/fav.png',
		shortcut: '/fav.png',
		apple: '/fav.png',
	},
}

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdOrganization)}}
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLdLocalBusiness),
					}}
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdWebsite)}}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} antialiased`}>
				<AppChrome>{children}</AppChrome>
			</body>
		</html>
	)
}
