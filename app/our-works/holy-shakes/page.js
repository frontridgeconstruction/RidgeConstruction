import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Holy Shakes',
	description: 'Holy Shakes is a gourmet burger and shake restaurant known for its creative menu and vibrant atmosphere.',
}

export default function HolyShakesPage() {
	return (
		<ProjectDetail
			title='Holy Shakes'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1800,q_auto,f_auto,c_fill/v1763969087/ShakesKathiRoll-00127-scaled_ou2mxv.webp'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969087/ShakesKathiRoll-00127-scaled_ou2mxv.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969087/ShakesKathiRoll-00126-scaled_lxb1wi.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969086/ShakesKathiRoll-00108-2-scaled_ua9yxn.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969085/ShakesKathiRoll-00102-scaled_wkwbnw.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969085/ShakesKathiRoll-00095-scaled_q1mhy2.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969084/ShakesKathiRoll-00085-1-scaled_ycmik6.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969083/ShakesKathiRoll-00084-2-scaled_tbtost.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969082/ShakesKathiRoll-00082-scaled_qmiuc7.webp'
			]}
		/>
	)
}
