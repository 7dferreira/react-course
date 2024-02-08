import Profile from './Profile.jsx';

export default function Gallery() {
	return (
		<div>
			<h1>Notable Scientists</h1>
			<Profile
				nome="Maria Skłodowska-Curie"
				imageId="szV5sdG"
				profession="physicist and chemist"
				nawards="4"
				awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
				discoveries="polonium (chemical element)"
			/>

			<Profile
				nome="Katsuko Saruhashi"
				imageId="YfeOqp2"
				profession="geochemist"
				nawards="2"
				awards="Miyake Prize for geochemistry, Tanaka Prize"
				discoveries="a method for measuring carbon dioxide in seawater"
			/>
		</div>
	);
}
