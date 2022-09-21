const Carousel = () => {
  return <div>
    {/* 배당 TOP 10 */}
    
    <div className="area">
    
    <div className="container">
        <div className="row">
            <div className="col-6">
                <section className="review-area" id="review">
        
                    <div className="title">
                        배당 TOP 10
                    </div>

                    <div className="container">
                        <div className="z">
                            
                        {/* 배당 TOP 10 기업 내용 */}
                            <div className="review-slide res-show">
                                <div className="name">
                                    기업1
                                </div>
                            </div>

                            <div className="review-slide show">
                                <div className="name">
                                    기업2
                                </div>
                            </div>

                            <div className="review-slide show">
                                <div className="name">
                                    기업3
                                </div>
                            </div>

                            <div className="review-slide hide">
                                <div className="name">
                                    기업4
                                </div>
                            </div>

                            <div className="review-slide hide">
                                <div className="name">
                                    기업5
                                </div>
                            </div>

                            <div className="review-slide hide">
                                <div className="name">
                                    기업6
                                </div>
                            </div>

                            <div className="review-slide hide">
                                <div className="name">
                                    기업7
                                </div>
                            </div>

                            <div className="review-slide hide">
                                <div className="name">
                                    기업8
                                </div>
                            </div>

                            <div className="review-slide hide">
                                <div className="name">
                                    기업9
                                </div>
                            </div>

                            <div className="review-slide hide">
                                <div className="name">
                                    기업10
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

    {/* 추천 기업 */}
            <div className="col-6">
                <section className="recommend-area" id="recommend">

                    <div className="title">
                        추천 기업
                    </div>

                    <div className="container">
                        <div className="R">
                       
                        {/* 추천 기업 내용 */}
                            <div className="recommend-slide res-show">
                                <div className="name">
                                기업1
                                </div>
                            </div>

                            <div className="recommend-slide show">
                                <div className="name">
                                기업2
                                </div>
                            </div>

                            <div className="recommend-slide show">
                                <div className="name">
                                기업3
                                </div>
                            </div>

                            <div className="recommend-slide hide">
                                <div className="name">
                                기업4
                                </div>
                            </div>

                            <div className="recommend-slide hide">
                                <div className="name">
                                기업5
                                </div>
                            </div>

                            <div className="recommend-slide hide">
                                <div className="name">
                                기업6
                                </div>
                            </div>

                            <div className="recommend-slide hide">
                                <div className="name">
                                기업7
                                </div>
                            </div>

                            <div className="recommend-slide hide">
                                <div className="name">
                                기업8
                                </div>
                            </div>

                            <div className="recommend-slide hide">
                                <div className="name">
                                기업9
                                </div>
                            </div>

                            <div className="recommend-slide hide">
                                <div className="name">
                                기업10
                                </div>
                            </div>
                        </div>
                    </div>
                </section>           
            </div>
        </div>
    </div>
    </div>

    </div>;
  
};
export default Carousel;
