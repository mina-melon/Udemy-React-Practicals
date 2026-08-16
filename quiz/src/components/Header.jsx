import HeaderImg from "/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={HeaderImg} alt="quiz logo" />
      <h1>Quiz</h1>
    </header>
  );
}
