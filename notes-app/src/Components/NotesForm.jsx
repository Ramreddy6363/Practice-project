import { useState } from 'react';
import { nanoid } from 'nanoid';
import TextInputs from './inputs/TextInputs';
import SelectInput from './inputs/SelectInput';
import TextareaInput from './inputs/TextareaInput';

const NotesForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });
  const [isFormVisible, setisFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      return alert('You need to have title and description to a note');
    }
    const date = new Date();
    //to create a new note
    const newNote = {
      id: nanoid(),
      CreatedOn:
        date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      ...formData,
    };

    setNotes([newNote, ...notes]);

    //to clear the inputs
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return (
    <>
      <button
        onClick={() => setisFormVisible(!isFormVisible)}
        className="w-full bg-gray-200 border border-gray-400 text-purple-600 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:border-purple-600 transition mb-4 hover:text-white"
      >
        {isFormVisible ? 'Hide form X' : 'Create new +'}
      </button>
      {isFormVisible && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInputs
            label="Title"
            name="title"
            value={formData.title}
            onchange={handleChange}
            required
          />
          <SelectInput
            label="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'Low', label: ' 🟢 Low' },
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟡 Medium' },
            ]}
          />

          <SelectInput
            label="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '⚒️ Work' },
              { value: 'Personal', label: '💻Personal' },
              { value: 'Ideas', label: '💡Ideas' },
            ]}
          />
          <TextareaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-purple-600 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-800">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NotesForm;
