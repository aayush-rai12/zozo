import React,{useState,useRef} from "react";
import "./Registration.css";
const Registration=()=>{
    const name_err=useRef(null);
    const email_err=useRef(null);
    const phone_err=useRef(null);
    const pass_err=useRef(null);
    const conpass_err=useRef(null);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [conpass,setConpass]=useState('');
    const [phone,setPhone]=useState('');

    const handleSubmit=(e)=>{
            e.preventDefault();
            if(name==="" ){
                name_err.current.innerText="Enter username";
                return false;
            }
            if(email==="" ){
                email_err.current.innerText="Enter email";
                return false;
            }
            if(phone===""){
            phone_err.current.innerText="Enter phone";
                return false;
            }
            if(pass===""){
                pass_err.current.innerText="Enter passwword";
                return false;
            }
            if(conpass==="" || conpass === pass){
                conpass_err.current.innerText="confirm password";
                return false;
            }
            return true;    

    };
    const handleChange=(e)=>{
        switch(e.target.name){
            case "Username":
                setName(e.target.value);
                name_err.current.innerText="";
                break;
            case "email":
                setEmail(e.target.value);
                email_err.current.innerText=""
                break;
            case "Phone":
                setPhone(e.target.value);
                phone_err.current.innerText="";
                break;
            case "password":
                setPass(e.target.value);
                pass_err.current.innerText="";
                break;
            case "confirmpassword":
                setConpass(e.target.value);
                conpass_err.current.innerText="";
                break;
            default:
                break;

        };
    }
    return(
       <>
       <form className="register" id='register' onSubmit={handleSubmit}>
        <div className="header">Get Your Love Here.</div>
                <div className="fields">
                    <div className="name"><label>Name</label></div>
                        <div><input type="text" onChange={handleChange} value={name} name="Username"/>                       <br/>
                        <font ref={name_err} style={{color:"red",}}></font>                  
                    </div>
                    <div className="email"><label>Email</label></div>
                    <div>
                        <input type="text" onChange={handleChange} value={email} name="email"/>
                        <br></br>
                        <font ref={email_err} style={{color:"red",}}></font> 
                    </div>
                    <div className="phone"><label>Mobile</label></div>
                    <div>
                        <input type="text"  onChange={handleChange} value={phone} name="Phone"/>
                        <br></br>
                        <font ref={phone_err} style={{color:"red",}}></font> 
                    </div>
                    <div className="password"><label>Password</label></div>
                    <div>
                        <input type="text" onChange={handleChange}value={pass} name="password"/>
                        <br></br>
                        <font ref={pass_err} style={{color:"red",}}></font> 
                    </div>
                    <div className="confirmPassword"><label>confirm paswword</label></div>
                    <div>
                        <input type="text" onChange={handleChange} value={conpass} name="confirmpassword"/>
                        <br></br>
                        <font ref={conpass_err} style={{color:"red",}}></font> 
                    </div>
                    <div className="agreement">
                        <label id="agreelable">I Agree</label>
                        <input id="agree" type="checkbox"  name="agreement"/>
                        <font style={{color:"red",}}></font> 
                    </div>
                   
                </div> 
                        <div className="submit">
                                <input id="btn" type="submit" value="Create Account"/>
                        </div> 
                     <div className="line">
                        <p>Already have an account? <a href='#'>login</a></p>
                     </div>

       </form>
       </>
    )
};

export default Registration;