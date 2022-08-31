import Link from "next/link";
export default function mainnav() {
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
