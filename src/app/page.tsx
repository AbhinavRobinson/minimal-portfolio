import { LightBoard } from "@/lib/components/lightbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
      <LightBoard
        text="Hello World"
        lightSize={3}
        rows={50}
        disableDrawing
        updateInterval={1000}
        colors={{
          background: "#001a00",
          textDim: "#006600",
          drawLine: "#00b300",
          textBright: "#00ff00",
        }}
      />
      <div className="flex flex-col gap-2 items-end w-full py-8 px-8 self-end text-[#ef0a0f] bg-black">
        <h2 className="font-black text-5xl uppercase">Software Developer</h2>
        <h1 className="text-8xl bold uppercase font-black">Abhinav Robinson</h1>
      </div>
    </div>
  );
}
