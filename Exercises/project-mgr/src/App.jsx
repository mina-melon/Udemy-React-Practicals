import NoProjects from "./components/NoProjects";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <main className="flex h-dvh w-full">
      <SideBar />
      <NoProjects />
    </main>
  );
}

export default App;
