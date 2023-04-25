import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const ModalPage = () => {
 const [openModal, setOpenModal] = useState(false)
 const handlelick = () => setOpenModal(true)
 const onClose = (e: Event & { target: HTMLInputElement }) => {
  if (e.target.classList.contains("inset-0")) {
   setOpenModal(false)
  }
 }
 const closeBtn = <Button primary onClick={() => setOpenModal(false)}>Close</Button>
 return (
  <div>
   <Button onClick={handlelick} primary>open modal</Button>
   {openModal && <Modal onClose={onClose} closeBtn={closeBtn} >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus reprehenderit nam tenetur impedit quos officiis, nisi pariatur repudiandae, eius sequi illum, numquam minus? Cupiditate soluta nobis nostrum corporis? Maiores quisquam voluptate enim assumenda quibusdam neque amet aspernatur, ab sed corporis laboriosam velit? Id ex, a, alias exercitationem excepturi repudiandae doloribus fugit harum cupiditate impedit quam quidem minima dolore aut voluptates rem aspernatur est delectus nisi. Cum sunt reprehenderit, fugiat hic sequi impedit deserunt! Cum accusamus cumque dolorem sunt porro quidem nam voluptatum deleniti est, libero, aperiam beatae numquam, nobis ab distinctio! Sint assumenda consequatur corporis obcaecati architecto eius velit, voluptate nostrum natus, dolores ex facilis molestias modi suscipit. Exercitationem, itaque! Maiores illo rem ducimus ipsa eveniet facere tempora amet inventore error! In consequatur cupiditate deleniti voluptatibus, maiores reprehenderit, repellendus nemo totam sapiente tempora iure labore, unde assumenda soluta repudiandae delectus. Minima repudiandae perferendis provident dolor, modi ea voluptatum at.</p></Modal>}
  </div>
 )
}

export default ModalPage
