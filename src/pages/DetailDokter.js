import React from 'react';
import Styles from '../assets/styles/Atom.module.css';
import Styles2 from "../assets/styles/DetailDokter.module.css";
import { useNavigate } from 'react-router-dom';


const DetailDokter = ({ dokter }) => {
    // const [Item,Setitem]= useState(0)
    // const [Harga,setHarga] = useState(0)
    // const[Invisible, setInvisible] = useState(false)
    // const Total = Item * Harga

    const navigate = useNavigate()
    const confirm =() =>{
        navigate("/confirm")
    }

    if (!dokter) {
        return <div className="error">Product not found!</div>;
    }

    return (
        <div className={Styles2.containers}>
            <div className={Styles2.topSection}>
                <div className={Styles2.leftSection}>
                    <img src={dokter.foto} alt={dokter.nama} />
                </div>
                <div className={Styles2.rightSection}>
                    <div className={Styles2.topside}>
                        <h1>{dokter.nama}</h1>
                        <h4><span>Kategori: </span>{dokter.kategori}</h4>
                        <h4><span>Pengalaman: </span>{dokter.pengalaman}</h4>
                    </div>
                    <div className={Styles2.bottomside}>
                        <h4><span>Alamat: </span>{dokter.alamat_praktik}</h4>
                        <h3 className={Styles2.harga}>Rp. {dokter.harga}</h3>
                    </div>
                    <div className={Styles2.btn}>
                        <button className={Styles.orangesedang} onClick={confirm}>Konsultasi</button>
                        {/* <button className={Styles.putihsedang} onClick={handleClick}>bahkan ke keranjang</button> */}
                        {/* {Invisible ? <Keranjang item={Item} total={Total} /> : ""} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDokter;
