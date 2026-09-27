import Header from "./Header";
import Meals from "./Meals";

export default function Homepage() {

  return (
    <>
      {/* Main Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main>
        <Meals />
      </main>
    </>
  );
}
