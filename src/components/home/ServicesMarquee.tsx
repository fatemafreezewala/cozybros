export default function ServicesMarquee() {
  return (
    <section>
      <div className='container-fluid p-0'>
        <div className='swiper-slider marquee'>
          <div className='swiper-wrapper'>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Air Conditioning'>
                  Air Conditioning
                </h2>
              </div>
            </article>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Furnaces'>
                  Furnaces
                </h2>
              </div>
            </article>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Boilers'>
                  Boilers
                </h2>
              </div>
            </article>
            <article className='pbmit-marquee-effect-style-1 swiper-slide'>
              <div className='pbmit-tag-wrapper'>
                <h2 className='pbmit-element-title' data-text='Plumbing & Re-Piping'>
                  Plumbing & Re-Piping
                </h2>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
