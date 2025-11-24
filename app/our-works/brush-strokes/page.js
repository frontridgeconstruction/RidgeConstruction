import ProjectDetail from '../../components/projectdetails'

export const metadata = {
	title: 'Brush Strokes - Our Works',
	description:
		'Nail Boutique Salon interior featuring modern design, elegant furnishings, and a relaxing atmosphere for an enhanced customer experience.',
}

export default function BrushStrokesPage() {
	return (
		<ProjectDetail
			title='Brush Strokes'
			description=''
			hero='https://res.cloudinary.com/diga1onyl/image/upload/w_1800,q_auto,f_auto,c_fill/v1763968866/BrushStrokes-08289-scaled_ufoj09.webp'
			gallery={[
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968865/BrushStrokes-08256-scaled_kdjrnf.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968865/BrushStrokes-08268-scaled_utqlia.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968865/BrushStrokes-08238-scaled_qqaf8e.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968864/BrushStrokes-08225-scaled_mcrwij.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968864/BrushStrokes-08228-scaled_wgslcl.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968866/BrushStrokes-08289-scaled_ufoj09.webp',	
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968864/BrushStrokes-08234-scaled_ry4riw.webp',
				'https://res.cloudinary.com/diga1onyl/image/upload/w_1500,q_auto,f_auto,c_fill/v1763968863/BrushStrokes-08195-scaled_bjzncu.webp',
		
			]}
		/>
	)
}
