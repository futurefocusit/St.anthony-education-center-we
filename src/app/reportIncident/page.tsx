"use client";
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReportIncident = () => {
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [input, setInput] = useState({
        name: '',
        email: '',
        subject: '',
        location: '',
        message: '',
    });

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(input)
        if (captchaVerified) {
            alert("Form submitted successfully!");
        } else {
            alert("Please verify the reCAPTCHA.");
        }
    };

    const handleCaptchaVerify = (value: string | null) => {
        setCaptchaVerified(!!value);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className="bg-cover bg-center bg-no-repeat h-[10rem] md:h-[450px]" style={{ backgroundImage: `url('https://images.pexels.com/photos/5561921/pexels-photo-5561921.jpeg')` }} />
            <div className="font-sans md:p-5 p-2">
                <h1 className="text-center text-blue-800 text-2xl my-5">
                    Fill the form to report incident
                </h1>

                <form onSubmit={onSubmit} className="max-w-4xl m-auto text-center space-y-5">
                    <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                        <p className='font-bold min-w-[100px] text-start'>Names</p>
                        <input
                            type="text"
                            name="name"
                            required
                            onChange={handleOnChange}
                            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
                        />
                    </div>

                    <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                        <p className='font-bold min-w-[100px] text-start'>Email</p>
                        <input
                            type="text"
                            name="email"
                            required
                            onChange={handleOnChange}
                            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
                        />
                    </div>

                    <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                        <p className='font-bold min-w-[100px] text-start'>Subject</p>
                        <input
                            type="text"
                            name="subject"
                            required
                            onChange={handleOnChange}
                            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
                        />
                    </div>

                    <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                        <p className='font-bold min-w-[100px] text-start'>Location</p>
                        <input
                            type="text"
                            name="location"
                            required
                            onChange={handleOnChange}
                            className="outline-none block w-full px-3 py-2 mb-2 bg-slate-200 border border-transparent rounded"
                        />
                    </div>

                    <div className='flex sm:items-center gap-3 flex-col sm:flex-row'>
                        <p className='font-bold min-w-[100px] text-start'>Message</p>
                        <textarea
                            name="message"
                            required
                            rows={6}
                            onChange={handleOnChange}
                            className="resize-none outline-none block w-full p-3 mb-5 bg-slate-200 border border-transparent rounded"
                        />
                    </div>


                    <div className='w-full flex items-center justify-center py-5'>
                        <ReCAPTCHA
                            sitekey="YOUR_RECAPTCHA_SITE_KEY"
                            onChange={handleCaptchaVerify}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-[600px] bg-blue-800 text-white py-2 rounded cursor-pointer text-lg"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </>
    );
};

export default ReportIncident;
