import { Play, RotateCcw } from "lucide-react";

export default function Pomodoro() {
  return (
    <div className=" flex flex-col gap-5">
      <section>
        <h1 className="text-3xl font-bold mb-2 mt-5">Timer Pomodoro</h1>
        <p>Trabalhe em blocos focados de 25 minutos</p>
      </section>

      <section>
        <div className="bg-red-500 w-100 rounded-xl text-white p-5 flex flex-col gap-2">
          <p>FOCO</p>
          <p className="text-7xl font-bold">25:00</p>
          <div className="flex justify-center gap-3 mt-5">
            <button className="bg-white p-2 w-20 rounded-sm flex justify-center">
              <Play color="black" />
            </button>
            <button className="bg-white p-2 w-12 rounded-sm flex justify-center">
              <RotateCcw color="black" />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-200 rounded-xl p-3">
          <h1>Sessões Completadas</h1>
          <p className="text-3xl font-bold">0</p>
        </div>
      </section>
    </div>
  );
}
