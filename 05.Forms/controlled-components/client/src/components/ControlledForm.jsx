import { useEffect, useRef, useState } from "react";

export default function ControlledForm() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: "",
        age: "",
        bio: "",
        occupation: "ai",   
        sex: "f"
    });

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();   
    },[]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a");
            const profile = await response.json();
                // setUsername(profile.username);
        })();
    }, [])
  
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted")
   ;
    }

    const logoutHandler = (e) => {
        setUserName({});
    }

    // const usernameChangeHandler = (e) => {
    //     setUsername(e.target.value)
    // }

    const changeHandler = (e) => {
        console.log("name=>", e.target.name);
        console.log("value=>", e.target.value);
        console.log("checked=>", e.target.checked);
        setFormValues(oldValue =>( {
            ...oldValue,
            [e.target.name]: e.target.type === "checkbox" 
            ? e.target.checked
            : e.target.value

        }));
    }

    return (
        <>
        <h1>Controlled Form</h1>

         
                <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    ref={inputRef}
                    name="username" 
                    id="username" 
                    placeholder="Jane Doe"
                    value={formValues.username} 
                    // onChange={usernameChangeHandler}
                    onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="*****"
                        value={formValues.password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="email@abv.bg" 
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                        <input 
                        type="number" 
                        name="age" 
                        id="age"
                        placeholder="22" 
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="bio">Bio</label>
                        <textarea 
                        name="bio" 
                        id="bio"
                        placeholder="Hello everyone" 
                        value={formValues.bio}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="occupation">Occupation</label>
                        <select 
                            name="occupation" 
                            id="occupation"
                            value={formValues.occupation}
                            onChange={changeHandler}
                        >
                            <option value="it">IT</option>
                            <option value="bi">BI</option>
                            <option value="ai">AI</option>
                        </select>
                </div>

                <div>
                    <label htmlFor="sex-m">Male</label>
                        <input 
                            type="radio" 
                            name="sex" 
                            id="sex-m"
                            value="m"
                            checked={formValues.sex === "m"}
                            onChange={changeHandler}
                        />
                    <label htmlFor="sex-f">Female</label>
                        <input 
                            type="radio" 
                            name="sex" 
                            id="sex-f"
                            value="f"
                            checked={formValues.sex === "f"}
                            onChange={changeHandler}
                        />
                </div>

                <div>
                    <label htmlFor="swimming">Swimming</label>
                        <input 
                        type="checkbox" 
                        name="swimming" 
                        id="swimming"
                        value={formValues.swimming}
                        onChange={changeHandler}
                    />
                    <label htmlFor="fitness">Fitness</label>
                        <input 
                        type="checkbox" 
                        name="fitness" 
                        id="fitness"
                        value={formValues.fitness}
                        onChange={changeHandler}
                    />
                </div>
                      

                <input type="submit" value="Login" />
                {/* <button>Login</button> */}
            
            </form>
        </>
    );
}
    
        