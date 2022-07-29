class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :status
      t.string :notes

      t.timestamps
    end
  end
end
