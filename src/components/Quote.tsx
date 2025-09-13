
export default function Quote({ show, setShow }: any) {
    return (
        <>
            {show && (
                <div className="modal show fade d-block" tabIndex={-1} role="dialog" >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h5 className="modal-title">Request a Quote</h5>
                                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                            </div>

                            {/* Modal Body (Quote Form) */}
                            <div className="modal-body">
                                <section className="section-lgb">
                                    <div className="container-fluid">
                                        <div className="contact-form-rightbox" style={{ background: 'transparent' }}>
                                            <form className="contact-form" method="post" id="contact-form" action="send-dummy.php" noValidate>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control" placeholder="Your Name" name="name" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="email" className="form-control" placeholder="Your Email" name="email" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="tel" className="form-control" placeholder="Your Phone" name="phone" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" className="form-control" placeholder="Services" name="subject" required />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea name="message" cols={40} rows={5} className="form-control" placeholder="Message" required></textarea>
                                                    </div>
                                                    {/* <div className="col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="saveInfo" />
                                                            <label className="form-check-label" htmlFor="saveInfo">
                                                                Save my name, email, and website in this browser for the next time I comment.
                                                            </label>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-md-12 mt-3">
                                                        <button type="submit" className="pbmit-btn btn btn-dark w-100">
                                                            <span className="pbmit-button-content-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                                                                        <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth="2" />
                                                                        <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth="2" />
                                                                        <path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth="2" />
                                                                    </svg>
                                                                </span>
                                                                <span className="pbmit-button-text">Get Cost Estimate</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="message-status mt-3"></div>
                                            </form>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Modal Footer */}


                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
