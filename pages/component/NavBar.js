import styles from "../../styles/Home.module.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <div>
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <Link href="/about">
            <a>
              <li>About us</li>
            </a>
          </Link>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </div>
  );
}
