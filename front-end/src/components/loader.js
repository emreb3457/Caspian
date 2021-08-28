import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
export const loader = () => {
    return (
        <div className="loader" style={{ paddingTop: "5%" }}>
            <ClipLoader
                size={60}
                color={"gray"}
                loading={true}
            />
        </div>
    )
}

export default loader;