import "normalize.css";
import "./template.css";
import Header from "./components/Header";
import Main from "./components/Main";

const links = [
  "Главная",
  "Технология",
  "График полётов",
  "Гарантии",
  "О компании",
  "Контакты",
];

const infoBlocks = [
  { title: "1", top: "Мы", bottom: "На рынке", id: 1, class: "incline1" },
  {
    title: "50%",
    top: "гарантируем",
    bottom: "безопасность",
    id: 2,
    class: "incline2",
  },
  {
    title: "2001г.",
    top: "календарик за",
    bottom: "в подарок",
    id: 3,
    class: "incline3",
  },
  {
    title: "579",
    top: "путешествие",
    bottom: "дней",
    id: 4,
    class: "incline4",
  },
];

function App() {
  return (
    <div>
      <Header links={links} />
      <Main infoBlocks={infoBlocks} />
    </div>
  );
}

export default App;
