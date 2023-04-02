import { useState, useAffect } from 'react'
import { useNavigate } from 'react-router-dom'



const ApplyModal = ({company, setshowApplyModal, setshowSuccessModal}) => {

    

    return (
        <div className=" flex justify-center items-center fixed bg-black bg-opacity-80 top-0 bottom-0 right-0 left-0">
            <div className=" bg-white h-fit px-10 py-8 rounded-xl " style={{width:"clamp(350px,46%,600px)"}}>
                <h1 className='font-header text-text text-xl font-bold mb-4' >Apply to offer</h1>
                <p className='font-body text-grayText'>Are you sure you want to apply to this internship offer from
                    <span className='font-body text-primary font-bold ml-2'>{company}</span>
                </p>
                <div className="flex gap-8 w-full items-center justify-center mt-8">
                    <button className="secondary-btn px-16 w-40 h-11"
                    onClick={() => { setshowApplyModal(false); console.log('ok') }}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="primary-btn px-16 w-40 h-11"
                    onClick={() => { setshowApplyModal(false);setshowSuccessModal(true)}}
                    >
                        Confirm
                    </button>
                </div>
            </div>
         

        </div>

    );
}

export default ApplyModal;
