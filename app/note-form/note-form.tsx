import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react";
import Note from "./note";

const NoteForm: React.FC<any> = ({
    note,
    isOpen,
    handleClose,
    handleAddNote
}) => {

    const handleSubmit = (event){
        /*const note: Note = {
            title: formData.title,
            description: formData.description,
            date: new Date().toLocaleDateString,
            category: formData.category,
            isDone: false
        }
        handleAddNote(formData)*/
        console.log(event.state)
        
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
                        <form action={handleSubmit} className="p-6">
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base/7 font-semibold text-gray-900">New Note</h2>

                                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                                Title
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                    <input
                                                        id="title"
                                                        name="title"
                                                        type="text"
                                                        placeholder="Remember about..."
                                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                                Description
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                                                Category
                                            </label>
                                            <div className="mt-2 grid grid-cols-1">
                                                <select
                                                    id="category"
                                                    name="category"
                                                    autoComplete="category-name"
                                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                >
                                                    <option>Personal</option>
                                                    <option>Work</option>
                                                    <option>Home</option>
                                                </select>
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" onClick={handleClose} className="text-sm/6 font-semibold text-gray-900">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}

export default NoteForm;