import { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

import './App.css';
import VideoPlayerComponenet from './Components/VideoPlayer/VideoPlayerComponenet';
import Analyze from './Components/Analyze/Analyze';
import Spinner from './Components/Common/Spinner/Spinner';

function App() {
  const [videoSource, setVideoSource] = useState('');
  const [analyze, setAnalyze] = useState(false);
  const [analyzedData, setAnalyzedData] = useState('');

  const video_data = {
    chartData: { 'angry': 5, 'disgusted': 1, 'fear': 5, 'happy': 4, 'neutral': 29, 'sad': 4, 'surprised': 1 },
    averageChart: { 'positive': 317, 'negative': 190, 'neutral': 79 }
  }

  const handleSetVideo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoSource(URL.createObjectURL(file) || "https://media.w3.org/2010/05/sintel/trailer_hd.mp4");
      setAnalyze(false);
      setAnalyzedData('');
    }
  }

  const handleAnalyze = () => {
    setAnalyze(true);
    setAnalyzedData('');
    setTimeout(() => {
      setAnalyze(false);
      setAnalyzedData(video_data);
    }, 5000)
  }

  return (
    <div className="App">
      <Row md={12} className='w-100'>
        <Col md={7} className='p-5'>
          <VideoPlayerComponenet videoSource={videoSource} />
        </Col>
        <Col md={4} className='p-5 d-flex justify-content-center flex-column'>
          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose Video to Play</Form.Label>
              <Form.Control name="video" accept="video/*" required type="file" onChange={handleSetVideo} />
            </Form.Group>
          </Row>
          <hr />
          <Row className='d-flex justify-content-center'>
            <Button className='w-75' disabled={analyze || !videoSource || analyzedData !== ''} onClick={handleAnalyze}>
              {!analyze ? 'Analyze the Uploaded Video' : <Spinner />}
            </Button>
          </Row>
        </Col>
        <Analyze analyzedData={analyzedData} analyze={analyze} />
      </Row>
    </div>
  );
}

export default App;
