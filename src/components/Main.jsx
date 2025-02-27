import { LeftSideColumn } from '/src/components/LeftSideColumn.jsx'
import { MainColumn } from '/src/components/MainColumn.jsx'

export function Main() {

    return (
      <>
      <div className='main'>
        <LeftSideColumn />
        <MainColumn />
        </div>
      </>
    )
  }