class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.string :zip_code
      t.string :device
      t.string :recorded_at
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
