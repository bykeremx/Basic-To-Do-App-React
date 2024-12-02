import React, { useState } from 'react';
import {FaNoteSticky } from 'react-icons/fa6'

const UpdateModal = ({ isModalOpen, closeModal, UpdateTodosData, UpdateTaskFunc }) => {

    const [newTitle , setNewTitle] = useState(UpdateTodosData.title) 
    const [newContent , setNewContent] = useState(UpdateTodosData.content) 
    const updateHandleChange = () => {
        UpdateTaskFunc(newTitle,newContent,UpdateTodosData.id);
    }

    return (
        <>


            {isModalOpen && (
                <div className="modal is-active">
                    <div className="modal-background" onClick={closeModal}></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">

                                Güncelle - {UpdateTodosData.title}
                            </p>
                            <button
                                className="delete"
                                aria-label="close"
                                onClick={closeModal}
                            ></button>
                        </header>
                        <section className="modal-card-body">
                            {/* Modal içeriği buraya gelecek */}




                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <div className="control has-icons-left has-icons-right">
                                            <div className="field">
                                                <label className="label">
                                                    <FaNoteSticky className='mr-3' />
                                                    Name</label>
                                                <div className="control">
                                                    <input
                                                        value={newTitle}
                                                        onChange={(e)=>setNewTitle(e.target.value)}
                                                        className="input" type="text" placeholder="Başlığı girin... " />
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">Yapılacaklar</label>
                                                <div className="control">
                                                    <textarea
                                                        value={newContent}
                                                        onChange={(e)=>setNewContent(e.target.value)}
                                                        class="textarea" placeholder="Yapılacaklar girin ... "></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button  onClick={updateHandleChange} className="button   is-dark  is-success mr-1">
                                Güncelle !
                            </button>
                        </footer>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateModal;
