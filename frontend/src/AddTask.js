import './AddTask.scss';

const AddTask = props => {
  const {visible, addTask} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { body, day, imp } = e.target;
    const task = {
      body: body.value,
      day: day.value,
      imp: imp.checked
    };
    addTask(task);
    body.value = ''
    day.value = '';
    imp.checked = false;
  }

  if (!visible) {
    return null;
  }

  return (
    <div className='AddTask'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label>Task</label>
            <input
              type='text'
              name='body'
              placeholder='e.g. 10 mins workout'
              />
          </div>
          <div className='form-control'>
            <label>Date and Time</label>
            <input
              type='text'
              name='day'
              placeholder='e.g. today 5PM'
              />
          </div>
          <div className='form-control checkbox'>
            <label>Mark as important</label>
            <input
              type='checkbox'
              name='imp'              
              />
          </div>
          <button type='submit'>
            Save Task
          </button>
        </form>
      </div>
  )
}

export default AddTask;