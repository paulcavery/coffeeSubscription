import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<Link href="/">
						<a className="navbar-brand">
							<Image
								src="/assets/shared/desktop/logo.svg"
								width="237"
								height="27"
							></Image>
						</a>
					</Link>

					<ul className="navbar-nav">
						<li className="nav-item">
							<Link href="/">
								<a class="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</Link>
						</li>
						<li className="nav-item mr-2">
							<Link href="/about">
								<a className="nav-link" href="#">
									About Us
								</a>
							</Link>
						</li>
						<li className="nav-item mr-2">
							<Link href="/createPlan">
								<a className="nav-link" href="#">
									Create Your Plan
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
