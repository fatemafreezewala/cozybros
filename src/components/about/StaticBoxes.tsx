const StaticBoxes = () => {
    const boxes = [
        { img: "images/homepage-3/static-box/static-box-img-01.jpg", text: "Experienced Staff" },
        { img: "images/homepage-3/static-box/static-box-img-02.jpg", text: "Natural Products" },
        { img: "images/homepage-3/static-box/static-box-img-03.jpg", text: "Best Equipment" },
    ];
    return (
        <section>
            <div className="container">
                <div className="row pbminfotech-gap-40px">
                    {boxes.map((b) => (
                        <article className="pbmit-static-box-style-1 col-md-4" key={b.text}>
                            <div className="pbminfotech-post-item">
                                <div className="pbmit-title-wrapper">
                                    <img src={b.img} alt="" />
                                </div>
                                <div className="pbmit-staticbox-wraper">
                                    <h2 className="pbmit-staticbox-title">
                                        <a href="#">
                                            <span className="pbmit-button-text"> {b.text} </span>
                                            <span className="pbmit-button-icon-wrapper">
                                                <span className="pbmit-button-icon">
                                                    <i className="pbmit-base-icon-black-arrow-1"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StaticBoxes;