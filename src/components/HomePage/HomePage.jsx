import React from 'react'
import GoodListPage from '../GoodListPage/GoodListPage'

const HomePage = (props) => {
  return (
    <section>
      <h1>Добро пожаловать в наш магазин подарочных сертификатов!</h1>
      <GoodListPage
        isCertificate={props.isCertificate}
        certificates={props.certificates}
        isLoading={props.isLoading}
      />
    </section>
  )
}

export default HomePage
