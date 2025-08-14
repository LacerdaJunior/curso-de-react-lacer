import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen  bg-slate-800 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-white"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-600 p-4 rounded-md flex-col space-y-1 ">
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-800">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
