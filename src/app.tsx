import NewNoteCard from "./components/new-note-card/new-note-card";
import NoteCard from "./components/note-card/note-card";

function App() {
  return (
    <div className="mx-auto max-w-6xl my-12">
      <form className="w-full space-y-6">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
        <div className="bg-slate-700 h-px" />
        <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
          <NewNoteCard />
          <NoteCard
            note={{
              date: new Date(),
              content: "Hello World",
            }}
          />
        </div>
      </form>
    </div>
  );
}
export default App;
