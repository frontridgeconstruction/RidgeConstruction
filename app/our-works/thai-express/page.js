import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Thai Express',
	description: '',
}

export default function ThaiExpressPage() {
	return (
		<ProjectDetail
			title='Thai Express'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1800,q_auto,f_auto,c_fill/v1763968870/Screenshot_20250602-212820_Fiverr_u1suky.jpg'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968872/Screenshot_20250602-212902_Fiverr_equcvw.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968872/Screenshot_20250602-212944_Fiverr_n0om48.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968873/Screenshot_20250602-213012_Fiverr_civmtf.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968874/Screenshot_20250602-213028_Fiverr_qor9j3.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968870/Screenshot_20250602-212832_Fiverr_n6c8oo.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968870/Screenshot_20250602-212820_Fiverr_u1suky.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968871/Screenshot_20250602-212845_Fiverr_l0guoq.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968873/Screenshot_20250602-212957_Fiverr_klyuvw.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968875/Screenshot_20250602-213043_Fiverr_yw4gku.jpg',
			]}
		/>
	)
}
