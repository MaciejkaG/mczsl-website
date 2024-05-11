import Slide from '@/components/slide';

export default function Home() {
  return (
    <main>
      <Slide landing>
        <h1>mc.zsł.pl</h1>
        <p>Nieoficjalny serwer Minecraft ZSŁ</p>
      </Slide>
      <Slide fromRight compact>
        <h1>Świetne tryby</h1>
        <p>Bedwars i survival</p>
      </Slide>
      <Slide compact>
        <h1>Pojemny serwer</h1>
        <p>200 slotów</p>
      </Slide>
      <Slide fromRight compact>
        <h1>Dołącz do nas już dziś</h1>
        <p>IP: mc.zsł.pl</p>
      </Slide>
    </main>
  );
}
