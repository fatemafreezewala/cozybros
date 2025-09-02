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
                            <h2 className="pbmit-staticbox-title">
                                {b.text}
                            </h2>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StaticBoxes;