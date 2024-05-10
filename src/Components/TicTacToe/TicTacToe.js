import React,{useRef, useState} from "react";
import './TicTacToe.css'
import circle_icon from '../Assests/letter-o.png'
import cross_icon from '../Assests/cross.png'
let boxdata = ["","","","","","","","",""]
const TicTacToe = () => {
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let title = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    const toggle = (w,num) => {
        if(lock)
            {
                return 0;
            }
        if(count%2 === 0)
            {
                w.target.innerHTML = `<img src='${cross_icon}''>`;
                boxdata[num] = 'x'
                setCount(++count);
            }
        else
        {
            w.target.innerHTML = `<img src='${circle_icon}'>`;
            boxdata[num] = 'o'
            setCount(++count);
        }
        checkWin();
        console.log(count);
        if(count != 0 && count%9 === 0)
            draw();
    }
    const checkWin = () => {
        if(boxdata[0]==boxdata[1] && boxdata[1] == boxdata[2] && boxdata[2] !== "")
            {
                won(boxdata[2]);
            }
            else if(boxdata[3]==boxdata[4] && boxdata[4] == boxdata[5] && boxdata[5] !== "")
                {
                    won(boxdata[5]);
                }
                else if(boxdata[6]==boxdata[7] && boxdata[7] == boxdata[8] && boxdata[8] !== "")
            {
                won(boxdata[8])
            }
        else if(boxdata[0]==boxdata[3] && boxdata[3] == boxdata[6] && boxdata[6] !== "")
            {
                won(boxdata[6]);
            }
            else if(boxdata[1]==boxdata[4] && boxdata[4] == boxdata[7] && boxdata[7] !== "")
                {
                    won(boxdata[7]);
                }
                else if(boxdata[2]==boxdata[5] && boxdata[5] == boxdata[8] && boxdata[8] !== "")
                    {
                        won(boxdata[8]);
                    }
                    else if(boxdata[0]==boxdata[4] && boxdata[4] == boxdata[8] && boxdata[8] !== "")
                        {
                            won(boxdata[8]);
                        }
                        else if(boxdata[0]==boxdata[1] && boxdata[1] == boxdata[2] && boxdata[2] !== "")
                            {
                                won(boxdata[2]);
                            }
                            else if(boxdata[2]==boxdata[4] && boxdata[4] == boxdata[6] && boxdata[6] !== "")
                                {
                                    won(boxdata[6]);
                                }
                    
                
            
        }
        const draw = () => {
            setLock(true);
            title.current.innerHTML = `Match is Draw`;
        }
        const won = (winner) => {
            setLock(true);
        if(winner === 'x')
            {
                title.current.innerHTML = `Congratulations: <img src=${cross_icon}> Won`;
            }
        else
        {
                title.current.innerHTML = `Congratulation: <img src=${circle_icon}> Won`;
        }
        setCount(0);
        //reset();
    }
    const reset = () => {
        setLock(false);
        boxdata = ["","","","","","","","",""];
        title.current.innerHTML = `Tic Tac Toe Game`; 
        boxes.map((e) => {e.current.innerHTML = "";});
    }
    return (
        <div>
          <h1 className="title" ref={title}>Tic Tac Toe Game</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(w) => {toggle(w,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(w) => {toggle(w,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(w) => {toggle(w,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(w) => {toggle(w,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(w) => {toggle(w,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(w) => {toggle(w,5)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box7} onClick={(w) => {toggle(w,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(w) => {toggle(w,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(w) => {toggle(w,8)}}></div>
                </div>
            </div>
            <button className="reset" onClick={() => {reset()}}>Reset</button>
        </div>
    )
}
export default TicTacToe