import React from 'react'
import { FaPlus,FaPencil, FaNoteSticky } from 'react-icons/fa6'
const AddToTask = ({ inputValues, AddTaskFunc }) => {
    //yapılacak kodlar ..... 
    // console.log(inputValues.title,inputValues.content);

    return (
        <>
            <div className='container mt-5'>
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <div className="control has-icons-left has-icons-right">
                                <div className="field">
                                    <label className="label">
                                        <FaNoteSticky className='mr-3' />
                                        Başlık</label>
                                    <div className="control">
                                        <input
                                            value={inputValues.title}
                                            onChange={(event) => { inputValues.setTitle(event.target.value) }}

                                            className="input" type="text" placeholder="Başlığı girin... " />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">
                                        <FaPencil className='mr-3' />
                                        Yapılacaklar</label>
                                    <div className="control">
                                        <textarea
                                            value={inputValues.content}
                                            onChange={(event) => { inputValues.setContent(event.target.value) }}
                                            class="textarea" placeholder="Yapılacaklar girin ... "></textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <button class="button is-primary is-dark is-fullwidth"

                                        onClick={() => { AddTaskFunc(inputValues.title, inputValues.content) }}
                                    >
                                        <FaPlus className='mr-3' />
                                        Ekle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToTask




