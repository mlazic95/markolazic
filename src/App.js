import React, {Component} from 'react';
import styled from 'styled-components';
import { Linkedin, GitHub } from 'react-feather'
import Sky from 'react-sky';
import python from "./media/python.png"
import java from "./media/java.png"
import swift from "./media/swift.png"
import git from "./media/git.png"
import unity from "./media/unity.png"
import cpp from "./media/cpp.png"
import cs from "./media/cs.png"
import jenkins from "./media/jenkins.png"
import postgres from "./media/postgres.png"
import tensorflow from "./media/tensorFlow.png"
import js from "./media/js.png"
import linux from './media/linux.png'
import node from './media/node.png'
import segmentation from './projects/segmentation.png'
import drone from './projects/drone.jpg'
import ecosystem from './projects/ecosystem.png'




class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.state = {
      education: false,
      workExperience: false,
      projects: false,
    }
  }
  render() {
    return (
      <div>
        <W1>
          <T1>
            Marko Lazic
          </T1>
        </W1>
        <W2>
          <B1 onClick= {e=> this.setState({education: !this.state.education}) }>
            Education
          </B1>
        </W2>
        {this.state.education &&
          <div className='education'>
            <Sub>
              2018 - 2020 --- M.Sc Computer Science KTH Royal Institute of Technology
            </Sub>
            <SubSub>
              Track Data Science
            </SubSub>
            <SubSub>
              Subtrack Machine Learning
            </SubSub>
            <Sub>
              2015 - 2018 --- B.Sc Computer Science KTH Royal Institute of Technology
            </Sub>
          </div>
        }
        <W4>
          <B3 onClick= {e=> this.setState({workExperience: !this.state.workExperience}) }>
            Work Experience
          </B3>
        </W4>
        {this.state.workExperience &&
        <div className="workExp">
            <Sub>
            2020 - Present --- Master Thesis at Bontouch
            </Sub>
            <SubSub>
            Using Natural Language Processing to extract key information from receipts.
            </SubSub>
            <Sub>
            2019 - 2020 --- Backend Developer at Brandie
            </Sub>
            <SubSub>
            Working on an application developed in NodeJs.
            </SubSub>
            <Sub>
            2017 - 2019 --- iOS Developer
            </Sub>
            <SubSub>
            Developed an native iOS application.
            </SubSub>
            <Sub>
            2017 --- Softwere developer at Megger
            </Sub>
            <SubSub>
            Developed a USB stack for Atmel microcontroller
            </SubSub>
            <a href="https://app.adjust.com/8stiz33?redirect=https%3A%2F%2Fgoogle.com">Ref</a>
        </div>
        }
        <W3>
          <B2 onClick= {e=> this.setState({projects: !this.state.projects})}>
            Projects
          </B2>
        </W3>
        {this.state.projects &&
          <div className="projects">
          <Project title="Retinal Blood Vessel Segmentation using U-NETs" image={segmentation} description={texts.segmentationText}/>
          <Project title="Chipcopter Drone" image={drone} description={texts.droneText}/>
          <Project title="Forest Ekosystem" video={"https://drive.google.com/uc?export=download&id=1VTdDNh6qn5Q817tbbg3T5nE1ArqaTadL"} description={texts.ecosystemText}/>
          <div className="empty"/>
        </div>
        }
        <div className="sky">
          <SkyCont/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #E24585;
  border-radius: 3px;
  color: #E24585;
  border-color: #E24585;
`;

const B1 = styled(Button)`
  background: #009CDE;
`;

const B2 = styled(Button)`
  background: #623D91;
`;

const B3 = styled(Button)`
  background: #623D91;
  border-color: #009CDE;
`;

const T1 = styled.h1`
  font-size: 3.0em;
  text-align: center;
  color: #E24585;
`;

const Sub = styled.h1`
  font-size: 0.8em;
  text-align: left;
  color: black;
`;

const SubSub = styled(Sub)`
  font-size: 0.7em;
  padding-left: 20px;
`;

const W1 = styled.section`
  padding 0.1em;
  background: #00B1AA;
  text-align: center;
`;
const W2 = styled.section`
  padding: 1em;
  background: #009CDE;
  text-align: center;
`;

const W3 = styled.section`
  padding: 1em;
  background: #623D91;
  text-align: center;
`;

const W4 = styled.section`
  padding: 1em;
  background: #E24585;
  text-align: center;
`;

const ProjectName = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const ProjectDescription = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: black;
`;

const Footer = () => (
  <div className='social'>
    <a href='https://www.linkedin.com/in/marko-lazic-a12a65132/'>
      <Linkedin color='#3b5998' size={30} />
    </a>
    <a href='https://github.com/markolazic261'>
      <GitHub color='#6cc644' size={30} />
    </a>
    <Copyright/>
  </div>
)

const Copyright = () => (
  <p className="copyright">&copy; 2020 Marko Lazic</p>
)
const SkyCont = () => (
  <Sky
    images={{
      0: python,
      1: git,
      2: unity,
      3: java,
      4: swift,
      5: cpp,
      6: cs,
      7: jenkins,
      8: postgres,
      9: tensorflow,
      10: linux,
      11: js,
      12: node,
    }}
    how={100} /* Pass the number of images Sky will render chosing randomly */
    time={5} /* time of animation */
    size={'40px'} /* size of the rendered images */
    background={'#ffffed'} /* color of background */
    />
)

class Project extends Component {
  render() {
    return (
      <div className="project">
      <ProjectName>
        {this.props.title}
      </ProjectName>
      {this.props.image != null &&
        <img className="projectImage" src={this.props.image} alt=""/>
      }
      {this.props.video != null &&
        <VideoComponent video={this.props.video}/>
      }
      <ProjectDescription>
        {this.props.description} 
      </ProjectDescription>
      <hr/>
      </div>
      ) 
    } 
  }


  class VideoComponent extends Component {
    render() {
      return (
        <div className="video">
          <video
            width="350px"
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            poster={ecosystem}
            data-setup='{}'>
            <source src={this.props.video} type="video/mp4"></source>
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank">
                supports HTML5 video
              </a>
            </p>
          </video>
        </div>
      )
    }
  }


const texts = {
  ecosystemText: "The simulation of a forest ecosystem with AI behaviour for foxes, rabbits, and bees",
  droneText: "The flight controller software for a ChipKit Uno32, that we used in our drone project for the IS1500 Computer Science & Components course at the Royal Institute of Technology in Stockholm, Sweden.",
  segmentationText : "Viewing the structure of the retinal vascular tree is important when treating and diagnosing various medical conditions. Manual segmentation is both labor intensive as well as prone to errors, even when performed by specialists. We have explored different U-NET architectures on the DRIVE and CHASE datasets. The networks were trained on 32x32 pixel sized patches uniformly drawn at random from grayscale versions of the original images. Our best model achieved an AUC score of 0.977, which to our knowledge is the second highest to date.",
}