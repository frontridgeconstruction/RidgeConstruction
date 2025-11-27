import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Churchs Chicken',
	description: '',
}

export default function ChurchsChickenPage() {
	return (
		<ProjectDetail
			title='Churchs Chicken'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_2000,q_auto,f_auto,c_fill/v1764007542/Churchs-Chicken-HF-4217-scaled_rsawmr.webp'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1764007542/Churchs-Chicken-HF-124729-scaled_uqdwxl.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1764007541/Churchs-Chicken-HF-4221-scaled_str1bx.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1764007542/Churchs-Chicken-HF-4217-scaled_rsawmr.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1764007540/Churchs-Chicken-HF-4199-1-scaled_o7na68.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1764007540/Churchs-Chicken-HF-130255-scaled_rkccbu.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1764007539/Churchs-Chicken-HF-130732-scaled_w1bp0f.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1764007540/Churchs-Chicken-HF-4197-scaled_skgct7.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1764007539/Churchs-Chicken-HF-130309-scaled_fyg0uo.webp',
			]}
		/>
	)
}
