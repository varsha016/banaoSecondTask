import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../redux/userAction'
import "./home.css"






const Home = () => {
    const [data, setdata] = useState()
    const [open, setOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { allUsers } = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getUserAction())

    }, [])
    // const handleToggle = () => {
    //     setIsToggled(!isToggled)
    // };
    return (<>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className='bg'>
            <div className="container mt-2 ">
                <div className='row'>
                    {!allUsers ? <div className="spinner-border " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : ""}

                    <div className="col-sm-6 mt-5">

                        <div className="card">
                            <strong className="card-header fs-2 text-center text-success">USER DETAILS</strong>
                            {allUsers?.map(item => <div className="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e => {
                                // handleToggle()
                                setdata(item)
                            }} >
                                <span className='' >
                                    <img src={item.avatar} alt="userImg" width={100} height={100} className='img-fluid rounded-circle' />
                                    <strong className='ms-5'>{item.profile.firstName} {item.profile.lastName}</strong>
                                    {/* <h1 >{item.id} </h1> */}


                                </span>
                            </div>

                            )}
                        </div>

                    </div>
                    <div className="col-sm-6">




                        <div className="modal bgcolor" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title d-flex text-center text-success" id="exampleModalLabel">Users Details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="card mt-2 ">
                                            <div className="card-header text-center fs-2 text-success alert alert-success">
                                                <strong>User Details</strong>

                                            </div>
                                            <div className="card-body">
                                                <div className=' d-flex justify-content-between'>
                                                    <div className='text-center'>
                                                        <img src={data?.avatar} alt="Img" width={250} height={250} className='img-fluid rounded-circle' />
                                                        <p>
                                                            <strong className='mt-5 text-secondary'>{data?.profile.username}</strong>

                                                        </p>
                                                    </div>
                                                    <div className='ps-4'>

                                                        <h6><span className='text-success'> FullName:-</span> {data?.profile.firstName} {data?.profile.lastName}</h6>
                                                        <h6><span className='text-success'> Email:-</span> {data?.profile.email}</h6>
                                                        <h6><span className='text-success'> Bio:-</span> {data?.Bio}</h6>


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer ">
                                        <button type="button" className="btn btn-success " data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>

            </div>
        </div>


    </>
    )
}

export default Home






