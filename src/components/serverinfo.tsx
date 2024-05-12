import { Data } from '@/lib/api';

export default function ServerInfo({ data, className }: { data: Data, className?: string }) {
  return (
    <span className={`${data.online ? 'text-green-400' : 'text-red-400'} text-sm ${className}`}>⬤ {data.online ? `Online ${data.numplayers}/${data.maxplayers}` : `Offline`}</span>
  )
}