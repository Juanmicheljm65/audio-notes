function NewNoteCard() {
  return (
    <div className="rounded-md p-5 space-y-3 overflow-hidden  bg-slate-700">
      <span className="text-sm font-medium text-slate-200">
        Adicione uma nota
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente
      </p>
    </div>
  );
}

export default NewNoteCard;
