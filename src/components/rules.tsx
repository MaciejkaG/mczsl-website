export default function Slide(props: { children: React.ReactNode }) {
  return (
    <div className="mt-16 w-full text-center">
      <h1 className="text-4xl mb-8">Regulamin serwera mc.zsł.pl</h1>
      {props.children}
    </div>
  );
}