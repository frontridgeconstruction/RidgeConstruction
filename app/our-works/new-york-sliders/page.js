import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'New York Sliders',
	description: 'New York Sliders is a gourmet slider restaurant known for its diverse menu and urban dining experience.',
}

export default function NewYorkSlidersPage() {
	return (
		<ProjectDetail
			title='New York Sliders'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1800,q_auto,f_auto,c_fill/v1763968869/Screenshot_20240724-154333_Fiverr_ltwxa3.jpg'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968869/Screenshot_20240724-154333_Fiverr_ltwxa3.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968868/Screenshot_20240724-154318_Fiverr_inijbq.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968868/Screenshot_20240724-154306_Fiverr_kdtcek.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968867/Screenshot_20240724-154257_Fiverr_we6s5b.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968867/Screenshot_20240724-154232_Fiverr_qzuf1s.jpg',
			]}
		/>
	)
}
