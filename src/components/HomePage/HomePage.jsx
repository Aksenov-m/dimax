import React, { useState } from 'react'
import GoodListPage from '../GoodListPage/GoodListPage'

const HomePage = (props) => {
  return (
    <section>
      <h1>Добро пожаловать в наш магазин подарочных сертификатов!</h1>
      <GoodListPage certificates={props.certificates} />
    </section>
  )
}

export default HomePage
