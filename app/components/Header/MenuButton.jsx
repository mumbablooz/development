export default function MenuButton({isOpen,setIsOpen}) {

   function handleOnClick(){
setIsOpen(!isOpen)
    }

  return (   
        <li className='button'>
            {!isOpen ? <img 
        width="24" 
        height="24" 
        src="https://img.icons8.com/material-outlined/24/var(--firstColor)/menu--v1.png"  
        alt="menu--v1"
        onClick={handleOnClick}
        style={{cursor: 'pointer'}}
        /> : <img 
        width="24" 
        height="24" 
        src="https://img.icons8.com/material/24/var(--firstColor)/cancel--v1.png" 
        alt="cancel--v1"
        onClick={handleOnClick}
        style={{cursor: 'pointer'}}/>}
        </li>
  )
}
