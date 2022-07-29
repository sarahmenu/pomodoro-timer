class TasksController < ApplicationController

  def index
    @tasks = Task.all
  end

  def create
    @task = Task.create
    redirect_to root_path, notice: 'New task added!'
  end

end
