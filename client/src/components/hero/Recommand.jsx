import React from "react"
import { recommand, treading } from "../../assets/data/data"
import { Card_sm } from "../common/Card_sm"
import { Title } from "../common/Title"

export const Recommand = () => {
  return (
    <>
      <section className='treading hero mt-7 p-6 '>
        <Title title='Recommend for you' />
        <div className='grid grid-cols-2 gap-5 items-center justify-center '>
          {recommand.map((item, i) => (
            <Card_sm cover={item.cover} name={item.name} tag={item.tag} i={i} />
          ))}
        </div>
      </section>
    </>
  )
}
