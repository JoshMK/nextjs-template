import Link from "next/link";
import styles from "./Header.css";

const Header = function() {
	return (
		<header className={styles.headerNav}>
			<nav>
				<ul className={styles.headerNavList}>
					<li>
						<Link href="/">
							<a className={styles.headerNavLink}>Home</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
