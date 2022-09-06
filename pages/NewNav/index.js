import Link from "next/link";
export default function NewNav() {
  return (
    <ul className="flex justify-center">
      <li className="mr-6">
        <Link href="/login">
          <a className="text-xl text-bold hover:text-blue-800" href="#">
            Login
          </a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/register">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Register
          </a>
        </Link>
      </li>
    </ul>
  );
}
