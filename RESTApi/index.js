import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

app.all('/', (req, res) => {
    console.log("Request > ", req);
    console.log("Response >", res);
    res.send("jhgkjslfq");
    console.log("Response >", res);
})

const todos = [
    {
        id: "1",
        title: "Task 1",
        completed: false,
    },
    {
        id: "2",
        title: "Task 2",
        completed: true,
    }
]

//read
app.get('/todos', (req, res) => {
    res.json(todos)
})
//create
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo)
    res.json({
        message: "new todo added "
    })
})
//update
app.put('/todos/:id', (req, res) => {
    const newTodoData = req.body;
    const todoParamId = req.params.id;
    const todoIndex = todos.findIndex(td => td.id === todoParamId);
    if(todoIndex !== -1){
        todos[todoIndex] = {
            id: todoParamId,
            ...newTodoData,
        }
    }
    res.json({
        message: "ToDO updated"
    })
})
//delete
app.delete('/todos/:id', (req, res) => {
    const todoParamId = req.params.id;
    const todoIndex = todos.findIndex(td => td.id === todoParamId);
    if(todoIndex !== -1){
        todos.splice(todoIndex, 1);
    }
    res.json({
        message: "todo deleted"
    })
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`)
})

export default app;