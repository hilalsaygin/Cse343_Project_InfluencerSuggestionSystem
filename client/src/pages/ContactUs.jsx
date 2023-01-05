import React from 'react'
import "./indexPages.css"
import "./ContactUs.css"

function ContactUs() {
    return (
        <div className='contactus-main'>
            <div className='contactus-bot'>

                <h3 className='Contact_us-title'>
                    Bize Ulaşın
                </h3>

                <div className='boxes'>
                    <div className='name-box'>
                        <p className="nameSurnamelabel-Contact_us">
                            Adınız
                        </p>

                        <div className="nameSurname-Contact_us">
                            {/*<label>Email address</label>*/}
                            <input type="text" className="form-control mt-1" placeholder="Adınızı Girin"/>
                        </div>
                    </div>
                    
                    <div className='email-box'>
                        <p className="emaillabel-Contact_us">
                            Email Adresi
                        </p>

                        <div className="email-Contact_us">
                            {/*<label>Email address</label>*/}
                            <input type="email" className="form-control mt-1" placeholder="Enter email"/>
                        </div>

                    </div>

                </div>

                <div className='sikayet-box'>
                    <p className="Contact_us-textlabel">
                        istek ve şikayetler
                    </p>

                    <div className='Contact_us-text'>
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Adınızı Girin"
                            rows="8"/>

                    </div>

                    <div className="submit-Contact_us1">
                        <button type="submit" className='submit-Contact_us'>
                            Gönder
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs;