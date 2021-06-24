import React, { useState, useEffect } from 'react'
import { Modal, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getLocation, 
    createLocation, 
    deleteLocation as deleteLocationAction 
} from '../../../actions';

/**
* @author
* @function Price
**/

const Price = (props) => {
    const locations = useSelector((state) => state.locations);
    const auth = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const [deleteItem, setdeleteItem] = useState('');
    const [deleteLocationModal, setDeleteLocationModal] = useState(false);
    const [error, seterror] = useState('');
    const dispatch = useDispatch()
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), location: '' },
    ]);

    useEffect(() => {
        dispatch(getLocation())
    }, [auth.authenticate])

    const handleClose = () => {
        setShow(false)
        seterror('');
    }

    const handleSubmit = async () => {
        try {
            await new Promise((resolve, reject) => {
                inputFields.forEach((field) => {
                    if (field.location === '') {
                        seterror('Location is required');
                        reject()
                    }              
                })
                resolve()
            })
            setShow(false)
            seterror('');
            dispatch(createLocation(inputFields))
            console.log('inputFields', inputFields)
            setInputFields([{ id: uuidv4(), location: '' }])
        } catch (error) {
            console.error(error)
        }

    };

    const addNewLocation = () => {
        setShow(true)
    }
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

    const addMore  = () => {
        setInputFields([...inputFields, { id: uuidv4(), location: '' }])
    }
    
    const deleteLocation = (location) => {
        setdeleteItem(location);
        setDeleteLocationModal(true);
    }

    const confirmDelete = async () => {
        const id = deleteItem.id;
      try {
        dispatch(deleteLocationAction(id)) 
        setDeleteLocationModal(false);
        setdeleteItem('')
      } catch (error) {
          
      }
    }

    const renderAddLocationModel = () => {
        return (
            <Modal show={show}
            onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="controls bg-light align-items-center mt-3 p-2 rounded-2">
                    {error && <Alert variant="danger">{error}</Alert>}
                    {inputFields.map(inputField => (
                        <div className="row justify-content-between align-items-end" key={inputField.id}>
                            <div>
                                <div className="form-floating mx-2">
                                    <input type="text" className="form-control" name="location" value={inputField.location} onChange={event => handleChangeInput(inputField.id, event)} id="location" placeholder="Thrissur" />
                                    <label htmlFor="location">Add Location</label>
                                </div>
                                <div className="">
                                    <button disabled={inputFields.length === 1} className="h-25 w-auto d-inline-block btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger" onClick={() => handleRemoveFields(inputField.id)}><i className="far fa-trash-alt m-0" /></button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="mt-2 float-end shadow border-0  bg_yellow btn_primary rounded-pill" onClick={addMore}> Add more </button>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button className="shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={handleSubmit}> Save Changes <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
                <button onClick={handleClose} variant="secondary" className="shadow border-0 text-white bg-danger btn_primary rounded-pill"> Close <i className="fas fa-times bg-white text-dark" aria-hidden="true" /></button>
            </Modal.Footer>
        </Modal >
        )
    }

    const renderDeleteLocationModel = () => {
        return (
            <Modal show={deleteLocationModal}
            onHide={() => setDeleteLocationModal(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Delete Location</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <div className="controls bg-light align-items-center mt-3 p-2 rounded-2">
                {error && <Alert variant="danger">{error}</Alert>}
                <p>Are you sure you want to delete "{deleteItem.location}"</p>
    
    
              </div>
    
            </Modal.Body>
            <Modal.Footer>
              <button className="shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={confirmDelete}> Confirm <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
              <button onClick={() => setDeleteLocationModal(false)} variant="secondary" className="shadow border-0 text-white bg-danger btn_primary rounded-pill"> Cancel <i className="fas fa-times bg-white text-dark" aria-hidden="true" /></button>
            </Modal.Footer>
          </Modal >
        )
    }

    return (
        <>
            <div className="tab-pane fade" id="pills_location" role="tabpanel" aria-labelledby="pills_location_tab">
                <div className="content">
                    <h6 className="mb-3"><strong>Available Locations</strong></h6>
                    {locations.locations.length > 0 ? locations.locations.map(location => (
                        <div className="data_wrap">
                            <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                                <div className="me-2"> {location.location}</div>
                                <div>
                                    <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger" onClick={() => deleteLocation(location)}><i className="far fa-trash-alt m-0" /></button>
                                </div>
                            </div>

                        </div>
                    )) : null}


                    <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={addNewLocation}> Add New Location <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
                </div>
            </div>
            {renderAddLocationModel()}
            {renderDeleteLocationModel()}
           
        </>
    )

}

export default Price