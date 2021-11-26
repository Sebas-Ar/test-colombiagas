import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Nav = ({ setEnableNav, enableNav }) => {

	const router = useRouter()

	const [linkSelected, setLinkSelected] = useState('')


	useEffect(() => {
		setLinkSelected(router.asPath)
	}, [])

	const linkList = [
		{ title: 'Inicio', url: '/' },
		{ title: '¿Quiénes somos?', url: '/quienes-somos' },
		{
			title: 'servicios', url: '/servicios',
			list: [
				{ title: 'instalación GNV', url: '/servicios/instalacion-gnv' },
				{ title: 'Prueba hidrostática', url: '/servicios/prueba-hidrostatica' },
				{ title: 'Mantenimiento', url: '/servicios/mantenimiento' },
				{ title: 'Revisión anual', url: '/servicios/revision-anual' },
				{ title: 'venta de repuestos', url: '/servicios/venta-de-repuestos' },
			]
		},
		{
			title: 'Beneficios', url: '/beneficios',
			list: [
				{ title: 'Programa de salud', url: '/beneficios/programa-de-salud' },
				{ title: 'ahorro', url: '/beneficios/ahorro' },
				{ title: 'combustible', url: '/beneficios/combustible' },
				{ title: 'garantia', url: '/beneficios/garantia' },
			]

		},
		{ title: 'Clientes', url: '/clientes' },
		{ title: 'Debes saber', url: '/debes-saber' },
		{ title: 'Contáctenos', url: '/contactenos' },
	]

	return <nav>

		<button className="close" onClick={() => { setEnableNav(false) }}>
			<svg viewBox="0 0 352 512">
				<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
			</svg>
		</button>

		<ul className="main-link-list">
			{
				linkList.map(mainLink => (
					<li key={mainLink.title} className="main-link" style={linkSelected === mainLink.url || '/' + router.asPath.split('/')[1] === mainLink.url ? {
						background: 'var(--orange)',
						color: 'white'
					} : {}}>
						<Link href={mainLink.url}>
							<a>
								<span>
									{mainLink.title}
								</span>
							</a>
						</Link>
						{
							mainLink.list
								?

								<ul className="second-link-list">
									{
										mainLink.list.map(secondLink => (
											<li key={secondLink.title} className="second-link" style={router.asPath === secondLink.url ? { backgroundColor: 'var(--light-orange)' } : {}}>
												<Link href={secondLink.url}>
													<a>{secondLink.title}</a>
												</Link>
											</li>
										))
									}
								</ul>
								:
								null
						}
					</li>
				))
			}

		</ul>

		<style jsx>{`

			.close {
				display: none;
			}

			.main-link-list {
				display: grid;
				grid-template-columns: repeat(${linkList.length}, auto);
				height: 100%;
				border-right: 1px solid var(--orange);
			}

			.main-link {
				height: 100%;
				border-left: 1px solid var(--orange);
				position: relative;
				color: var(--blue);
			}

			.main-link:hover {
				background: var(--orange);
				color: white;
			}

			.main-link > a {
				align-items: center;
				display: grid;
				padding: 0 1rem;
				height: 100%;
				text-transform: capitalize;
			}

			.second-link-list {
				background-color: var(--orange);
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				visibility: hidden;
			}

			.main-link:hover .second-link-list {
				visibility: visible;
			}

			.second-link a {
				display: block;
				padding: 1rem 1rem;
				text-align: center;
				text-transform: capitalize;
			}

			.second-link:hover {
				background-color: var(--light-orange);
			}

			@media screen and (max-width: 1080px) {

				.close {
					box-sizing: border-box;
					padding: 1rem;
					display: grid;
					position: absolute;
					top: 1rem;
					right: 2rem;
					height: 4rem;
					width: 4rem;
					place-items: center;
					color: white;
					background-color: unset;
				}

				nav {
					position: fixed;
					width: 100%;
					min-height: 100vh;
					background-color: var(--blue-transparent);
					top: 0;
					left: 0;
					display: grid;
					place-items: center;
					transition: transform .5s, opacity .5s;
					opacity: ${enableNav ? '1' : '0'};
					transform: translateY(${enableNav ? '0' : '-100'}%);
				}

				.main-link-list {
					display: grid;
					grid-template-columns: none;
					place-items: center;
					height: auto;
					border: none;
					text-align: center;
				}

				.main-link {
					color: white;
					height: auto;
					border: none;
					margin: .5rem 0;
					font-size: 1.3rem;
					font-weight: 700;
					padding: .2rem 0;
				}

				.main-link > a {
					padding: 0;
				}
			}


		`}</style>
	</nav>
}

export default Nav