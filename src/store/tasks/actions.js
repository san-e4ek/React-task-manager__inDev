const addTask = newTask => {
    return {
        type: 'ADD_TASK',
        task: {...newTask}
    }
};

const editTask = newTask => {
  return {
      type: 'EDIT_TASK',
      id: newTask.id,
      name: newTask.name,
      deadline: newTask.deadline,
      description: newTask.description,
      status: newTask.status
  }
};

export {addTask, editTask};