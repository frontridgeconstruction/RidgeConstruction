import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Greenbook Dentistry',
	description: '',
}

export default function GreenbookDentistryPage() {
	return (
		<ProjectDetail
			title='Greenbook Dentistry'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1800,q_auto,f_auto,c_fill/v1763969062/70S_4879-min_bgidnb.jpg'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969062/70S_4879-min_bgidnb.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969063/70S_4892-min_eabr5a.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969063/70S_4890-min_vzn0dj.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969062/70S_4884-min_zcynu3.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969063/70S_4890-min_vzn0dj.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969062/70S_4884-min_zcynu3.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969060/70S_4873-min_mjsi8c.jpg',
			]}
		/>
	)
}
