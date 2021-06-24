import React, { useState, useEffect } from 'react';
import { Modal, Alert } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getSlot, 
    createSlot, 
    deleteSlot as deleteSlotAction
} from '../../../actions';

/**
* @author
* @function Slots
**/

const Slots = (props) => {
    const slots = useSelector((state) => state.slots);
    const auth = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const [error, seterror] = useState('');
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), fromTime: '', toTime: '', date: '', location: '' },
    ]);
    const [deleteItem, setdeleteItem] = useState('');
    const [updateItem, setUpdateItem] = useState('');
    const [updateFromTime, setUpdateFromTime] = useState('');
    const [updateLocationId, setUpdateLocationId] = useState('');
    const [updateToTime, setUpdateToTime] = useState('');
    const [updateDate, setUpdateDate] = useState('');
    const [deleteSlotModal, setDeleteSlotModal] = useState(false);
    const [updateSlotModal, setUpdateSlotModal] = useState(false);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getSlot())
    }, [auth.authenticate])

    const addNewSlot = () => {
        setShow(true);
    }

    const addSlot = () => {
        setInputFields([...inputFields, { id: uuidv4(), fromTime: '', toTime: '', date: '', location: '' }])

    }
    
    
    const handleSubmit = async () => {
        try {
            await new Promise((resolve, reject) => {
                inputFields.forEach((field) => {
                    if (field.location === '') {
                        seterror('Location is required');
                        reject()
                    }
                    if (field.date === '') {
                        seterror('Date is required');
                        reject()
                    }
                    if (field.toTime === '') {
                        seterror('To Time is required');
                        reject()
                    }
                    if (field.fromTime === '') {
                        seterror('From Time is required');
                        reject()
                    }                  
                })
                resolve()
            })
            setShow(false)
            seterror('');
            dispatch(createSlot(inputFields))
            setInputFields([{ id: uuidv4(), fromTime: '', toTime: '', date: '', location: '' }])
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
        setInputFields([{ id: uuidv4(), fromTime: '', toTime: '', date: '', location: '' }])
    }

    const confirmDelete = async () => {
        const id = deleteItem.id;
        console.log('id', id)
      try {
        dispatch(deleteSlotAction(id)) 
        setDeleteSlotModal(false);
        setdeleteItem('')
      } catch (error) {
          
      }
    }

    const deleteSlot = (slot) => {
        if (slot.booked !== true ) {
            setdeleteItem(slot); 
            setDeleteSlotModal(true);
        } else {
            alert('Slote already booked')
        }  
        
    }

    const updateSlot = (slot) => {
        if (slot.booked !== true ) {
            setUpdateFromTime(slot.fromTime)
            setUpdateToTime(slot.toTime)
            setUpdateDate(slot.date)
            setUpdateLocationId(slot.LocationId)
            setUpdateItem({id: slot.id, location: slot.Location.location}); 
            setUpdateSlotModal(true);
        } else {
            alert("Could't update. Slot already booked!")
        }  
        
    }

    const handleUpdateInput = (event) => {
                  
        setUpdateItem({...updateItem})
        // setUpdateItem(...updateItem, updateItem['fromTime'] = event.target.value);
        console.log('updateItem', updateItem)
    }

    const renderAddSlotModel = () => {
        return (
            <Modal show={show}
                onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="controls bg-light align-items-center mt-3 p-2 rounded-2">
                        {error && <Alert variant="danger">{error}</Alert>}
                        {inputFields.map(inputField => (
                            <div className="row justify-content-between align-items-end" key={updateItem.id}>
                                <div>
                                    <div className="text-start mx-1 col">
                                        <label htmlFor="time1">From Time</label>
                                        <input type="time" className="form-control" value={inputField.fromTime} required name="fromTime" id="time1" onChange={event => handleUpdateInput(inputField.id, event)} placeholder="11:00 am - 12:30 pm" />
                                    </div>
                                    <div className="text-start mx-1 col">
                                        <label htmlFor="time2">To Time</label>
                                        <input type="time" className="form-control" value={inputField.toTime} required name="toTime" id="time2" onChange={event => handleChangeInput(inputField.id, event)} placeholder="11:00 am - 12:30 pm" />
                                    </div>
                                    <div className="text-start  mx-1 col">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" className="form-control" value={inputField.date} required name="date" id="date" onChange={event => handleChangeInput(inputField.id, event)} placeholder="12-06-2021" />
                                    </div>
                                    <div class="text-start  mx-1 col">
                                        <label for="inputlocation">Location</label>
                                        <select class="form-select" id="inputlocation" value={inputField.location} required name="location" aria-label="Floating label select example" onChange={event => handleChangeInput(inputField.id, event)}>
                                            <option value=''>----</option>
                                            {slots.locations.length > 0 ? slots.locations.map(location => (
                                                <option value={location.id}>{location.location}</option>
                                            )) : null}

                                        </select>
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

    const renderDeleteSlotModel = () => {
        return (
            <Modal show={deleteSlotModal}
            onHide={() => setDeleteSlotModal(false)} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Delete Slot</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
              <div className="controls bg-light align-items-center mt-3 p-2 rounded-2">
                {error && <Alert variant="danger">{error}</Alert>}
                <p>Are you sure you want to delete </p>
    
    
              </div>
    
            </Modal.Body>
            <Modal.Footer>
              <button className="shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={confirmDelete}> Confirm <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
              <button onClick={() => setDeleteSlotModal(false)} variant="secondary" className="shadow border-0 text-white bg-danger btn_primary rounded-pill"> Cancel <i className="fas fa-times bg-white text-dark" aria-hidden="true" /></button>
            </Modal.Footer>
          </Modal >
        )
    }

    const renderUpdateSlotModel = () => {
        return (
            <Modal show={updateSlotModal}
                onHide={() => setUpdateSlotModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="controls bg-light align-items-center mt-3 p-2 rounded-2">
                        {error && <Alert variant="danger">{error}</Alert>}
                            <div className="row justify-content-between align-items-end" key={updateItem.id}>
                                <div>
                                    <div className="text-start mx-1 col">
                                        <label htmlFor="time1">From Time</label>
                                        <input type="text" className="form-control" value={updateFromTime} required name="fromTime" id="time1" onChange={e => setUpdateFromTime(e.target.value)} placeholder="11:00 am - 12:30 pm" />
                                    </div>
                                    <div className="text-start mx-1 col">
                                        <label htmlFor="time2">To Time</label>
                                        <input type="text" className="form-control" value={updateToTime} required name="toTime" id="time2" onChange={e => setUpdateToTime(e.target.value)}  placeholder="11:00 am - 12:30 pm" />
                                    </div>
                                    <div className="text-start  mx-1 col">
                                        <label htmlFor="date">Date</label>
                                        <input type="text" className="form-control" value={updateDate} required name="date" id="date" onChange={e => setUpdateDate(e.target.value)}  placeholder="12-06-2021" />
                                    </div>
                                    <div class="text-start  mx-1 col">
                                        <label for="inputlocation">Location</label>
                                        <select class="form-select" id="inputlocation"  required name="location" onChange={e => setUpdateLocationId(e.target.value)} aria-label="Floating label select example" >
                                            <option value={updateLocationId}>{updateItem.location}</option>
                                            {slots.locations.length > 0 ? slots.locations.map(location => (
                                                <option value={location.id}>{location.location}</option>
                                            )) : null}

                                        </select>
                                    </div>
        
                                </div>
                            </div>
                        

                        <button onclick="add_slot()" className="mt-2 float-end shadow border-0  bg_yellow btn_primary rounded-pill" onClick={addSlot}> Add Slot </button>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className="shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={handleSubmit}> Save Changes <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
                    <button onClick={() => setUpdateSlotModal(false)} variant="secondary" className="shadow border-0 text-white bg-danger btn_primary rounded-pill"> Close <i className="fas fa-times bg-white text-dark" aria-hidden="true" /></button>
                </Modal.Footer>
            </Modal >
        )
    }

    return (
        <>
           <div className="tab-pane fade show active" id="pills_slot" role="tabpanel" aria-labelledby="pills_slot_tab">      
            <div className="content">
                <h6 className="mb-3"><strong>Add or modify Time, Date, and location</strong></h6>
                <div className="data_wrap">
                    {slots.slots.length > 0 ? slots.slots.map(slot => (
                        <div className="data d-flex justify-content-between bg_yellow rounded-3 align-items-center p-2 mb-2">
                            <div className="me-2">Time: <span>{slot.fromTime}-{slot.toTime}</span></div><div className="me-2">Date: <span>{slot.date}</span></div><div className="me-2">Location: <span>{slot.Location.location}</span></div>
                            <div>
                                <button className="mx-2 p-0 btn_primary border-0 rounded-2 text-white bg_green2" onClick={() => updateSlot(slot)}><i className="far fa-edit m-0" /></button>
                                <button className="btn_delete p-0 btn_primary border-0 rounded-2 text-white bg-danger" onClick={() => deleteSlot(slot)}><i className="far fa-trash-alt m-0" /></button>
                            </div>
                        </div>
                    )) : null}
                </div>
                <button className="mt-3 shadow border-0 text-white bg_green2 btn_primary rounded-pill" onClick={addNewSlot}> Add <i className="fas fa-cloud-upload-alt bg-white color_green" aria-hidden="true" /></button>
            </div>
            </div>
            
        {renderAddSlotModel()}
        {renderDeleteSlotModel()}
        {renderUpdateSlotModel()}
            
        </>
    )

}

export default Slots