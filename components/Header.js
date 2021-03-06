import Image from "next/image"
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon
} from "@heroicons/react/solid"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

function Header({ placeholder }) {
    const [serachInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuest, setNoOfGuest] = useState(1);
    const router = useRouter();
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const resetInput = () => {
        setSearchInput("");
    }
    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: serachInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuest: noOfGuest,
            }
        });
    }
    return (

        <header className="sticky top-0 z-50 grid grid-cols-3 
    bg-white shadow-md p-5 md:px-10 ">
            {/* left */}
            <div
                onClick={() => { router.push("/") }}
                className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Middle */}
            <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    value={serachInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text" placeholder={placeholder || "Start your search"} className="pl-5 bg-transparent outline-none
                 flex-grow text-sm text-gray-600 placeholder-gray-400" />
                <SearchIcon
                    className="hidden md:inline-flex h-8 
                    bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
                />
            </div>
            {/* Right */}
            <div className="flex space-x-4
            items-center justify-end text-gray-500
            ">
                <p className="hidden md:inline-flex cursor-pointer" >Become a host</p>
                <GlobeAltIcon
                    className="h-6"
                />
                <div className="flex border-2 space-x-2 rounded-full p-2 cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {serachInput &&
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />

                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl font-semibold flex-grow">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={noOfGuest}
                            onChange={(e) => { setNoOfGuest(e.target.value) }}
                            type="number"
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400" />
                    </div>
                    <div className="flex item-center">
                        <button onClick={resetInput} className="flex-grow text-gray-400">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header