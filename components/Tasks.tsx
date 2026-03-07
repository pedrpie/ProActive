'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from "react";

export default function Tasks(){
    const [tasks, setTasks] = useState<string[]>(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [inputValue, setInputValue] = useState<string>("");

    function handleAddTask(){
        if (inputValue.trim() === "") return;

        setTasks([...tasks, inputValue]);
    }

    function handleRemoveTask(indexToRemove: number){
        setTasks(tasks.filter((_, index) => index !== indexToRemove))
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return(
        <div>
            <section>
                <h1 className="text-3xl font-bold mb-3 mt-5">Minhas Tarefas</h1>
                <p>Organize e acompanhe suas atividades diárias</p>
            </section>

            <section>
                <div className="flex gap-3 mt-5 mb-5">
                    <Input
                        placeholder="Adicionar nova tarefa"
                        className="bg-gray-100"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {if (e.key == "Enter") handleAddTask()}}
                    />
                    <Button
                        onClick={handleAddTask}
                        className="cursor-pointer"><Plus /></Button>
                </div>
            </section>

            <section>
                <ul>
                    {tasks.map((task, index) => (
                        <li 
                            className="bg-gray-200 flex justify-between items-center w-80 p-3 mb-3 rounded-sm"
                            key={index}>
                            {task}
                            <Trash2 className="cursor-pointer" onClick={() => handleRemoveTask(index)} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}