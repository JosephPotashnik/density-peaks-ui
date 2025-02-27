import {Button} from '/src/components/Button.jsx'

export function LeftSideColumn({ onFileLoad }) {

    return (
      <div className="leftSideColumn"> 
        <h3>Datasets</h3>
        <Button text="chameleon" onFileLoad={onFileLoad} />
        <Button text="flame" onFileLoad={onFileLoad}/>
        <Button text="Jain" onFileLoad={onFileLoad}/>
        <Button text="pathBased" onFileLoad={onFileLoad}/>
        <Button text="s1" onFileLoad={onFileLoad}/>
        <Button text="spiral" onFileLoad={onFileLoad} />
        <Button text="zahn" onFileLoad={onFileLoad}/>
      </div>
    )
  }