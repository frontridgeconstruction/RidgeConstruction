import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Burger King - Our Works',
	description:
		'Modern fast-food restaurant interior with bold branding, functional layout, and vibrant atmosphere.',
}

export default function BurgerKingPage() {
	return (
		<ProjectDetail
			title='Burger King'
			description='A high-energy fast-food restaurant renovation featuring bold red and black branding, optimized customer flow, durable materials, and vibrant lighting that enhances the brand experience while ensuring operational efficiency.'
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1200,q_auto,f_auto,c_fill/v1763968818/70S_6873-min_oh0j2t.jpg'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968816/70S_6863-min_j4wwgn.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968816/70S_6869_copy-min_dt6fof.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968818/70S_6893-min_mdde8d.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968814/70S_6853_copy-min_xvgfny.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968818/70S_6873-min_oh0j2t.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968814/70S_6838-min_xo1ifw.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968814/70S_6848_copy-min_g6vuql.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968818/70S_6878-min_d5fdpf.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968819/70S_6880-min_lbxyzt.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968814/70S_6853_copy-min_xvgfny.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968819/70S_6881-min_qjbw2m.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968820/70S_6899-min_oikuxn.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968820/70S_6912_copy-min_lt9m5k.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968819/70S_6910_copy-min_mbupqs.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968814/70S_6856_copy-min_v9mi1k.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968814/70S_6834_copy-min_utcksu.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763968816/70S_6859-min_hb0qgm.jpg',
			]}
		/>
	)
}
