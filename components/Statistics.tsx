

export default function Statistics() {
  return (
    <div>
        <section>
            <h1 className="text-3xl font-bold mb-3 mt-5">Estatísticas</h1>
            <p>Veja o andamento de suas tarefas.</p>
        </section>

        <section>
            <div className="flex flex-col items-start mt-5">
                <p>Quantidade de tarefas: </p>
                <p>Quantidade de tarefas concluídas: </p>
                <p>Quantidade de tarefas em andamento: </p>
                <p>Sessões do pomodoro concluídas: </p>
            </div>
        </section>
    </div>
  )
}
