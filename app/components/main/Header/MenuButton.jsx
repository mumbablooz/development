import ShowIcon from '../ShowIcon/ShowIcon'

export default function MenuButton({isOpen,setIsOpen}) {

   function handleOnClick(){
setIsOpen(!isOpen)
    }

  return (   
        <div className='iconButton'
        onClick={handleOnClick}
                style={{cursor: 'pointer'}}>
                  <ShowIcon
        iconName={!isOpen ? 'menu' : 'cancel'} 
        size={'25'}     
        />
        </div>
  )
}
