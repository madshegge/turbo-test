import { Button } from 'ui'

export default function Web() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-6">
            <h1 className="text-5xl text-gray-700">
                This is a title within <kbd>"apps/web"</kbd>
            </h1>
            <Button />
        </div>
    )
}
