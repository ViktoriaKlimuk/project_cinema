import Heading from "components/ui/heading/Heading";
import Meta from "utils/meta/Meta";

const Error500 = () => {
	return (
		<Meta title='Cтраница не найдена'>
			<Heading title="500 - Возникла ошибка на сервере"/>
		</Meta>
	)
}

export default Error500