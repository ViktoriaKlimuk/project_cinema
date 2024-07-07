import { FC } from "react"
import { IHome } from "./home.interface"
import Meta from "utils/meta/Meta"
import Heading from "components/ui/heading/Heading"
import Slider from "@/components/ui/slider/Slider"
import SubHeading from "@/components/ui/heading/SubHeading"
import Gallery from "@/components/ui/gallery/Gallery"
import styles from '../../ui/gallery/Gallery.module.scss'
import GalleryActor from "@/components/ui/gallery/GalleryActors/GalleryActor"
import GenresSlide from "../collections/GenresSlide"
import GalleryCategories from "@/components/ui/gallery/GalleryCategories"

const Home: FC<IHome> = ({ slides, actors, trendingMovies, genres, freshMovies}) => {
	return (
		<Meta
			title="Смотреть фильмы онлайн"
			description="Смотреть бесплатно фильмы онлайн в высоком качестве"
		>
			<Heading title='Смотреть фильмы онлайн'/>

			{slides.length && <Slider slides={slides}/>}


			<section className={styles.section}>
				<GalleryCategories />
			</section>


			<section className={styles.section}>
				<SubHeading title="Сейчас смотрят"/>
				{trendingMovies.length && <Gallery items={trendingMovies}/>}
			</section>

			<section className={styles.sectionActors}>
				<SubHeading title="Лучшие актеры"/>
				{actors.length && <GalleryActor items={actors}/>}
			</section>

			<section className={styles.section}>
				<SubHeading title="Новинки"/>
				{trendingMovies.length && <Gallery items={freshMovies}/>}
			</section>

			<section className={styles.sectionGenres}>
				<SubHeading title="Категории"/>
				{actors.length && <GenresSlide items={genres}/>}
			</section>


		</Meta>
	)
}

export default Home