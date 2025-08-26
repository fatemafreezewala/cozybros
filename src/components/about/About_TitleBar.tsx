

const TitleBar = () => {
    return (
        <div className="pbmit-title-bar-wrapper">
            <div className="container">
                <div className="pbmit-title-bar-content">
                    <div className="pbmit-title-bar-content-inner">
                        <div className="pbmit-tbar">
                            <div className="pbmit-tbar-inner container">
                                <h1 className="pbmit-tbar-title"> About Us</h1>
                            </div>
                        </div>
                        <div className="pbmit-breadcrumb">
                            <div className="pbmit-breadcrumb-inner">
                                <span>
                                    <a title="" href="#" className="home"><span>Xcleen</span></a>
                                </span>
                                <span className="sep">
                                    <i className="pbmit-base-icon-angle-right"></i>
                                </span>
                                <span><span className="post-root post post-post current-item"> About Us</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TitleBar;