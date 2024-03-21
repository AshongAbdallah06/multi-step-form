import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

function Step1() {

    const schema = yup.object().shape({
        name: yup.string().min(3).required("Please enter a valid name"),
        email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
        phoneNumber: yup.string()
            .matches(/^\d{10}$/, "Phone number must be exactly 10 characters")
            .required("Please enter a valid phone number")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="right-section">
            <header>
                <h1>Personal info</h1>
                <p className="message">
                    Please provide your name, email address and phone number.
                </p>                
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="e.g. Stephen King" {...register("name")} />
                    <p className="error">{errors.name?.message}</p>
                </div>

                <div>
                    <label htmlFor="name">Email Address</label>
                    <input type="email" placeholder="e.g. stephenking@lorem.com"  {...register("email")} />
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div>
                    <label htmlFor="name">Phone Number</label>
                    <input type="text" placeholder="e.g. 0234567891"  {...register("phoneNumber")} />
                    <p className="error">{errors.phoneNumber?.message}</p>
                </div>

                <div className="bottom one">
                    {/* <Link to='/select-your-plan'> */}
                        <button type="submit" className="next">Next Step</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>

    );
}

export default Step1;
