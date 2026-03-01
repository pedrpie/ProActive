import "@radix-ui/themes/styles.css";
import Tab from "@/components/Tab";

export default function Home() {
  return (
    <div className="text-center m-10">
      <section className="flex flex-col gap-3 mb-10">
        <h1 className="text-6xl text-purple-700 font-bold">ProActive</h1>
        <p className="text-xl text-gray-500">
          Maximize sua produtividade com técnicas comprovadas
        </p>
      </section>

      <section>
        <Tab />
      </section>
    </div>
  );
}
