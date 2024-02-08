/* eslint-disable react/prop-types */
import { getImageUrl } from '../utils/utils.js';

export default function Profile({ nome, imageId, profession, nawards, awards, discoveries }) {
	return (
		<section className="profile">
			<h2>{nome}</h2>
			<img className="avatar" src={getImageUrl(imageId)} alt={nome} width={70} height={70} />
			<ul>
				<li>
					<b>Profession: </b>
					{profession}
				</li>
				<li>
					<b>Awards: {nawards} </b>({awards})
				</li>
				<li>
					<b>Discovered: </b>
					{discoveries}
				</li>
			</ul>
		</section>
	);
}
