import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Alert } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { getSpecialisations, 
  createSpecialisation, 
  deleteSpecialisation as deleteSpecialisationAction 
} from '../../../actions';
import axios from "../../../helpers/axios";

/**
* @author
* @function Specialisations
**/

const Specialisations = (props) => {
  const spec = useSelector((state) => state.specialisation);
  const auth = useSelector(state => state.auth)
  const [show, setShow] = useState(false);
  const [deleteItem, setdeleteItem] = useState('');
  const [deleteSpecialisationModal, setDeleteSpecialisationModal] = useState(false);
  const dispatch = useDispatch();
  const [error, seterror] = useState('');
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), specialisation: ''},
  ]);

  useEffect(() => {
    dispatch(getSpecialisations())
  }, [auth.authenticate])

  const addNewSlot = () => {
    setShow(true);
    console.log('addNewSlot', show);
  }

  const addSlot = () => {
    setInputFields([...inputFields, { id: uuidv4(), specialisation: ''}])

  }

  const handleSubmit = async () => {
    try {
      await new Promise((resolve, reject) => {
        inputFields.forEach((field) => {
          if (field.specialisation === '') {
            seterror('Specialisation is required');
            reject()
          }

        })
        resolve()
      })
      setShow(false)
      seterror('');
      dispatch(createSpecialisation(inputFields))
      console.log(inputFields)
      setInputFields([{ id: uuidv4(), specialisation: ''}])
    } catch (error) {
      console.error(error)
    }

  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields(newInputFields);
  }

  const handleRemoveFields = id => {
    const values = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  const handleClose = () => {
    setShow(false)
    seterror('');
    setInputFields([{ id: uuidv4(), specialisation: ''}])
  }

  const deleteSpecialisation = (spec) => {
    setdeleteItem(spec);
    setDeleteSpecialisationModal(true);
  }

  const confirmDelete = async () => {
    const id = deleteItem.id;
    try {
      dispatch(deleteSpecialisationAction(id))
      setDeleteSpecialisationModal(false);
      setdeleteItem('')
    } catch (error) {
      console.log(error)
    }
  }

  const renderAddSpecialisationModel = () => {
    return (
    <Modal show={show}
        onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Specialisation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="controls bg-light align-items-center mt-3 p-2 rounded-2">
            {error && <Alert variant="danger">{error}</Alert>}
            {inputFields.map(inputField => (
              <div className="row justify-content-between align-items-end" key={inputField.id}>
                <div>
                  <div className="form-floating mx-2">
                    <input type="text" className="form-control" name="specialisation" value={inputField.specialisation} onChange={event => handleChangeInput(inputField.id, event)} id="issue" placeholder="Student issue" />
                    <label htmlFor="issue">Add Specialisation</label>
                  </div>
                  <div className="">
                    <button disabled={inputFields.length === 1} className="h-25 w-auto d-inline-block btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger" onClick={() => handleRemoveFields(inputField.id)}><i className="far fa-trash-alt m-0" /></button>
                  </div>
                </div>
              </div>
            ))}

            <button onclick="add_slot()" className="mt-2 float-end shadow border-0  bg_yellow btn_primary rounded-pill" onClick={addSlot}> Add Slot </button>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button className="shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={handleSubmit}> Save Changes <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
          <button onClick={handleClose} variant="secondary" className="shadow border-0 text-white bg-danger btn_primary rounded-pill"> Close <i className="fas fa-times bg-white text-dark" aria-hidden="true" /></button>
        </Modal.Footer>
      </Modal >
    )

  }

  const renderDeleteSpecialisationModel = () => {
    return (
      <Modal show={deleteSpecialisationModal}
          onHide={() => setDeleteSpecialisationModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Delete Specialisation</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <div className="controls bg-light align-items-center mt-3 p-2 rounded-2">
              {error && <Alert variant="danger">{error}</Alert>}
              <p>Are you sure you want to delete "{deleteItem.specialisation}"</p>
  
  
            </div>
  
          </Modal.Body>
          <Modal.Footer>
            <button className="shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={confirmDelete}> Confirm <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
            <button onClick={() => setDeleteSpecialisationModal(false)} variant="secondary" className="shadow border-0 text-white bg-danger btn_primary rounded-pill"> Cancel <i className="fas fa-times bg-white text-dark" aria-hidden="true" /></button>
          </Modal.Footer>
        </Modal >
      )
  }

  return (
    <>
      <div className="tab-pane fade" id="pills_issue" role="tabpanel" aria-labelledby="pills_issue_tab">
        <div className="content">
          <h6 className="mb-3"><strong>Add or modify Issue Type</strong></h6>
          <div className="data_wrap">
            {spec.specialisations.length > 0 ? spec.specialisations.map((spec) => (
              <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2" key={spec.id}>
                <div className="me-2">{spec.specialisation}</div>
                <div>
          
                  <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger" onClick={() => deleteSpecialisation(spec)} ><i className="far fa-trash-alt m-0" /></button>
                </div>
              </div>
            )) : null}

          </div>

          <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={addNewSlot}> Add <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
        </div>
      </div>
      {renderAddSpecialisationModel()}
      {renderDeleteSpecialisationModel()}
    </>
  )

}

export default Specialisations