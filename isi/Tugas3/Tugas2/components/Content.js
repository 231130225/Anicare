import React from 'react'
import "./Content.css"
import IsiContent from './IsiContent';
import DataContent from './DataContent';

function Content () {

    const dataList = DataContent();

    return (
        <section id='products'>
            <div className='content-container'>
                {dataList.map(data => (
                    <IsiContent
                        key={data.id}
                        cover={data.gambar} 
                        title={data.nama}
                        likes={data.likes}
                        view={data.view}
                        id={data.id}
                    /> 

                ))}
            </div>
        </section>
    )
}

export default Content
