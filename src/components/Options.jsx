import "./options.css"
import { MdFavoriteBorder } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineFlag } from "react-icons/md";
import { MdOutlineCloudDownload } from "react-icons/md";
import { useRef, useEffect } from "react";

function Options({ setOption, refOption }) {

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, true)
    // },
    //     [])

    // const handleClickOutside = (e) => {
    //     if (!refOption.current.contains(e.target)) {
    //         // setOption(false)
    //         console.log('outside');
    //     }
    //     else {
    //         // setOption(true)
    //         console.log('inside');
    //     }
    // }

    return (
        <div className="options">
            <div className="option">
                <MdFavoriteBorder className="iconOption" />
                <p>Add to favorite</p>
            </div>
            <div className="option">
                <TbPlaylistAdd className="iconOption" />
                <p>Add to cart</p>
            </div>
            <div className="option">
                <GoClock className="iconOption" />
                <p>Save for later</p>
            </div>
            <div className="option">
                <PiShareFatLight className="iconOption" />
                <p>Share</p>
            </div>
            <div className="option">
                <MdOutlineCloudDownload className="iconOption" />
                <p>Download</p>
            </div>
            <div className="option">
                <MdOutlineFlag className="iconOption" />
                <p>Report</p>
            </div>

        </div>
    )

}

export default Options