export default function Container({ children }) {
    return (
        <section className='w-full flex justify-center px-6 xl:px-24'>
            <div className="container flex flex-col gap-y-32">
                {children}
            </div>
        </section>
    )
}