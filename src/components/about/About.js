import "./about.css"
import MeTwo from "../../images/me2.JPG";
import Award from "../../images/award.png"

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                        <img src={MeTwo} alt="" className="a-img" />
                </div>           
            </div>
           
           <div className="a-right">
               <h1 className="a-title">About Me</h1>
               <p className="a-sub">
                   Currently Works on ReactJs and Seeing my self in Future MERN Stack Developer.
                </p>
               <p className="a-desc">
               Innovative Programmer to make the world a more unified. A creative thinker, adept in software development and
working with various data structures and Design pattern's.
               </p>
               <div className="a-award">
                   <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className="a-award-title">ABC AWARD</h4>
                        <p className="a-award-desc">
                            i am a awarded abvadfa asdads azxaa arelgaskjnajr  aasdflanflsd asdncaejrlf ad ajflasdn calsdjfnaljsd aldsjfnlasd  ca ldjfanlsdj csadljrnflsdamndfjreladsl asdfa asdfa asxx
                        </p>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default About;
