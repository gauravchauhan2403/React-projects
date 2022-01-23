import React, { useState, useEffect } from 'react';

function Timer() {
  const[sec, setSec] = useState(0);
  const[isActive, setIsActive]= useState(false);

  function toggle(){
    setIsActive(!isActive);
  }

  function reset (){
    setSec(0);
    setIsActive(false);
  }

  useEffect(()=>{
    let interval = null;
    if(isActive && sec<59) {
      interval =setInterval(() => {
        setSec(sec => sec + 1);
      },1000);
    } else if (!isActive && sec !==0){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [isActive, sec]);

  return <>
  <div>
    <h1>Timer</h1>
    <div className='container'>
    {/* <div className="row" style={{width:600, margin:0, alignItems:'center'}}>
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Input time</label>
    <input style={{width:100}} type="number" className="form-control" id="inputPassword" />
  </div> */}
  <div className="timer" style={{display:'flex',justifyContent:'center'}}>
  <h1>{sec}s</h1>
  </div>
  <button type="button" onClick={toggle} className={`btn btn-${isActive?'primary' : 'success'} my-3 me-5`}>{isActive ? 'Pause' : 'Start'}</button>
  <button type="button" onClick={reset} className="btn btn-danger">Reset</button>
    </div>
  </div>

  </>;
}

export default Timer;
