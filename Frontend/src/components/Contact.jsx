import React from 'react'

function Contact() {
    return (
        <div>
            <div className="max-w-screen container mx-auto px-4 md:px-20 min-h-screen flex justify-center items-center">
                <div className="w-full max-w-md">

                    <h1 className="text-4xl font-bold text-center mb-8">
                        Contact Us
                    </h1>

                    <fieldset className="space-y-4">

                        <div>
                            <legend className="fieldset-legend text-xl font-light text-center">
                                Name
                            </legend>
                            <input
                                type="text"
                                className="input input-bordered w-full outline-none"
                                placeholder="Enter your fullname"
                            />
                        </div>

                        <div>
                            <legend className="fieldset-legend text-xl font-light text-center">
                                Email
                            </legend>
                            <input
                                type="email"
                                className="input input-bordered w-full outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <legend className="fieldset-legend text-xl font-light text-center">
                                Message
                            </legend>
                            <textarea
                                type="textarea"
                                className="input input-bordered w-full h-32 outline-none"
                                placeholder="Enter your message"
                            />
                        </div>

                        <button className="btn btn-primary w-full">
                            Send
                        </button>

                    </fieldset>

                </div>
            </div>



        </div>

    )
}

export default Contact
