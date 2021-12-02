import MainLayout from "../../layout/MainLayout"
import Head from '../../components/Head/Head'
import SliderMain from "../../components/Slider/SliderMain"
import SlideDidi from "../../components/slides-didi/SlideDidi"
import Icons from "../../components/Sections/Icons"
import FormEmail from "../../components/Forms/FormEmail"
import SlideSecond from "../../components/slides-didi/SlideSecond"
import FormDidi from "../../components/Forms/FormDidi"

const AlianzaDidi = () => {

	const slideList = [
		<SlideDidi />,
		<SlideSecond
			backgroundImg="person"
			color="#1c580dAA"
			mainTitle="PROGRAMA DE SALUD"
			secondTitle="GRATIS"
			img="/logo/logo-blanco.png"
			link="/beneficios/programa-de-salud"
		/>,
		<SlideSecond
			backgroundImg="mecanic"
			color="#EF861CAA"
			mainTitle="Instalación de GNV"
			secondTitle="10% DE DESCUENTO"
			img="/logo/logo-blanco.png"
			link="/servicios/instalacion-gnv"
		/>,
		<SlideSecond
			backgroundImg="oil"
			color="#1c580dAA"
			mainTitle="Lubricantes y aditivos"
			secondTitle="15% DE DESCUENTO"
			img="/icon/servitek.svg"
		/>,
		<SlideSecond
			backgroundImg="disk"
			color="#EF861CAA"
			mainTitle="Mécanica general y frenos"
			secondTitle="12% DE DESCUENTO"
			img="/icon/servitek.svg"
		/>,
		<SlideSecond
			backgroundImg="car-back"
			color="#1c580dAA"
			mainTitle="Análisis de gases"
			secondTitle="20% DE DESCUENTO"
			img="/logo/logo-blanco.png"
		/>,
		<SlideSecond
			backgroundImg="car-panel"
			color="#EF861CAA"
			mainTitle="Prueba hidrostática"
			secondTitle="20% DE DESCUENTO"
			img="/logo/logo-blanco.png"
		/>,
		<SlideSecond
			backgroundImg="car-aside"
			color="#1c580dAA"
			mainTitle="Compra del SOAT"
			secondTitle="5% DE DESCUENTO"
			img="/logo/logo-blanco.png"
		/>
	]

	return <MainLayout>
		<Head>
			<title>Aliza DIDI</title>
		</Head>

		<SliderMain
			slideList={slideList}
			top
		/>

		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

		<div className="text">
			<p>Por ser parte de la familia DIDI conductores, si instalas gas natural vehicular con nosotros tendrás acceso a muy buenos beneficios los cuales podrás hacer efectivos en:</p>
			<p>
				La oficina de ateción DiDi Av Caracas 23 - 33 Sur.<br />(Servitek - Colombiagas Vehicular)
			</p>
		</div>

		<FormDidi />

		<br /><br /><br /><br />

		<Icons />

		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7954.147574776101!2d-74.1038668!3d4.5807723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0ec797bfca78393!2sSERVITEK!5e0!3m2!1ses!2sco!4v1638223294712!5m2!1ses!2sco" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>

		<style jsx>{`
		
			iframe {
				border: none;
				position: relative;
				z-index: 1;
			}

			.text {
				font-size: 1rem;
				margin-bottom: 4rem;
				padding: 0 4em;
			}

			p {
				color: white;
				font-size: 2.5em;
				text-align: center;
				position: relative;
				margin-bottom: 1em;
				font-weight: 100;
			}

			img {
				display: block;
				height: 2rem;
				margin: 2rem auto;
				animation: move 1s infinite alternate-reverse;
			}

			@keyframes move {
				from {
					transform: translateY(-.3rem)
				}

				to {
					transform: translateY(.3rem)
				}
			}

			@media screen and (max-width: 1120px) {
				
				.text {
					font-size: .8rem;
				}

			}

			@media screen and (max-width: 925px) {
				
				.text {
					font-size: .7rem;
				}

			}

			@media screen and (max-width: 810px) {
				
				.text {
					font-size: .6rem;
				}

			}

			@media screen and (max-width: 700px) {
				
				.text {
					font-size: .5rem;
					font-weight: 600;
				}

			}

			@media screen and (max-width: 450px) {
				
				.text {
					font-size: .4rem;
					padding: 0 2em;
				}

			}
		
		`}</style>

	</MainLayout>
}

export default AlianzaDidi