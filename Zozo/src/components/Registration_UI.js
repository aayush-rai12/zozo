import React,{useState} from "react";
const Registration=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [conpass,setConpass]=useState('');
    const [phone,setPhone]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    };
    const handleChange=(e)=>{
        switch(e.target.name){
            case "Username":
                setName(...name,e.target.value);
                break;
            case "email":
                setEmail(...email,e.target.value);
                break;
            case "Phone":
                setPhone(...phone,e.target.value);
                break;
            case "password":
                setPass(...pass,e.target.value);
                break;
            case "confirmpassword":
                setConpass(...conpass,e.target.value);
                break;
            default:
                break;

        };
    }
    return(
       <>
       <form id='register' onSubmit={handleSubmit}>
            <div className="header">
                <h4>User Registration</h4>
            </div>
                <div className="fields">
                    <div className="name"><label>Name</label></div>
                        <div><input type="text" placeholder="Username" onChange={handleChange} value={name} name="Username"/>                       <br/>
                        <font style={{color:"red",}}>hello</font>                  
                    </div>
                    <div className="email"><label>Email</label></div>
                    <div>
                        <input type="text" placeholder="Email" onChange={handleChange} value={email} name="email"/>
                        <br></br>
                        <font style={{color:"red",}}>hello</font> 
                    </div>
                    <div className="phone"><label>Mobile</label></div>
                    <div>
                        <input type="text" placeholder="Mobile" onChange={handleChange} value={phone} name="Phone"/>
                        <br></br>
                        <font style={{color:"red",}}>hello</font> 
                    </div>
                    <div className="password"><label>Password</label></div>
                    <div>
                        <input type="text" placeholder="Passowrd" onChange={handleChange}value={pass} name="password"/>
                        <br></br>
                        <font style={{color:"red",}}>hello</font> 
                    </div>
                    <div className="confirmPassword"><label>confirm paswword</label></div>
                    <div>
                        <input type="text" placeholder="Confirm Password"  onChange={handleChange} value={conpass} name="confirmpassword"/>
                        <br></br>
                        <font style={{color:"red",}}>hello</font> 
                    </div>
                    <div className="agreement">
                        <label>I Agree</label>
                        <input type="checkbox"  name="agreement"/>
                        <font style={{color:"red",}}>hello</font> 
                    </div>
                   
                </div> 
                <div className="submit">
                        <input type="submit" value="Register"/>
                     </div> 

       </form>
       </>
    )
};

export default Registration;