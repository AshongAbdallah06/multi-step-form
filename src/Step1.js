import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "./App";

function Step1() {
    const navigate = useNavigate(); 

    const 
        { userDetails, setUserDetails } = useContext(AppContext);

    const schema = yup.object().shape({
        name: yup.string().min(3, "Name must be at least 3 characters").required("Please enter a valid name"),
        
        email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),

        phoneNumber: yup.string()
            .matches(/^\d{10}$/, "Please enter a valid phone number")
            .required("Please enter a valid phone number")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            console.log(data);
            navigate('/select-your-plan');
        }
    };

    return (
        <div className="right-section">
            <header>
                <h1>Personal info</h1>
                <p className="message">
                    Please provide your name, email address, and phone number.
                </p>                
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        {...register("name")} 
                        value={userDetails.fullName}
                        onChange={(e) => setUserDetails({...userDetails, fullName: e.target.value})}
                        placeholder="e.g. Stephen King" 
                    />
                    <p className="error">{errors.name?.message}</p>
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        {...register("email")} 
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                        placeholder="e.g. stephenking@lorem.com"  
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="tel"
                        pattern="[0-9]{10}"
                        max={10}
                        placeholder="e.g. 0234567891"  
                        {...register("phoneNumber")} 
                        value={userDetails.phoneNumber}
                        onChange={(e) => setUserDetails({...userDetails, phoneNumber: e.target.value})}
                    />
                    <p className="error">{errors.phoneNumber?.message}</p>
                </div>

                <div className="bottom one">
                    <button type="submit" className="next">Next Step</button>
                </div>
            </form>
        </div>
    );
}

export default Step1;
