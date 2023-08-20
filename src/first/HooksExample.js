import React, { useContext, useEffect, useInsertionEffect, useState } from "react";

function HooksExample() {

// const [statename,setstatename]=usestate(defaultvalue);
const [[usernamee,setUserName]]=useState('techno');
const [[language,setLanguage]]=useState('java');
const [[count,setCount]]=useState(0);
count stdDetails = useContext(stdDetails)

const updateName = ()=> {
    setUserName(techno)
}

useEffect(() => {
 alert("working fine")
})

return(
    <div>
    <h1>Hooks Example</h1>
    <div>
       USerName: <span>{UserName</span>
    </div>
    <div>
        Language : <span>{Language}</span>
    </div>
)   <div>
      count : <span>{count}</span>
</div>
<div>
    
</div>
</div>}