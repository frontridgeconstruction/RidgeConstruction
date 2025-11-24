import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Shelbys',
	description: 'Shelbys is a contemporary dining establishment known for its innovative cuisine and stylish ambiance.',
}

export default function ShelbysPage() {
	return (
		<ProjectDetail
			title='Shelbys'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1200,q_auto,f_auto,c_fill/v1763969052/70S_5910_aqhow5.jpg'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969052/70S_5910_aqhow5.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969050/70S_5933_copy_yysuzs.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969050/70S_5948_kchfzt.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969050/70S_5959_copy_si54fd.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969049/70S_5924_copy_wqbb7g.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969047/70S_5904_mr2wfm.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969045/70S_5873_copy_sz4dkg.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969045/70S_5899_bku42v.jpg',
				'https://res.cloudinary.com/diga1onyl/image/upload/v1763969043/70S_5880_jz5rqx.jpg',
			]}
		/>
	)
}
