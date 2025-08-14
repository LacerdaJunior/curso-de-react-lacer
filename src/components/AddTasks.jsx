import { useState } from "react";
import Input from "./Input";

function AddTasks(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col space-y-4 p-6 bg-slate-600 rounded-md shadow-xl ">
      <Input
        type="text"
        placeholder="Digite o Nome da Tarefa:"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        maxLength={32}
      />

      <Input
        type="text"
        placeholder="Digite a Descrição da Tarefa:"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        maxLength={100}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("OS CAMPOS PRECISAM SER PREENCHIDOS!");
          }
          props.onAddTaskSubmit(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-700 text-white font-bold shadow-xl rounded-md py-2"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
