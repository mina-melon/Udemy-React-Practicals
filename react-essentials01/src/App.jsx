import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
// import Exercise05 from './components/exercise05.jsx'
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selected, setSelected] = useState();
  function handleSelect(component) {
    setSelected(component);
  }
  let tabContent = <p>Please Select A Topic</p>;
  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} key={conceptItem.title}/>)}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleSelect("components")} isSelected={selected === 'components'}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={selected === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={selected === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={selected === 'state'}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
