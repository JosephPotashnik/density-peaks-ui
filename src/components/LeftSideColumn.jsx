import {Button} from '/src/components/Button.jsx'

export function LeftSideColumn() {

    return (
      <>
        <div className="leftSideColumn"> 
        <p>left side</p>
      <Button text="Dataset 1" filename="dataset1.txt" />
      <Button text="Dataset 2" filename="dataset2.txt" />
      <Button text="Dataset 3" filename="dataset3.txt" />
      <Button text="Dataset 4" filename="dataset4.txt" />
        </div>
      </>
    )
  }