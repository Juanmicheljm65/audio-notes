function NoteCard() {
  return (
    <button className="text-left rounded-md p-5 space-y-3 relative outline-none overflow-hidden hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400 bg-slate-800">
      <span className="text-sm font-medium text-slate-300">há 5 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ipsam
        nostrum eaque, facere optio unde quis nisi reiciendis doloremque, minus
        itaque, culpa ea nihil architecto. Natus quas amet adipisci quam!
      </p>
      <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}

export default NoteCard;
