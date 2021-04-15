import React, { useState } from 'react'

function MainPage(){
    const [input,setInput] = useState('')
    const [data,setData] = useState([])

    const [inputError,setInputError] = useState('')
    const [dataError,setDataError] = useState('')
    function setValue(e){
        setInput(e.target.value)
    }

    function append(){

        if(input.trim() === ""){
            setInputError("*Input cant be blank")
        }
        else if(!/^[a-zA-z0-9]{2,25}$/.test(input)){
            setInputError("Invalid input, Kindly check it");
        }
        else{
            setInputError('')
            setDataError("")
            setInput('')
            setData([...data, 
                {id : data.length , value : input}])
        }
        

    }

    function remove(index,value){
        console.log(index)
        let message =  window.confirm("Remove Data?");
        console.log(message)
        const list = [...data]
        if(message === true){
            
            //delete data[index.value];
            //delete data[index];  
            //data.filter((item) => item.index !== index);
            //const newList = data.splice(index,index-1);
            //list.splice(data.indexOf(value),1);
            list.splice(index,1);
            setData(list)
            //setData()
            //return data;
            //setUpdatedData([...updatedData, newData]);
            //setData(data.splice(index,1));
        }

        (list.length === 0)?setDataError("NO DATA"):setDataError("")
        
    }


    return(
        <div className="Border">
            <h2>ADD AND REMOVE</h2>
            <h5 className="color">{inputError}</h5>

            <div className="input-group mb-3">
                <input type="text" value={input} onChange={setValue} className="form-control width" placeholder="Type here"/>
                <button type='submit' onClick = {() => append()} className="btn btn-primary"> ADD </button>
            </div>
            
            <br/>
            <h4>DATA LIST</h4>
            <h5 className="color">{dataError}</h5>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.value} &nbsp;&nbsp;<button className="btn btn-primary" onClick={()=>remove(item.id,item.value)}>REMOVE</button><br/></li>
                ))}
            </ul>
        </div>
    )

}


export default MainPage