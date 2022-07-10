import { FaCircleNotch } from "react-icons/fa"

export function Loading() {
  return (
    <div className="w-full overflow-hidden absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center animate-spin bg-zinc-900 bg-opacity-80 " >
      <FaCircleNotch fontSize={45} />
    </div>
  )
}