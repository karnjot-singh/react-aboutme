import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About() {
    return (
        <div>
            <Row sm={4}>
                <Image src="https://cdn.pixabay.com/photo/2018/10/05/21/29/bat-3726896_1280.png" rounded />
            </Row>
            <Row className='Font-Style'>
                <Col sm={6} style={{textAlign:'left'}}>
                    <h1 >Hi, I'm Karnjot Singh</h1>
                    <p>I am studying Master in Computing & Data Analytics at SMU, Halifax, NS</p>
                    <br />
                    <p>
                        I joined MCDA program to get to know about Data Analysis and Visualization as well as software development and statistics.
                    </p>
                </Col>
            </Row>
        </div>
    );
  }

export default About;