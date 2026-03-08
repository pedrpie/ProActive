"use client";

import { Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function Pomodoro() {
  const [time, setTime] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [session, setSession] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);
      setSession((prev) => prev + 1);
      setTime(25 * 60);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className=" flex flex-col gap-5">
      <section>
        <h1 className="text-3xl font-bold mb-2 mt-5">Timer Pomodoro</h1>
        <p>Trabalhe em blocos focados de 25 minutos</p>
      </section>

      <section>
        <div className="bg-red-500 w-100 rounded-xl text-white p-5 flex flex-col gap-2">
          <p>FOCO</p>
          <p className="text-7xl font-bold">{formattedTime}</p>
          <div className="flex justify-center gap-3 mt-5">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-white p-2 w-20 rounded-sm flex justify-center hover:bg-gray-200 transition"
            >
              <Play color="black" size={24} />
            </button>
            <button
              onClick={() => {
                setTime(25 * 60);
                setIsRunning(false);
              }}
              className="bg-white p-2 w-12 rounded-sm flex justify-center hover:bg-gray-200 transition"
            >
              <RotateCcw color="black" size={24} />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-200 rounded-xl p-3">
          <h1>Sessões Completadas</h1>
          <p className="text-3xl font-bold">{session}</p>
        </div>
      </section>
    </div>
  );
}
