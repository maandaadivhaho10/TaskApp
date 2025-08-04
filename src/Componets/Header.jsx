import { Button } from "./Button"

export default function Header() {


    const onClick= () =>{
        console.log('Button clicked');

      }
  return (
      
          <header className="header">
            <h1>Tracker  Hader</h1>

            <Button color='green' text='Hello' onClick={onClick}/>
          </header>
  )
}
