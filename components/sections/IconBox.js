'use client'
import Link from 'next/link'
import { useState } from "react"

export default function IconBox() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="widget-icon-box mt--115">
                <div className="themesflat-container">
                    <div className="header-section tab-car-service">
                <div className="heading-section">
                    <span className="sub-title mb-6 wow fadeInUp">Find your car </span>
                    <h2 className="title wow fadeInUp">Explore all Vehicles</h2>
                </div>
                <ul className="nav nav-pills justify-content-end" id="pills-tab-service" role="tablist">
                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                        <button className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                            All Status</button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                        <button className={activeIndex == 2 ? "nav-link active" : "nav-link"}>New Cars</button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                        <button className={activeIndex == 3 ? "nav-link active" : "nav-link"}>Used Cars</button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="pills-tabContent">
                <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
              
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/#" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/partner/1.png" alt="" />
                                </div>
                                <span className="title-icon">Acura</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/#" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/partner/2.png" alt="" />
                                </div>
                                <span className="title-icon">Ford</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/#" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/partner/3.png" alt="" />
                                </div>
                                <span className="title-icon">Bentley</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/#" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/partner/4.png" alt="" />
                                </div>
                                <span className="title-icon">Cheavrolet</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/#" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/partner/5.png" alt="" />
                                </div>
                                <span className="title-icon">Ferrari</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/#" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/partner/6.png" alt="" />
                                </div>
                                <span className="title-icon">Mercedes</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


                </div>
            </div>
        </>
    )
}
