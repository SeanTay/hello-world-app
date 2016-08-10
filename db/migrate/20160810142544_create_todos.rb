class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.text :body
      t.string :tag
      t.string :duedate

      t.timestamps
    end
  end
end
