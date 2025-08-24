export default function ServicesMarquee() {
  return (
    <section>
      <div className='container-fluid p-0'>
        <div className='swiper-slider marquee'>
          <div className='swiper-wrapper'>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Cleaning'>
                  Cleaning
                </h2>
              </div>
            </article>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Moping'>
                  Moping
                </h2>
              </div>
            </article>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Vacuum'>
                  Vacuum
                </h2>
              </div>
            </article>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Sweeping'>
                  Sweeping
                </h2>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
