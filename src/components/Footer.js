import React, {Component} from 'react'
import { FooterWrapper } from '../styles/FooterLayout';

class Footer extends Component {
    render(){
        return (
            <FooterWrapper>
                <div className="address">
                서울특별시 강남구 테허란로 212(역삼동 718-5번지) 504호
                </div>
                <div className="copyright">
                Copyright by HappyNewear team, Ltd. All rights reserved.
                </div>
                <div className="contact">
                    <a href="https://github.com/HappyNewEar">
                        <img
                        src="/images/footer/github-icon.PNG"
                        alt="github-icon"
                        style={{ height: "2em" }}
                        />
                    </a>
                    <a href={"mailto:yeonzzu2@gmail.com"}>
                        <img
                        src="/images/footer/email-icon.jpg"
                        alt="github-icon"
                        style={{ height: "1.9em" }}
                        />
                    </a>
                </div>
            </FooterWrapper>
        );
    }
}

export default Footer;