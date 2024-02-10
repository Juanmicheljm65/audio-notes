import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void;
}

function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);

    if (event.target.value === "") {
      setShouldShowOnboarding(true);
    }
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onNoteCreated(content);
    toast.success("Nova nota criada com sucesso");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md p-5 gap-3 text-left overflow-hidden  bg-slate-700 hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400 outline-none">
        <span className="text-sm font-medium text-slate-200">Adicionar</span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto automaticamente
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50">
          <Dialog.Content className="z-10 fixed overflow-hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
            <Dialog.DialogClose className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.DialogClose>

            <form className="flex flex-col flex-1" onSubmit={handleSaveNote}>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-sm font-medium text-slate-300">
                  Adicionar nota
                </span>
                {shouldShowOnboarding ? (
                  <p className="text-sm leading-6 text-slate-400">
                    Comece{" "}
                    <button className="text-lime-400 hover:underline">
                      gravando uma nota
                    </button>{" "}
                    em áudio ou se preferir{" "}
                    <button
                      onClick={handleStartEditor}
                      className="text-lime-400 hover:underline"
                    >
                      utilize apenas texto
                    </button>
                  </p>
                ) : (
                  <textarea
                    autoFocus
                    onChange={handleContentChange}
                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-lime-950 py-4 text-center text-sm outline-none font-medium hover:bg-lime-500"
              >
                Salvar nota
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewNoteCard;
