export type NoteStatus = "New" | "Completed" | "Not completed";

export interface Note {
  id: number;
  title: string;
  content: string;
  status: NoteStatus;
  checked?: boolean;
}

export const notes: Note[] = [
  {
    id: 1,
    title: "delectus aut autem",
    content: "Lorem ipsum",
    status: "New",
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    content: "Lorem ipsum",
    status: "Completed",
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    content: "Lorem ipsum",
    status: "Not completed",
  },
];
