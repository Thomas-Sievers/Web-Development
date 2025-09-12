"use client";
import Counter from "./Componentes/Counter";
import Clock from "./Componentes/Clock";
import Text from "./Componentes/Text";
import ToDo from "./Componentes/ToDo";
import Timer from "./Componentes/Timer";

export default function Home() {
  return (
    <div>
      <Counter/>
      <Clock/>
      <Text/>
      <ToDo/>
      <Timer/>
    </div>
  );
}
