const initialState = [
    {
        id: 104,
        name: 'Сделать первый проект',
        deadline: '2020-04-30',
        description: 'Первый проект по теме React',
        status: 'ToDo'
    }
];

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.task];
        case 'EDIT_TASK':
            const newTasks = [...state];
            for (const task of newTasks) {
                if (task.id === action.id) {
                    task.name = action.name;
                    task.deadline = action.deadline;
                    task.description = action.description;
                    task.status = action.status;
                }
            }
            newTasks.filter(task => task.status === 'Delete');
            return newTasks;
        default:
            return state;
    }
};

export {taskReducer};