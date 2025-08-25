
const Services_Content_TitleBar = () => {
  return (
    <>
      <div
        className="services-hero-image"
        style={{
          position: "relative",
          width: "100%",
          height: "400px", 
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/assets/images/Home/OurServices1.svg"
          alt="Our Services"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", 
            zIndex: 2,
          }}
        ></div>

        <h1
          style={{
            position: "relative",
            zIndex: 3,
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: 0,
          }}
        >
          Our Services
        </h1>
      </div>
    </>
  );
};

export default Services_Content_TitleBar;
