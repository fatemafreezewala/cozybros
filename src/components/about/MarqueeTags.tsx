const MarqueeTags = () => {
    const tags = ["Cleaning", "Moping", "Vacuum", "Sweeping"];
    return (
        <section className="pt-5 overflow-hidden">
            <div className="container-fluid p-0">
                <div className="swiper-slider marquee">
                    <div className="swiper-wrapper">
                        {tags.map((t) => (
                            <article className="pbmit-marquee-effect-style-1 swiper-slide" key={t}>
                                <div className="pbmit-tag-wrapper">
                                    <h2 className="pbmit-element-title" data-text={t}>{t}</h2>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default MarqueeTags;