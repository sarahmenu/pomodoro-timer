class TasksController < ApplicationController

  def index
    @tasks = Task.all
    @task = Task.new
  end

  def create
    @task = Task.create(task_params)
    if @task.save
      redirect_to root_path, notice: 'New task added!'
    else
      render :new
    end
  end

  def update
    @task = Task.find(params[:id])
    @task.status = 'Done !'
    @task.save
    redirect_to tasks_path, notice: 'Task completed!'
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_path, notice: 'Task deleted!'
  end

  private

  def task_params
    params.require(:task).permit(:title, :notes)
  end
end
