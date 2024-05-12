import Image from "next/image";

function TeamMember(props: { name: string, description: string, imgUrl: string,  }) {
  return (
    <div className="w-full sm:w-1/3 p-6 box-border text-center flex justify-center items-center flex-col">
      <Image src={props.imgUrl} alt="Member image" width={256} height={256} className="w-1/2 rounded-full" />
      <h2>{props.name}</h2>
      <span>{props.description}</span>
    </div>
  )
}

export default function Team() {
  return (
    <div className="flex w-full items-center text-center flex-col">
      <h1 className="text-4xl mb-8">Poznaj administrację</h1>
      <div className="flex w-10/12 sm:w-3/4 justify-center items-center flex-col sm:flex-row">
        <TeamMember imgUrl="/mcjk-logo.png" name="Maciejka" description="Designer / Deweloper JS / Zarządca Discorda / Zarządca infrastruktury webowej" />
        <TeamMember imgUrl="/pingwinek.webp" name="Pingwinek" description=" / Zarządca sprzętu serwera" />
      </div>
    </div>
  );
}