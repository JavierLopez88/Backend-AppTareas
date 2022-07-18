import Task from '../models/Task'

//----------------------------------------------------------------------------------------------
export const findAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: 'No pueden encontrarse las tareas',
            error: error
        })
    }
};
//----------------------------------------------------------------------------------------------
export const findDoneTasks = async (req, res) => {
    try {
        const doneTasks = await Task.find({ done: true });
        if(doneTasks.done != true) {
            return res.json({message: 'No hay tareas realizadas'});
        } 
        res.json(doneTasks);
    } catch (error) {
        res.status(500).json({
            message: 'Error de conexión',
            error: error
        })
    }
}
//----------------------------------------------------------------------------------------------
export const createNewTask = async (req, res) => {

    //validar request
    if(!req.body.title){
        return res.status(400).send({message: 'Se requiere un título de tarea'})
    }

    try {
        const neoTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        })//model
        const saveTask = await neoTask.save(); //guarda en la base
        res.json(saveTask);

    } catch (error) {
        res.status(500).json({
            message: 'Error de conexión',
            error: error
        })
    }
}
//----------------------------------------------------------------------------------------------
export const findOneTask = async (req, res) => {
    
    try {
        const oneTask = await Task.findById(req.params.id);

        if(!oneTask) {
            return res.status(404).json({message: `Tarea de id: ${req.params.id} no existe`})
        }
        
        res.json(oneTask);

    } catch (error) {
        res.status(500).json({
            message: 'Error de conexión',
            error: error
        })
    }
}
//----------------------------------------------------------------------------------------------
export const deleteTask = async (req, res) => {
    try {
        const delTask = await Task.findByIdAndDelete(req.params.id);

        res.json({
            message: 'La tarea de título "' + delTask.title + '" ha sido eliminada',
            id: delTask.id
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error de conexión',
            error: error
        })
    }
}
//----------------------------------------------------------------------------------------------
export const updateTask = async (req, res) => {
    try {
        const upTask = Task.findByIdAndUpdate(req.params.id, req.body)
        const saveTask = await upTask.update(); //actualiza en la base
        res.json({
            message: `La tarea de id: ${req.params.id} ha sido actualizada`,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error de conexión',
            error: error
        })
    }
}
//----------------------------------------------------------------------------------------------



