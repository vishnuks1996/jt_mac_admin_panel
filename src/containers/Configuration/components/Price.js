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
      "audioConsultationFee": audio
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
              <div>
               

              </div>
            </div>
            <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
              <div className="me-2">Audio consultation fee</div><div className="me-2">{price.fees.audioConsultationFee}</div>
              <div>
                

              </div>
            </div>
          </div>
        
          <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={changePrice}> Change Price <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
        </div>
      </div>
      <Modal show={show}
        onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
          <div className="controls bg-light d-flex justify-content-between align-items-center mt-3 p-2 rounded-2">
            <label>Face to Face consultation fee</label>
            <div className="form-floating mx-2">
              <input type="number" className="form-control" id="price1" value={ftf} onChange={(e) => setFtf(e.target.value)} />
              
            </div>            
      
          </div>
          <div className="controls bg-light d-flex justify-content-between align-items-center mt-3 p-2 rounded-2">
            <label>Audio consultation fee</label>
            <div className="form-floating mx-2">
              <input type="number" className="form-control" id="price2" value={audio} onChange={(e) => setAudio(e.target.value)}/>
              
            </div>            
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <button className="shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={handleSubmit}> Save Changes <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
          <button onClick={handleClose} variant="secondary" className="shadow border-0 text-white bg-danger btn_primary rounded-pill"> Close <i className="fas fa-times bg-white text-dark" aria-hidden="true" /></button>
        </Modal.Footer>
      </Modal >
    </>
  )

}

export default Price