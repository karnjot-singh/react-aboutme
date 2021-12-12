import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";

function Town() {
    const [temp, setTemp] = useState('-')
    const [city, setCity] = useState(5969423)
    const [isCelcius, setCelcius] = useState(true)

    const cities = {
        5969423: 'Halifax',
        1273313: 'Dehradun',
        292223: 'Dubai',
        6455259: 'Paris',
        1261481: 'New Delhi',
        4190598: 'Dallas'
    }

    var imgSrc = temp==="-" ? "assets/notavailable.png" : 
                temp<=10 ? "assets/cold.png" :
                    temp<=20 ? "assets/mild.png" :
                        "assets/sunny.png"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=3eb8900663ea377b4baf633e7d885a34&units=Metric`)
          .then(res => res.json())
          .then(
            (result) => {
                if(result.cod===200){
                    setTemp(Math.round(result.main.temp))
                }
                else 
                {
                    setTemp('-')
                }
            },
            (error) => {
              console.log('Falied to fetch weather data')
              setTemp('-')
            }
          )
    })

    
    
    return (
        <div className='Font-Style'>
            <Row>
                <Col sm={6}>
                    <br />
                    <Image src="https://www.novascotia.com/sites/default/files/2019-05/Halifax%20Waterfront%20Purdy%27s%20Towers%201920x1080.jpg" fluid rounded />
                </Col>
            </Row>
            <Row>
                <Col sm={6} style={{textAlign:'left'}}>
                    <br />
                    <h1 >I live in Halifax, NS</h1>
                    <br />
                    <h5>
                    Halifax, or the Halifax Regional Municipality (HRM), is the capital of Nova Scotia, Canada. 
                    Halifax is a global city and an important economic center of eastern Canada.
                    </h5>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={1}>
                    <Image alt="Weather unavailable" src={imgSrc} fluid/>
                </Col>
                <Col xs={6} md={1} style={{textAlign: 'right', verticalAlign: 'middle', fontSize: temp==='-'? '1vw' : '2vw', color:'#349ceb'}}>
                    {isCelcius ? temp==='-'? 'Not Available' : temp : temp==='-'? 'Not Available' : (((temp*9)/5) + 32) }
                </Col>
                <Col xs={6} md={1} style={{textAlign: 'left', fontSize: '1.3vw', verticalAlign: 'middle'}}>
                   
                    
                    <Row style={{color: isCelcius?'#349ceb':'', cursor: 'pointer'}} 
                        onClick={() => setCelcius(true)}>
                        <span>&#176;C</span>
                    </Row>
                    <Row style={{color: !isCelcius?'#349ceb':'', cursor: 'pointer'}} 
                    onClick={() => setCelcius(false)}>
                        <span>&#176;F</span>
                    </Row>
                </Col>
                <Col md={1} style={{textAlign: 'right', fontSize: '1.5vw', verticalAlign: 'middle'}}>
                    { temp==='-'?undefined:
                        <Form.Label for="city">City</Form.Label>
                    }
                </Col>
                <Col md={2}>
                    { temp==='-'?undefined:
                        <Form.Control
                            id="city"
                            as="select"
                            custom
                            onChange={(val) => setCity(val.target.value)}
                            value={city}
                            >
                            {Object.entries(cities)
                            .map( ([key, value]) => <option value={key} >{value}</option> )}
                        </Form.Control>
                    }
                </Col>
            </Row>
        </div>
    );
  }

export default Town;