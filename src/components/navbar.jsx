import Link from "next/link"

const Navbar = () => {
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            {/*NAME*/}
            <div className=''>
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-bold flex items-center justify-center">
                    <span className="text-white mr-1">Sushil</span>
                    <span className="w-10 h-8 rounded bg-white text-black flex items-center justify-center">Dulal</span>
                </Link>
            </div>
            {/*RESPONSIVE MENU*/}
            <div>2</div>
        </div>
    )
}

export default Navbar