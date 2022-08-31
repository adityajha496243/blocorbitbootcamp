import styles from "../styles/Home.module.css";
// import mainnav from "./component/mainnav";
import NavBar from "./component/NavBar";
import NewNav from "./NewNav";
export default function Home() {
  return (
    <div>
      {/* This is HomePafge */}
      <NavBar />
      <NewNav />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
