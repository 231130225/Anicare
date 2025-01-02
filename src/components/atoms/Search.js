import React from 'react'
import Styles from "../../assets/styles/Atom.module.css"

const Search = () => {
  return (
    <form>
      <input className={Styles.input} placeholder='Search'></input>
      <button className={Styles.orangekecil}>Cari</button>
    </form>
  )
}

export default Search
