export default function Slide(props : { children: React.ReactNode, fromRight?: boolean, landing?: boolean, }) {
    return (
        <div className={`h-[100vh]`}>
            <div className={`absolute flex items-center h-full w-full px-[15%] z-10${props.fromRight ? ' flex-row-reverse text-right' : ''}${props.landing ? ' bg-title-gradient' : ''}`}>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}