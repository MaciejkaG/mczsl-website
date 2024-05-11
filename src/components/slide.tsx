export default function Slide(props : { children: React.ReactNode, fromRight?: boolean, landing?: boolean, compact?: boolean }) {
  return (
    <div className={props.compact ? 'min-h-20 my-20' : 'h-[100vh]'}>
      <div className={`absolute flex justify-center text-center sm:justify-normal sm:text-left items-center ${props.compact ? 'min-h-20' : 'h-full'} w-full px-[15%] z-10${props.fromRight ? ' flex-row-reverse sm:text-right' : ''}${props.landing ? ' bg-title-gradient' : ''}`}>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}