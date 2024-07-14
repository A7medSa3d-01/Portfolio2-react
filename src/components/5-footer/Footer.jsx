import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex links">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>
      <p>&copy; 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}
