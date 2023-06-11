import { useState, useEffect } from "react"

interface GameProps{
    name: {
        name0: string
        name1: string
        name2: string
        name3: string
    }
}
interface Position {
    pos0: number;
    pos1: number;
    pos2: number;
    pos3: number;
  }

export function Game(props: GameProps){
    const [position, setPosition] = useState<Position>({
        pos0: 2,
        pos1: 2,
        pos2: 2,
        pos3: 2
    })
    const [winner, setWinner] = useState<string[]>([])
    const [turn, setTurn] = useState(0)
    const randomNumber = Math.floor(Math.random() * 11)
    const [history, setHistory] = useState<string[]>([])

    const checkWinners=()=>{
        if(position.pos0 == 32 && winner.includes(props.name.name0) === false){
            setWinner(prevWinner=>[...prevWinner, props.name.name0])
        }
        if(position.pos1 == 32 && winner.includes(props.name.name1) === false){
            setWinner(prevWinner=>[...prevWinner, props.name.name1])
        }
        if(position.pos2 == 32 && winner.includes(props.name.name2) === false){
            setWinner(prevWinner=>[...prevWinner, props.name.name2])
        }
        if(position.pos3 == 32 && winner.includes(props.name.name3) === false){
            setWinner(prevWinner=>[...prevWinner, props.name.name3])
        }
    }
    const movePositions = () => {
        const turnId = turn % 4;
        setTurn((lastTurn) => lastTurn+1)
        if (turnId ===0){
            const gridMove = randomNumber
            const nextPositions = (position.pos0  + gridMove) > 32 ? 32: (position.pos0  + gridMove)
            setPosition((prevPosition)=>({
                ...prevPosition,
                pos0: nextPositions
            }))
            const historyString = gridMove === 0 ? `${props.name.name0} didn't move an inch`:`${props.name.name0} moved ${gridMove} grids`
            setHistory(prevHistory=>[historyString, ...prevHistory.slice(0,4)])
        }
        if (turnId ===1){
            const gridMove = randomNumber
            const nextPositions = (position.pos1  + gridMove) > 32 ? 32: (position.pos1  + gridMove)
            setPosition((prevPosition)=>({
                ...prevPosition,
                pos1: nextPositions
            }))
            const historyString = gridMove === 0 ? `${props.name.name1} didn't move an inch`:`${props.name.name1} moved ${gridMove} grids`
            setHistory(prevHistory=>[historyString, ...prevHistory.slice(0,4)])
        }
        if (turnId ===2){
            const gridMove = randomNumber
            const nextPositions = (position.pos2  + gridMove) > 32 ? 32: (position.pos2  + gridMove)
            setPosition((prevPosition)=>({
                ...prevPosition,
                pos2: nextPositions
            }))
            const historyString = gridMove === 0 ? `${props.name.name2} didn't move an inch`:`${props.name.name2} moved ${gridMove} grids`
            setHistory(prevHistory=>[historyString, ...prevHistory.slice(0,4)])
        }
        if (turnId ===3){
            const gridMove = randomNumber
            const nextPositions = (position.pos3  + gridMove) > 32 ? 32: (position.pos3  + gridMove)
            setPosition((prevPosition)=>({
                ...prevPosition,
                pos3: nextPositions
            }))
            const historyString = gridMove === 0 ? `${props.name.name3} didn't move an inch`:`${props.name.name3} moved ${gridMove} grids`
            setHistory(prevHistory=>[historyString, ...prevHistory.slice(0,4)])
        }

    };
    checkWinners()


    return (
        
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold my-8">Grid Racing Game</p>
            <div className="grid grid-cols-[repeat(35,1fr)] max-w-6xl relative">
                <span className="w-[5rem]">{props.name.name0}</span>
                <div className="h-8 col-start-[2] col-end-[32] bg-gray-500"></div>
                <span className={`absolute col-start-${position.pos0} px-[6px] scale-x-[-1] text-2xl`}>🏎️</span>
                <div className="col-start-[32] bg-black"></div>
                <div className="col-start-[33] bg-gray-400"></div>
                <div className="col-start-[34]  bg-black"></div>
                <div className="col-start-[35]  bg-gray-400"></div>
            </div>
            <div className="grid grid-cols-[repeat(35,1fr)] max-w-6xl relative">
                <span className="w-[5rem]">{props.name.name1}</span>
                <div className="h-8 col-start-2 col-end-[32] bg-gray-500"></div>
                <span className={`absolute col-start-${position.pos1} px-[6px] scale-x-[-1] text-2xl`}>🏎️</span>
                <div className="col-start-[32] bg-gray-400"></div>
                <div className="col-start-[33] bg-black"></div>
                <div className="col-start-[34]  bg-gray-400"></div>
                <div className="col-start-[35]  bg-black"></div>
            </div>
            <div className="grid grid-cols-[repeat(35,1fr)] max-w-6xl relative">
                <span className="w-[5rem]">{props.name.name2}</span>
                <div className="h-8 col-start-2 col-end-[32] bg-gray-500"></div>
                <span className={`absolute col-start-${position.pos2} px-[6px] scale-x-[-1] text-2xl`}>🏎️</span>
                <div className="col-start-[32] bg-black"></div>
                <div className="col-start-[33] bg-gray-400"></div>
                <div className="col-start-[34]  bg-black"></div>
                <div className="col-start-[35]  bg-gray-400"></div>
            </div>
            <div className="grid grid-cols-[repeat(35,1fr)] max-w-6xl relative">
                <span className="w-[5rem]">{props.name.name3}</span>
                <div className="h-8 col-start-2 col-end-[32] bg-gray-500"></div>
                <span className={`absolute col-start-${position.pos3} px-[6px] scale-x-[-1] text-2xl`}>🏎️</span>
                <div className="col-start-[32] bg-gray-400"></div>
                <div className="col-start-[33] bg-black"></div>
                <div className="col-start-[34]  bg-gray-400"></div>
                <div className="col-start-[35]  bg-black"></div>
            </div>
            <p className="text-2xl font-bold mt-8">{props.name[`name${turn%4}`]}'s Turn</p>
            <button className="bg-blue-500 px-4 mt-6 py-2 text-xl font-bold text-white rounded-xl" onClick={movePositions}>Move!</button>
            {winner.length> 0 && <table className="font-bold text-xl text-center">
                <thead>
                    <th colSpan={2}>Race Result</th>
                </thead>
                <tbody>
                
                {winner.map((win, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>  
                            <td>{win}</td>
                        </tr>
                        
                    )
                })}
                </tbody>
            </table>}
            <div className="mt-4">
                {history.map((data, index)=>{
                    return (
                        <p key={index}>{data}</p>
                    )
                })}
            </div>
        </div>
    )
}