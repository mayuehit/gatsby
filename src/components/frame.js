import * as React from "react"
const Frame = ({children})=>{
    return (
        <div>
            <h1>this is the page title</h1>
            {children}
        </div>
    )
}
export default Frame