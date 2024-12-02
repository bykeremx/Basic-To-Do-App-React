import React, { useState } from 'react'
import UpdateModal from './UpdateModal'
import { FaNoteSticky, FaAngleDown, FaPencil, FaTrash } from 'react-icons/fa6'
const TaskList = ({ Todos, UpdateTaskFunc, deleteTodo }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const { title, content, id } = Todos

    return (
        <>


            <div class="cell">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">

                            <FaNoteSticky className='mr-4 ' /> {title}

                        </p>
                        <button className="card-header-icon" aria-label="more options">
                            <span class="icon">
                                <FaAngleDown />
                            </span>
                        </button>
                    </header>
                    <div class="card-content">
                        <div className="content">
                            {content}
                        </div>
                    </div>
                    <footer className="card-footer">
                        <span className="card-footer-item">
                            <button class="button is-primary is-dark is-fullwidth"
                                onClick={openModal}
                            >
                                <FaPencil />
                            </button>
                        </span>
                        <span className="card-footer-item">
                            <button onClick={() => deleteTodo(id)} class="button is-dark is-danger is-fullwidth">


                                <FaTrash />
                            </button>
                        </span>
                    </footer>
                </div>

            </div>


            <UpdateModal isModalOpen={isModalOpen} closeModal={closeModal} UpdateTodosData={Todos} UpdateTaskFunc={UpdateTaskFunc} />
        </>
    )
}

export default TaskList
