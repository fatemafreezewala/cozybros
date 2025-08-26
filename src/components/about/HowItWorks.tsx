const HowItWorks = () => {
    const steps = [
        { num: "01", title: "Provide a Details", desc: "If you would like to request a special service, change your cleaning detail", icon: "pbmit-xclean-icon pbmit-xclean-icon-window-cleaning" },
        { num: "02", title: "Pick suitable plan", desc: "Request a special service for your cleaning home to cleaning thorough", icon: "pbmit-xclean-icon pbmit-xclean-icon-duster" },
        { num: "03", title: "Set Schedule", desc: "Select the schedule which are applicable to you and our staff help you anytime", icon: "pbmit-xclean-icon pbmit-xclean-icon-vaccum-cleaner" },
        { num: "04", title: "Get things done", desc: "Get amazing cleaning plus those cleaning & special find elsewhere", icon: "pbmit-xclean-icon pbmit-xclean-icon-dusting" },
    ];
    return (
        <section className="section-lgt">
            <div className="container">
                <div className="pbmit-bg-color-blackish ihbox-two-bg">
                    <div className="row g-0">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className="pbmit-heading-subheading animation-style2">
                                <h4 className="pbmit-subtitle">How it Works</h4>
                                <h2 className="pbmit-title">Get amazing cleaning in 4 simple steps</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row pbminfotech-gap-40px mt-md-5">
                        {steps.map((s) => (
                            <article className="pbmit-miconheading-style-6 col-md-6 col-lg-3" key={s.num}>
                                <div className="pbmit-ihbox pbmit-ihbox-style-6">
                                    <div className="pbmit-ihbox-headingicon">
                                        <div className="pbmit-ihbox-wrap">
                                            <div className="pbmit-ihbox-contents">
                                                <h2 className="pbmit-element-title">{s.title}</h2>
                                                <div className="pbmit-heading-desc">{s.desc}</div>
                                            </div>
                                            <div className="pbmit-ihbox-icon">
                                                <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                                                    <i className={s.icon}></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pbmit-content-number">
                                            <div className="pbmit-wrap-number">
                                                <div className="pbmit-ihbox-box-number">{s.num}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;