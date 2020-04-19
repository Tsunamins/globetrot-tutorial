class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :start_date
      t.string :end_date
      t.integer :user_id
      t.integer :location_id

      t.timestamps
    end
  end
end
