import Link from "next/link";

const Board = () => {
    return(
        // 一番大きな箱を返す。
        <div className="bg-white">
            {/* Top画像 */}
            <div className="min-w-fit">
                <img src="https://placeimg.com/800/200/arch" className="w-screen object-cover" />
            </div>
            {/* icon画像 */}
            <div className=" w-1/12 -translate-y-12 translate-x-12">
                <img src="https://placeimg.com/192/192/people" alt="icon" className="rounded-full"/>
            </div>
        </div>
            
    )
}

export default Board;