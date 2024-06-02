import CustomImage from "./CustomImage"
import Task from "./Task"
import TasksImg from "../public/tasks.png";


function TaskSection() {
  return (
    <>
    <div className="nt-task">
          <CustomImage path={TasksImg} />
          <Task heading={"Never miss any task"} />
        </div>
        <div className="nt-task">
          <Task heading={"Drag Drop & Publish"} />
          <CustomImage path={TasksImg} />
        </div>
        </>

  )
}

export default TaskSection