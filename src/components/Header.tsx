import ImageLoader from "./ImageLoader";
import logo from "assets/sunrise-alarm.svg";
import "./Header.css";

export default function AppHeader() {
  return (
    <header className="app-header">
      <ImageLoader alt="logo" src={logo} width={50} />
    </header>
  );
}
