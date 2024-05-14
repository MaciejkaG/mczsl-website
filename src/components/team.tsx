import Image from "next/image";

function TeamMember(props: { name: string, description: string, imgUrl: string,  }) {
  return (
    <div className="w-full sm:w-1/3 p-6 box-border text-center flex justify-center items-center flex-col">
      <Image src={props.imgUrl} alt="Member image" width={512} height={512} className="w-1/2 rounded-full" />
      <h2>{props.name}</h2>
      <span>{props.description}</span>
    </div>
  )
}

function SmallTeamMember(props: { name: string, description: string, imgUrl: string, }) {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/5 max-w-[33vw] p-2 sm:p-4 box-border text-center flex justify-center items-center flex-col">
      <Image src={props.imgUrl} alt="Member image" width={256} height={256} className="w-3/5 rounded-full" />
      <h2 className="text-xl">{props.name}</h2>
      <span>{props.description}</span>
    </div>
  )
}

export default function Team() {
  return (
    <div className="flex w-full items-center text-center flex-col">
      <h1 className="text-4xl mb-8">Poznaj administrację</h1>
      {/* Head admins (bigger gallery) */}
      <div className="flex w-10/12 sm:w-3/4 justify-center items-center flex-col sm:flex-row">
        <TeamMember imgUrl="/mcjk-logo.png" name="Maciejka" description="Designer / Deweloper / Zarządca Discorda / Zarządca infrastruktury" />
        <TeamMember imgUrl="/pingwinek.webp" name="Pingwinek" description="Zarządca infrastruktury / Technik serwera Minecraft" />
        <TeamMember imgUrl="/pingwinek.webp" name="Atoseczek" description="Zarządca Discorda / Technik serwera Minecraft" />
      </div>
      {/* Other people helping the server */}
      <div className="flex w-11/12 sm:w-3/4 justify-center flex-row flex-wrap">
        <SmallTeamMember imgUrl="/mcjk-logo.png" name="To jest test" description="Moderator Discorda" />
        <SmallTeamMember imgUrl="/mcjk-logo.png" name="To jest test" description="Moderator Discorda" />
        <SmallTeamMember imgUrl="/mcjk-logo.png" name="To jest test" description="Moderator Discorda" />
        <SmallTeamMember imgUrl="/mcjk-logo.png" name="To jest test" description="Moderator Discorda" />
        <SmallTeamMember imgUrl="/mcjk-logo.png" name="To jest test" description="Moderator Discorda" />
        <SmallTeamMember imgUrl="/mcjk-logo.png" name="To jest test" description="Moderator Discorda" />
        <SmallTeamMember imgUrl="/mcjk-logo.png" name="To jest test" description="Moderator Discorda" />
      </div>
    </div>
  );
}