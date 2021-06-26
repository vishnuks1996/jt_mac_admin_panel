import React, { useState, useEffect } from 'react'
import { Modal, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPrice, changeFee } from '../../../actions';

/**
* @author
* @function Price
**/

const Price = (props) => {
  const price = useSelector((state) => state.price);
  const auth = useSelector(state => state.auth)
  const [show, setShow] = useState(false);
  const [ftf, setFtf] = useState(false);
  const [audio, setAudio] = useState(false);
  const [video, setVideo] = useState(false);
  const [error, seterror] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPrice())
  }, [auth.authenticate])

  const handleClose = () => {
    setShow(false)
    seterror('');
  }

  const handleSubmit = () => {
    if(ftf === '') {
      seterror('Face to Face is required')
      return;
    }
    if(audio === '') {
      seterror('Audio is required')
      return;
    }
    const fees = {
      "ftfConsultationFee": ftf,
      "audioConsultationFee": audio,
      "videoConsultationFee": video
    }
    // const form = new FormData();
    // form.append("ftfConsultationFee", ftf);
    // form.append("audioConsultationFee", audio);

    dispatch(changeFee(fees))
    setShow(false)
    seterror('')
  }
  const changePrice = () => {
    setFtf(price.fees.ftfConsultationFee)
    setAudio(price.fees.audioConsultationFee)
    setVideo(price.fees.videoConsultationFee)
    setShow(true)
  }

  return (
    <>
      <div className="tab-pane fade" id="pills_price" role="tabpanel" aria-labelledby="pills_price_tab">
        <div className="content">
          <h6 className="mb-3"><strong>Type of consultation</strong></h6>
          <div className="data_wrap">
            <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
              <div className="me-2">Face to Face consultation fee</div><div className="me-2">{price.fees.ftfConsultationFee}</div>
              
            </div>
            <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
              <div className="me-2">Video consultation fee</div><div className="me-2">{price.fees.videoConsultationFee}</div>
              
            </div>
            <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
              <div className="me-2">Audio consultation fee</div><div className="me-2">{price.fees.audioConsultationFee}</div>
              
            </div>
          </div>
        
          <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={changePrice}> Change Price <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
        </div>
      </div>
      <Modal show={show}
        onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Consultation Fees</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
          <div className="border bg-light rounded-2 mx-3 mb-3 p-3 position-relative">
            <div className="form-floating">
              <input type="number" className="form-control" id="price1" value={ftf} onChange={(e) => setFtf(e.target.value)} />
              <label htmlFor="price1">Face to Face consultation fee</label>
            </div>            
      
          </div>
          <div className="border bg-light rounded-2 mx-3 mb-3 p-3 position-relative">
            <div className="form-floating">
              <input type="number" className="form-control" id="price1" value={video} onChange={(e) => setVideo(e.target.value)} />
              <label htmlFor="price1">Video consultation fee</label>
            </div>            
      
          </div>
          <div className="border bg-light rounded-2 mx-3 mb-3 p-3 position-relative">
            
            <div className="form-floating">
              <input type="number" className="form-control" id="price2" value={audio} onChange={(e) => setAudio(e.target.value)}/>
              <label htmlFor="price2">Audio consultation fee</label>
            </div>            
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} variant="secondary" className="px-3 shadow border-0 text-dark 
                     btn_primary rounded-pill"> Close </button>
          <button className="px-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={handleSubmit}> Save Changes </button>
          
        </Modal.Footer>
      </Modal >
    </>
  )

}

export default Price