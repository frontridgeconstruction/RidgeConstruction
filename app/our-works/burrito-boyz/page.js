import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Burrito Boyzs',
	description:
		'Burrito Boyzs is a fast-casual restaurant chain specializing in made-to-order burritos and Mexican-inspired cuisine.',
}

export default function BurritoBoyzsPage() {
	return (
		<ProjectDetail
			title='Burrito Boyz'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1800,q_auto,f_auto,c_fill/v1763969090/BurritoBoysEllesmere-08170-scaled_n33xbm.webp'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969090/BurritoBoysEllesmere-08170-scaled_n33xbm.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969089/BurritoBoysEllesmere-08152-1-scaled_grjoek.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969088/BurritoBoysEllesmere-08151-scaled_jyqw4o.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969088/BurritoBoysEllesmere-08145-scaled_nttyx6.webp',
			]}
		/>
	)
}
