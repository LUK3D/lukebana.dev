import { ButtonInt, ButtonTypes } from "./types"

/**
 * ## 🚀 Button
 * @param args Creates a Button Element
 */
export const Button =(args:ButtonInt)=>{
    (
        <button onClick={(e)=>args.onClick(e)} className="px-2 py-1 text-lukGray ">
            {args.child??args.text}
        </button>
    )
}