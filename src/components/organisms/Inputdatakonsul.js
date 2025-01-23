import React from 'react'

const Inputdatakonsul = () => {
  return (
    <div className='container'>
        <form action="">
            <div className='row'>
                <div className='column'>
                    <h3 className='title'>Personal Data</h3>
                    <div className='input-box'>
                        <span>Full Name : </span>
                        <input type='text' placeholder='Marvin Luckianto Wiliawan'/>
                    </div>
                    <div className='input-box'>
                        <span>Email : </span>
                        <input type='email' placeholder='example@example.com'/>
                    </div>
                    <div className='input-box'>
                        <span>Tanggal : </span>
                        <input type='text' placeholder='24 / 05 / 2025'/>
                    </div>
                    <div className='input-box'>
                        <span>Jam : </span>
                        <input type='text' placeholder='15:00'/>
                    </div>

                    <div className='flex'>
                        <div className='input-box'>
                            <span>State : </span>
                            <input type='text' placeholder='Negara Tembung'/>
                        </div>
                        <div className='input-box'>
                            <span>Postal Code : </span>
                            <input type='text' placeholder='12345'/>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <h3 className='title'>Payments</h3>
                    <div className='input-box'>
                        <span>Card :  </span>
                        <img src='https://www.pngitem.com/pimgs/m/179-1791998_credit-card-icons-png-download-credit-card-logo.png'/>
                    </div>
                    <div className='input-box'>
                        <span>Name On Card </span>
                        <input type='text' placeholder='Marvin Luckianto Wiliawan'/>
                    </div>
                    <div className='input-box'>
                        <span>Card Number :  </span>
                        <input type='text' placeholder='1122 3344 5566'/>
                    </div>
                </div>
            </div>
            <button type='submit' className='submit-btn'>Pay Now!</button>
        </form>

    </div>
  )
}

export default Inputdatakonsul