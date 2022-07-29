class TasksController < ApplicationController

  def index
    @tasks = Task.all
  end

  def create
    @task = Task.create
    redirect_to root_path, notice: 'New task added!'
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
end
