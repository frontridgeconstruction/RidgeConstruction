import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Holy Poly Cow',
	description: '',
}

export default function HolyPolyCowPage() {
	return (
		<ProjectDetail
			title='Holy Poly Cow'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1800,q_auto,f_auto,c_fill/v1763969081/RollyPollyCowBrampton-4285-scaled_clsznw.webp'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969081/RollyPollyCowBrampton-4285-scaled_clsznw.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969078/RollyPollyCowBrampton-4276-scaled_hmqniy.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969077/RollyPollyCowBrampton-143452-scaled_evg5at.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969077/RollyPollyCowBrampton-143317-scaled_jqgki7.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969080/RollyPollyCowBrampton-4281-1-scaled_tqr8ov.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969082/RollyPollyCowBrampton-4288-scaled_y9q9x2.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969080/RollyPollyCowBrampton-4283-scaled_sdibca.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763969079/RollyPollyCowBrampton-4278-scaled_nhygaa.webp',
			]}
		/>
	)
}
