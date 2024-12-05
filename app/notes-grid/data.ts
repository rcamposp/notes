export interface Note{    
    title: string;
    description: string;
    date: string;
    category: string;
    isDone: boolean;
  }
  
export const notesData: Note[] = [
    {
        title: "Note 1",
        description: "Lorem ipsum dolor amet",
        date: "02/12/2024",
        category: "home",
        isDone: false
    },
    {
        title: "Note 2",
        description: "Amet Dolor Lorem ipsum",
        date: "01/12/2024",
        category: "work",
        isDone: false
    },
    {
        title: "Note 3",
        description: "Folio case lenovo 4th gen",
        date: "02/11/2024",
        category: "personal",
        isDone: true
    },
    {
        title: "Note 4",
        description: "La chica del tren",
        date: "02/01/2024",
        category: "personal",
        isDone: false
    }
]